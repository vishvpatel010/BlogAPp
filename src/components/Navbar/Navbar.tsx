import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../AuthLink/AuthLink";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {logotext, socialprofils} from '@/data.js';
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href={socialprofils.facebook} className={styles.socialIcon} target="_blank">
          <Image src='/facebook.svg' alt='facebook' width={24} height={24} />
        </a>
        <a href={socialprofils.twitter} className={styles.socialIcon} target="_blank">
          <Image src='/twitter.svg' alt='twitter' width={24} height={24} />
        </a>
        <a href={socialprofils.linkedin} className={styles.socialIcon} target="_blank">
          <Image src='/linkedin.svg' alt='linkedin' width={24} height={24} />
        </a>
        <a href={socialprofils.github} className={styles.socialIcon} target="_blank">
          <Image src='/github.svg' alt='github' width={24} height={24} />
        </a>
      </div>
      <div className={styles.logo}>
        <Link href='/'>
          {logotext}
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLink />
        <ResponsiveMenu />
      </div>
    </div>
  );
};

export default Navbar;


