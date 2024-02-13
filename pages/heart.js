import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Heart.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../src/firebase'; // Import your Firebase configuration (db) from the appropriate location

const Heart = ({ imageUrl }) => {
  const router = useRouter();
  const { slugId } = router.query;

  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    const audio = document.getElementById('song');

    window.addEventListener('mousemove', (e) => {
      const x = e.pageX;
      const y = e.pageY;

      container.style.animation = 'none';
      container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    window.addEventListener('mouseout', () => {
      container.style.animation = 'animate 45s linear infinite';
    });

    window.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;

      container.style.animation = 'none';
      container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    window.addEventListener('touchend', () => {
      container.style.animation = 'animate 45s linear infinite';
    });

    container.addEventListener('touchstart', () => {
      const loveElement = document.querySelector(`.${styles.love}`);
      if (loveElement) {
        loveElement.style.opacity = '1';
        audio.play();
      }
    });

    container.addEventListener('mouseover', () => {
      const loveElement = document.querySelector(`.${styles.love}`);
      if (loveElement) {
        loveElement.style.opacity = '1';
        audio.play();
      }
    });

    container.addEventListener('mouseleave', () => {
      const loveElement = document.querySelector(`.${styles.love}`);
      if (loveElement) {
        loveElement.style.opacity = '0';
        audio.pause();
      }
    });

    container.addEventListener('touchend', () => {
      const loveElement = document.querySelector(`.${styles.love}`);
      if (loveElement) {
        loveElement.style.opacity = '0';
        audio.pause();
      }
    });

    // Cleanup function
    return () => {
      audio.pause(); // Pause the audio when the component unmounts
    };
  }, []);

  return (
    <>
    <div className={styles.wrapper}>
        <div className={`${styles.heart} ${styles.x1}`}></div>
        <div className={`${styles.heart} ${styles.x2}`}></div>
        <div className={`${styles.heart} ${styles.x3}`}></div>
        <div className={`${styles.heart} ${styles.x4}`}></div>
        <div className={`${styles.heart} ${styles.x5}`}></div>
        <div className={`${styles.altheart} ${styles.x6}`}></div>
    </div>
    <div className={styles.title}>
      <h1>TAP AND HOLD THE HEART!</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.front}>
        <audio id="song" src="/whenImetyou.mp3" type="audio/mp3" loop autoPlay></audio>
        <img src={imageUrl || 'https://freepngimg.com/thumb/megan_fox/21055-1-megan-fox-transparent-background.png'} className={styles.love} />
        <div className={styles.frontleft}></div>
        <div className={styles.frontright}></div>
      </div>

      <div className={styles.back}>
        <div className={styles.backleft}></div>
        <div className={styles.backright}></div>
      </div>

      <div className={styles.left}></div>
      <div className={styles.right}></div>

      <div className={styles.leftpiece}></div>
      <div className={styles.leftpiece2}></div>
      <div className={styles.leftpiece3}></div>
      <div className={styles.leftpiece4}></div>
      <div className={styles.leftpiece5}></div>
      <div className={styles.leftpiece6}></div>
      <div className={styles.leftpiece7}></div>
      <div className={styles.leftpiece8}></div>
      <div className={styles.leftpiece9}></div>
      <div className={styles.leftpiece10}></div>
      <div className={styles.leftpiece11}></div>
      <div className={styles.leftpiece12}></div>
      <div className={styles.leftpiece13}></div>
      <div className={styles.leftpiece14}></div>
      <div className={styles.leftpiece15}></div>
      <div className={styles.leftpiece16}></div>
      <div className={styles.leftpiece17}></div>
      <div className={styles.leftpiece18}></div>
      <div className={styles.leftpiece19}></div>
      <div className={styles.leftpiece20}></div>
      <div className={styles.leftpiece21}></div>
      <div className={styles.leftpiece22}></div>
      <div className={styles.leftpiece23}></div>



      <div className={styles.rightpiece}></div>
      <div className={styles.rightpiece2}></div>
      <div className={styles.rightpiece3}></div>
      <div className={styles.rightpiece4}></div>
      <div className={styles.rightpiece5}></div>
      <div className={styles.rightpiece6}></div>
      <div className={styles.rightpiece7}></div>
      <div className={styles.rightpiece8}></div>
      <div className={styles.rightpiece9}></div>
      <div className={styles.rightpiece10}></div>
      <div className={styles.rightpiece11}></div>
      <div className={styles.rightpiece12}></div>
      <div className={styles.rightpiece13}></div>
      <div className={styles.rightpiece14}></div>
      <div className={styles.rightpiece15}></div>
      <div className={styles.rightpiece16}></div>
      <div className={styles.rightpiece17}></div>
      <div className={styles.rightpiece18}></div>
      <div className={styles.rightpiece19}></div>
      <div className={styles.rightpiece20}></div>
      <div className={styles.rightpiece21}></div>
      <div className={styles.rightpiece22}></div>
      <div className={styles.rightpiece23}></div>



      <audio id="song" src="/whenImetyou.mp3" type="audio/mp3"></audio>

      {/* ... rest of your Heart component */}
    </div></>
  );
};

export default Heart;
