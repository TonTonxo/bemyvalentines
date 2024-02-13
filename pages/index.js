// pages/index.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
        <img src="/giphy.gif" alt="Valentine's Day GIF" className={styles.gifImage} />
      </div>
      <header className={styles.header}>
        <h1>Be My Valentines</h1>
        <p>Express your love with personalized messages and images</p>
      </header>
      <main className={styles.main}>
        <Link href="/compose" className={styles.composeButton}>
          Compose Message
        </Link>
      </main>
    </div>
  );
};

export default Home;
