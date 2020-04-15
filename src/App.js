import React from "react";
import "./styles.css";
import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
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
      <div classname="App">
        <div>
          {" "}
          Age: <span>{this.props.age}</span>{" "}
        </div>
        <button onClick={this.props.onAgeUp}> Ageup </button>
        <button onClick={this.props.onAgeDown}> AgeDown </button>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    age: state.age
  };
};
const mapDispatchToprops = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "Age_UP" }),
    onAgeDown: () => dispatch({ type: "Age_Down" })
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToprops
)(App);
