import React, { Component } from "react";
import "./css/App.css";
import Map from "./components/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinate: {}
    };
  }

  componentWillMount() {
    this.setDefaultCoordinate();
  }

  setDefaultCoordinate() {
    this.setState({
      coordinate: {
        center: [47.53333, 21.63333],
        zoom: 13
      }
    });
  }
  render() {
    return <Map coordinate={this.state.coordinate} />;
  }
}

export default App;
