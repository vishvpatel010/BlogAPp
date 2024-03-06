import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';
import { name } from '@/data.js';
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, {name} here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea pariatur soluta voluptatibus animi ipsa, iusto, magnam excepturi minus quam quis dolorem ab facere esse fugiat maxime! Nihil, similique eveniet.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
export default Featured;