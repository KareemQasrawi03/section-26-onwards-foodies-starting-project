import React from "react";
import classess from "./page.module.css"
import Link from "next/link";
import MealsGrid from "@/comonents/meals/meals-grid";

function MealsePage() {
  return <>
    <header className={classess.header}>
      <h1>Delichious meals, created <span className={classess.highlight}>by you</span></h1>
      <p>Choose your favorite recipe and cook it yoursefl. it is easy and fun!</p>
      <p className={classess.cta}>
        <Link href="/meals/share">Shrae Your Favority Recipe</Link>
      </p>
    </header>
    <main className={classess.main}>
      <MealsGrid meals={[]}/>
    </main>
  </>
}

export default MealsePage;
