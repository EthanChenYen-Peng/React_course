import React, { Component } from "react";

import "./App.css";

import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      // To make use of the react-router
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
