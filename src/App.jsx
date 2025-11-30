import { useState, useEffect } from "react";

import { Description, Feedback, Options } from "./components";
import { FEEDBACK_TYPES, FEEDBACK_STORAGE_KEY } from "./types";
import { Container } from "./shared";
import styles from "./App.module.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (savedFeedback) {
      try {
        return JSON.parse(savedFeedback);
      } catch (error) {
        console.error("Error loading feedback from localStorage:", error);
      }
    }
    return {
      [FEEDBACK_TYPES.GOOD]: 0,
      [FEEDBACK_TYPES.NEUTRAL]: 0,
      [FEEDBACK_TYPES.BAD]: 0,
    };
  });
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    if (Object.values(feedback).some((value) => value > 0)) {
      setIsFeedbackVisible(true);
    } else {
      setIsFeedbackVisible(false);
    }
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  return (
    <Container>
      <div className={styles.app}>
        <Description />
        <Options
          feedback={feedback}
          setFeedback={setFeedback}
          onUpdateFeedback={updateFeedback}
          isResetVisible={isFeedbackVisible}
        />
        {isFeedbackVisible ? (
          <Feedback feedback={feedback} />
        ) : (
          <p className={styles.noFeedback}>No feedback yet</p>
        )}
      </div>
    </Container>
  );
}

export default App;
