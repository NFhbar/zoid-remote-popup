import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Charge from "@charge/charge-checkout";

// let ChargeComponent = window.Charge.ButtonComponent.driver("react", {
//   React: React,
//   ReactDOM: ReactDOM
// });

class App extends Component {
  render() {
    console.log("XPROPS", window.xprops);
    return <div className="App">This is the Charge Checkout Component!</div>;
  }
}

export default App;
