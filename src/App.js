import React from "react";
import "./styles.css";
import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  //* this is localstate
  //  state={
  //    age:21
  //  }

  //  onAgeUp =() =>{
  //    this.setState({
  //      ...this.state,
  //      age:++this.state.age
  //    })

  //  }
  //  onAgeDown =() =>{
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })

  //  }

  render() {
    return (
      <div className="App">
        <div>
          {" "}
          Age: <span>{this.props.age}</span>{" "}
        </div>
        <button onClick={this.props.onAgeUp}> Ageup </button>
        <button onClick={this.props.onAgeDown}> AgeDown </button>
        <hr />
        <div>
          <ul>
            {this.props.history.map(el => (
              <li>{el.age}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    age: state.age,
    history: state.history
  };
};
const mapDispatchToprops = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "Age_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "Age_Down", value: 1 })
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToprops
)(App);
