import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainMeaderBackground from "./main-header-background";

function MainHeader() {
  return (
    <>
      <MainMeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* <img src={LogoImg.src} alt="A plate with food on it" /> */}
          <Image src={LogoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
