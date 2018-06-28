import React, { Component } from "react";
export default class ButtonsComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  changeTileToWhite() {
    this.props.changeTileTowhite();
  }

  changeTileToBlack() {
    this.props.getchangeTileToBlack();
  }

  getEvents() {
    this.props.getEvents();
  }
  getRestaurants() {
    this.props.getRestaurants();
  }

  render() {
    return (
      <div>
        <h1>
          <input
            type="button"
            value="White"
            onClick={this.changeTileToWhite.bind(this)}
          />
          <input
            onClick={this.changeTileToBlack.bind(this)}
            type="button"
            value="Black"
          />
          <input
            onClick={this.getEvents.bind(this)}
            type="button"
            value="Get Events"
          />
          <input
            onClick={this.getRestaurants.bind(this)}
            type="button"
            value="Get Restaurants"
          />

          <div class="row row-centered">
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Party
                <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#" onClick={this.getEvents.bind(this)}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#">Places</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Restaurants
                <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#" onClick={this.getRestaurants.bind(this)}>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href="#">Streetfood</a>
                </li>
                <li>
                  <a href="#">Fastfood</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Culture
                <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Places</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>
    );
  }
}
