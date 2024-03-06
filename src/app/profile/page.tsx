"use client";

import styles from "./profilePage.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  },[status,router]);
  return (
    <div className={styles.container}>
      <h1>Profile</h1>
    </div>
  );
};

export default ProfilePage;