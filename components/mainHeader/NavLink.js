"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${styles.link} ${styles.active}` : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;
