import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='BlogApp' width={50} height={50} />
          <h1 className={styles.logoText}>BlogApp</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eius architecto non debitis! Qui in autem sint quo veniam, molestias voluptas itaque cum temporibus dicta quisquam aliquid dolores laudantium eveniet?
        </p>
        <div className={styles.icons}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/twitter.png' alt='twitter' width={24} height={24} />
        <Image src='/linkedin.png' alt='linkedin' width={24} height={24} />
        <Image src='/github.png' alt='github' width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>Blogs</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Food</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Linkedin</Link>
          <Link href='/'>Github</Link>
        </div>
      </div>
    </div>
  )
}
export default Footer;