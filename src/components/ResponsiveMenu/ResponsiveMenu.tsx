"use client";
import Link from "next/link";
import styles from "./responsiveMenu.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  const { data:session, status } = useSession();

  return (
    <div className={styles.container}>
      {
        status === 'unauthenticated'? (
          <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        ) : (
        <>
          <Image src={session?.user?.image} width={32} height={32} alt='profile' className={styles.image} onClick={() => setOpen(!open)}/>
        </>
        )
      }
      
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={() => setOpen(!open)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(!open)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => setOpen(!open)}>Login</Link>
          ) : (
            <>
              <Link href="/write" onClick={() => setOpen(!open)}>Write</Link>
              <Link href="/profile" onClick={() => setOpen(!open)}>Profile</Link>
              <span className={styles.link} onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;