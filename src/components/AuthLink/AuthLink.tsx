"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";
import {  signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button} from "@nextui-org/react";
const AuthLinks = () => {
  const [open,setOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
        <Dropdown  className={styles.menu}>
          <DropdownTrigger>
            <Image src={session?.user?.image} width={32} height={32} alt='profile' className={styles.image} onClick={() => setOpen(!open)}/>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" className={styles.item}>
            <DropdownItem className={styles.item}>
              <Link href="/write" className={styles.link}>
                Write
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.item}>
              <Link href="/profile" className={styles.link}>
                Profile
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.item}>
              <span className={styles.link} onClick={signOut}>
                Logout
              </span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        </>
      )}
    </div>
  );
};

export default AuthLinks;