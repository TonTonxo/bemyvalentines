import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db, collection, doc, setDoc, storage, ref, uploadBytes, getDownloadURL } from '../src/firebase';
import styles from '../styles/Compose.module.css';
import Loader from '../components/Loader';
import Heart from './heart'; // Import the Heart component

const Compose = () => {
  const [messageData, setMessageData] = useState({
    to: '',
    from: '',
    message: '',
    image: null,
  });

  const [showLoader, setShowLoader] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loadingComplete) {
      const timeoutId = setTimeout(() => {
        // Redirect to the dynamic page based on the 'to' field
        router.push(`/${messageData.to}`);
      }, 500);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [loadingComplete, messageData.to, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMessageData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleLoaderComplete = () => {
    setLoadingComplete(true);
    // Show the loader for 5 seconds before transitioning to the dynamic page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoader(true); // Show the loader

      let imageUrl = '';
      if (messageData.image) {
        // Upload image to storage
        const storageRef = ref(storage, `images/${messageData.image.name}`);
        await uploadBytes(storageRef, messageData.image);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Set the document ID to the value of the "to" field
      const messageId = messageData.to;

      // Store the data in Firebase with the specified document ID
      const messagesCollection = collection(db, 'messages');
      const docRef = doc(messagesCollection, messageId);

      await setDoc(docRef, {
        to: messageData.to,
        from: messageData.from,
        message: messageData.message,
        image: imageUrl,
        createdAt: new Date(),
      });

      // Wait for 5 seconds to simulate loader animation
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Set loading state back to false after submission
      setShowLoader(false);
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Error submitting message. Please try again.');
    } finally {
      // Set loading state back to false after submission
      setShowLoader(false);
    }
  };

  return (
    <div className={styles.container}>
      {showLoader ? (
        <Loader onLoaderComplete={handleLoaderComplete} />
      ) : (
        <>
          <h1>HAPPY VALENTINE'S DAY</h1>
          <form onSubmit={handleSubmit} className={styles.composeForm}>
            <label htmlFor="to" className={styles.formLabel}>
              To:
              <input
                type="text"
                id="to"
                name="to"
                value={messageData.to}
                onChange={handleChange}
                className={styles.formInput}
              />
            </label>

            <label htmlFor="from" className={styles.formLabel}>
              From:
              <input
                type="text"
                id="from"
                name="from"
                value={messageData.from}
                onChange={handleChange}
                className={styles.formInput}
              />
            </label>

            <label htmlFor="message" className={styles.formLabel}>
              Your Message:
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Write your message here..."
                value={messageData.message}
                onChange={handleChange}
                className={styles.formTextarea}
              ></textarea>
            </label>

            <label htmlFor="image" className={styles.formLabel}>
              Upload an Image (REQUIRED!!):
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.formInput}
                required
              />
            </label>

            <button type="submit" className={styles.formBtn}>
              Send Message
            </button>
          </form>
          {loadingComplete && (
            // Display the Heart component after loading is complete
            <Heart imageUrl={messageData.image} />
          )}
        </>
      )}
    </div>
  );
};

export default Compose;
