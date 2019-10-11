import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        cars: []
    }

    componentDidMount(){
        this.getCars();
    }

    getCars = () => {
        axios.get("/api/cars")
        .then((cars) => {
            console.log(cars);
            this.setState({cars: cars.data.data});
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
            <h1>This is my homepage!</h1>
                {this.state.cars.map((car) => (
                    <>
                    <p>Model: {car.model}</p>
                    <p>Color: {car.color}</p>
                    <p>Year: {car.year}</p>
                    </>
                ))}
            </div>
        );
    }
}

export default Home;