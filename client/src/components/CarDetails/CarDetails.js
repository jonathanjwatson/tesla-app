import React from "react";
import SingleButton from "../../components/SingleButton/SingleButton";

const CarDetails = props => {
  return (
    <div className="row" style={{paddingBottom: "5em"}}>
      <div className="col-sm-2" />
      <div className="col-sm-4">
        <img
          src={props.imageURL}
          className="single-car-image"
          alt={`Tesla Model ${props.model} in ${props.color}`}
        />
      </div>
      <div className="col-sm-6">
        <h1>Tesla Model {props.model}</h1>
        <ul>
          <li>Color: {props.color}</li>
          <li>Year: {props.year}</li>
          <li>ID: {props._id}</li>
        </ul>
        {props.button}
      </div>
      <div className="col-sm-2" />
    </div>
  );
};

export default CarDetails;
