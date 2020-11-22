import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import LayoutNavbar from "./components/LayoutNavbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <LayoutNavbar /> 
      </div>
    );
  }
}

export default App;