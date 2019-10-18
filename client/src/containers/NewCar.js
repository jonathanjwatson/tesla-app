import React, { Component } from "react";

class NewCar extends Component {
  state = {
    model: "",
    color: ""
  };

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    console.log("Value: ", value);
    console.log("Name: ", name);

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>This is my new car container</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Model"
              onChange={this.handleChange}
              name="model"
              value={this.state.model}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Color"
              onChange={this.handleChange}
              name="color"
              value={this.state.color}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewCar;
