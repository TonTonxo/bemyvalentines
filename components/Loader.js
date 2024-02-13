// components/Loader.js

import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import loaderAnimation from '../public/heartLoading.json';

const Loader = ({ onLoaderComplete }) => {
  useEffect(() => {
    const animationContainer = document.getElementById('loaderAnimation');
    const animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: loaderAnimation,
    });

    const onAnimationComplete = () => {
      onLoaderComplete();
    };

    animation.addEventListener('complete', onAnimationComplete);

    // Cleanup function
    return () => {
      animation.removeEventListener('complete', onAnimationComplete);
      animation.destroy(); // Destroy the animation when the component unmounts
      animationContainer.innerHTML = ''; // Remove the animation container from the DOM
    };
  }, [onLoaderComplete]);

  return (
    <div id="loaderAnimation" className="loaderAnimation"></div>
  );
};

export default Loader;
