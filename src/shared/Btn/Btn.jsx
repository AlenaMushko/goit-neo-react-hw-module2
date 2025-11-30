import PropTypes from "prop-types";

const Btn = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
