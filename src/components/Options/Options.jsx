import PropTypes from "prop-types";

import { Btn } from "../../shared";
import { FEEDBACK_TYPES } from "../../types";
import styles from "./Options.module.css";

const Options = ({ isResetVisible, setFeedback, onUpdateFeedback }) => {
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <ul className={styles.optionsList}>
      <li>
        <Btn onClick={() => onUpdateFeedback(FEEDBACK_TYPES.GOOD)}>Good</Btn>
      </li>
      <li>
        <Btn onClick={() => onUpdateFeedback(FEEDBACK_TYPES.NEUTRAL)}>
          Neutral
        </Btn>
      </li>
      <li>
        <Btn onClick={() => onUpdateFeedback(FEEDBACK_TYPES.BAD)}>Bad</Btn>
      </li>
      {isResetVisible ? (
        <li>
          <Btn onClick={() => handleReset()}>Reset</Btn>
        </li>
      ) : null}
    </ul>
  );
};

Options.propTypes = {
  isResetVisible: PropTypes.bool.isRequired,
  setFeedback: PropTypes.func.isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
};

export default Options;
