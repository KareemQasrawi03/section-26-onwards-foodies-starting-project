import fs from "node:fs/promises";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   throw new Error('Loading meals failed')
  return db.prepare("SELECT * FROM meals").all();
}

export default function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  try {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    meal.summary = xss(meal.summary);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;
    const imagePath = `/images/${fileName}`;
    const filePath = `public${imagePath}`;

    const bufferedImage = await meal.image.arrayBuffer();
    const buffer = Buffer.from(bufferedImage);

    await fs.writeFile(filePath, buffer);

    meal.image = imagePath;

    db.prepare(
      `
      INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run({
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image,
      slug: meal.slug,
    });
  } catch (error) {
    console.error("Error saving meal:", error);
    throw new Error("Failed to save meal: " + error.message);
  }
}
