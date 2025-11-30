import PropTypes from "prop-types";

const Feedback = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);

  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
