/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
import './Card.css';

const Card = (props) => {
  const classes = `card + ${props.className}`;
  // This is to add any value set on the className prop is added to the variable the to the div
  return <div className={classes}>{props.children}</div>;
};

export default Card;
