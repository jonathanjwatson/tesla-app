import React from "react";
import { Link } from "react-router-dom";

const SingleButton = props => {
  return (
    <Link to={props.link}>
      <button className="btn btn-primary">{props.text}</button>
    </Link>
  );
};

export default SingleButton;
