import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let config = {};
config.params = {
  center: [47.53333, 21.63333],
  zoomControl: false,
  zoom: 13,
  maxZoom: 19,
  minZoom: 11,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
  params: {
    minZoom: 11,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    id: "",
    accessToken: ""
  }
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null
    };
    this._mapNode = null;
  }

  componentDidMount() {
    if (!this.state.map) this.init(this._mapNode);
    console.log(this.props);
  }

  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, config.params);
    L.control.zoom({ position: "bottomleft" }).addTo(map);
    // L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(
      config.tileLayer.uri,
      config.tileLayer.params
    ).addTo(map);

    var markerParams = {
      radius: 6,
      fillColor: "Red",
      color: "#fff",
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.8
    };
    var circle = L.circle([47.53333, 21.63333], markerParams).addTo(map);
    circle.bindPopup("I am a circle.");
    // set our state to include the tile layer
    this.setState({ map, tileLayer });
  }
  render() {
    return (
      <div id="mapUI">
        {}
        <div ref={node => (this._mapNode = node)} id="map" />
      </div>
    );
  }
}

export default Map;
