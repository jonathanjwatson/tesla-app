import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Single.css";
import CarDetails from "../../components/CarDetails/CarDetails";
import CollectionButton from "../../components/CollectionButton/CollectionButton";

class Single extends Component {
  state = {
    model: "",
    color: "",
    year: "",
    imageURL: "",
    _id: ""
  };

  componentDidMount() {
    this.getCarById();
  }

  getCarById = () => {
    axios
      .get("/api/cars/" + this.props.match.params.id)
      .then(car => {
        console.log(car);
        this.setState({
          model: car.data.data.model,
          color: car.data.data.color,
          year: car.data.data.year,
          imageURL: car.data.data.imageURL,
          _id: car.data.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteCarById = id => {
    let shouldDelete = window.confirm("Are you sure you want to delete this tesla?");
    if (shouldDelete === true) {
      axios
        .delete(`/api/cars/${id}`)
        .then(response => {
          console.log(response);
          alert("Your car was successfully deleted.");
          this.props.history.push("/collection");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <CarDetails
          {...this.state}
          button={<CollectionButton />}
          deleteButton={true}
          deleteCarById={this.deleteCarById}
        />
        <div className="row">
          <button>Had an accident?</button>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <Link to={"/edit/" + this.state._id}>
              <button>Edit</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
