import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import MainHeadBack from "@/components/mainHeader/MainHeadBack";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <MainHeadBack />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image width={50} height={50} src="/logo.png" alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
