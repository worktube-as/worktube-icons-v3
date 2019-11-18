import React, { Component } from 'react';
export default class UserIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/User"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/User",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M8.4,15 L8.4,15 C6.4,13.8 5,11.5 5,9 C5,5.1 8.1,2 12,2 C15.9,2 19,5.1 19,9 C19,11.5 17.6,13.8 15.6,15 C17.6,16.2 19,18.5 19,21 C19,21.6 18.6,22 18,22 C17.4,22 17,21.6 17,21 C17,18.2 14.8,16 12,16 C9.2,16 7,18.2 7,21 C7,21.6 6.6,22 6,22 C5.4,22 5,21.6 5,21 C5,18.5 6.4,16.2 8.4,15 Z M17,9 C17,6.2 14.8,4 12,4 C9.2,4 7,6.2 7,9 C7,11.8 9.2,14 12,14 C14.8,14 17,11.8 17,9 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}