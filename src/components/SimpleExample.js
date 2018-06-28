import React, { Component } from "react";
import { Map, TileLayer, Tooltip, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ButtonsComponent from "./ButtonsComponent";

export default class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
      coordinate: {},
      tilelayer: {}
    };
  }

  componentWillMount() {
    this.setState({
      coordinate: this.props.coordinate,
      tilelayer: {
        attribution:
          "&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>",
        url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
      }
    });
  }

  changeTileToWhite() {
    console.log(this.props);
    this.setState({
      tilelayer: {
        attribution:
          "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      }
    });
  }

  changeTileToBlack() {
    this.setState({
      tilelayer: {
        attribution:
          "&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>",
        url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
      }
    });
  }

  getEvents() {
    this.props.getEvents();
  }
  getRestaurants() {
    this.props.getRestaurants();
  }

  handleClick(e) {
    console.log(e);
  }
  render() {
    const position = this.state.coordinate.center;
    const tileLayer = this.state.tilelayer;
    let imageRestaurant = L.icon({
      iconUrl:
        "https://cdn2.iconfinder.com/data/icons/places-4/100/food_place_marker_location_restaurant_eat_fork_knife-512.png",

      iconSize: [30, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [15, 49], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    let marker;
    if (this.props.markers) {
      marker = this.props.markers.map(marker => {
        return (
          <Marker position={marker.position} key={marker.position[0]}>
            <Popup>
              <div> {marker.position} </div>
            </Popup>
          </Marker>
        );
      });
    }
    let restaurant;
    if (this.props.restaurants) {
      restaurant = this.props.restaurants.map(restaurant => {
        return (
          <Marker
            position={restaurant.position}
            key={restaurant.position[0]}
            icon={imageRestaurant}
          >
            <Popup>
              <div> {restaurant.position} </div>
            </Popup>
          </Marker>
        );
      });
    }

    return (
      <div>
        <Map
          onClick={this.handleClick}
          center={position}
          zoom={this.state.coordinate.zoom}
          minZoom={this.state.coordinate.zoom}
        >
          <TileLayer attribution={tileLayer.attribution} url={tileLayer.url} />
          {restaurant}
          {marker}
        </Map>
        <ButtonsComponent
          getEvents={this.getEvents.bind(this)}
          getRestaurants={this.getRestaurants.bind(this)}
          changeTileToWhite={this.changeTileToWhite.bind(this)}
          changeTileToBlack={this.changeTileToBlack.bind(this)}
        />
      </div>
    );
  }
}
