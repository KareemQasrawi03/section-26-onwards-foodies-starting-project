import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainMeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
