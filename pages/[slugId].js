import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc, db } from '../src/firebase'; // Update this import based on your firebase setup
import styles from '../styles/Generated.module.css'; // Create a CSS module for styling
import Heart from './heart';

const MessagePage = () => {
  const router = useRouter();
  const { slugId } = router.query;
  const [messageData, setMessageData] = useState(null);
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [showHeart, setShowHeart] = useState(false); // New state to control the visibility of the Heart component

  useEffect(() => {
    const fetchMessageData = async () => {
      try {
        const messageDoc = await getDoc(doc(db, 'messages', slugId)); // Update 'messages' to your collection name
        if (messageDoc.exists()) {
          setMessageData(messageDoc.data());
        } else {
          console.error('Message not found');
        }
      } catch (error) {
        console.error('Error fetching message data:', error);
      }
    };

    if (slugId) {
      fetchMessageData();
    }
  }, [slugId]);

  useEffect(() => {
    if (slugId && messageData) {
      const messages = [
        `To: ${messageData.to}`,
        `From: ${messageData.from}`,
        `${messageData.message}`,
      ];

      const startTypingEffect = async () => {
        for (let i = 0; i < messages.length; i++) {
          await displayMessage(messages[i]);
          setDisplayedMessage(''); // Clear the displayed message after each message
        }

        // Set showHeart to true after the typing effect is complete
        setShowHeart(true);
      };

      const displayMessage = async (fullMessage) => {
        for (let j = 0; j < fullMessage.length; j++) {
          await new Promise((resolve) => {
            setTimeout(() => {
              setDisplayedMessage((prevMessage) => prevMessage + fullMessage[j]);
              resolve();
            }, 100);
          });
        }

        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
      };

      startTypingEffect();
    }
  }, [slugId, messageData]);

  useEffect(() => {
    // Refresh the page after the message is done loading
    if (showHeart) {
      setTimeout(() => {
        router.replace(router.asPath);
      }, 5000); // Adjust the timeout duration as needed
    }
  }, [showHeart, router]);

  if (!slugId || !messageData) {
    // Handle loading or error state
  }

  return (
    <div className={styles.messageContainer}>
      <p className={styles.messageText}>{displayedMessage}</p>

      {/* Conditionally render the Heart component after typing effect is complete */}
      {showHeart && messageData && messageData.image && <Heart imageUrl={messageData.image} />}
    </div>
  );
};

export default MessagePage;
