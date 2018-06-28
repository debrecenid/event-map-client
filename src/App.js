import React, { Component } from "react";
import "./css/App.css";
import Map from "./components/SimpleExample";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinate: {},
      markers: [],
      restaurants: []
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

  getEvents() {
    if (this.state.markers.length) {
      this.setState({
        markers: []
      });
    } else {
      this.setState({
        markers: [
          {
            position: [47.53333, 21.63533],
            zoom: 13
          },
          {
            position: [47.54333, 21.63333],
            zoom: 13
          },
          {
            position: [47.52333, 21.62333],
            zoom: 13
          },
          {
            position: [47.53833, 21.61733],
            zoom: 13
          }
        ]
      });
    }
  }
  getRestaurants() {
    if (this.state.restaurants.length) {
      this.setState({
        restaurants: []
      });
    } else {
      this.setState({
        restaurants: [
          {
            position: [47.51333, 21.64533],
            zoom: 13
          },
          {
            position: [47.53333, 21.63833],
            zoom: 13
          },
          {
            position: [47.51833, 21.63333],
            zoom: 13
          },
          {
            position: [47.54833, 21.61233],
            zoom: 13
          }
        ]
      });
    }
  }
  render() {
    return (
      <div>
        <Map
          markers={this.state.markers}
          restaurants={this.state.restaurants}
          coordinate={this.state.coordinate}
          getEvents={this.getEvents.bind(this)}
          getRestaurants={this.getRestaurants.bind(this)}
        />
      </div>
    );
  }
}

export default App;
