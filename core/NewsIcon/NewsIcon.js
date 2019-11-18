import React, { Component } from 'react';
export default class NewsIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/News"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/News",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M19,2 C20.6568542,2 22,3.34314575 22,5 L22,19 C22,20.6568542 20.6568542,22 19,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,10 C2,8.34314575 3.34314575,7 5,7 L5.99994443,7 L5.99994443,9 L5,9 C4.44771525,9 4,9.44771525 4,10 L4,19 C4,19.5522847 4.44771525,20 5,20 C5.55228475,20 6,19.5522847 6,19 L6,5 C6,3.34314575 7.34314575,2 9,2 L19,2 Z M19,4 L9,4 C8.44771525,4 8,4.44771525 8,5 L8,19 C8,19.3506354 7.93984578,19.6872211 7.82929429,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,5 C20,4.44771525 19.5522847,4 19,4 Z M16.0000001,15 L16.0000001,17 L10.0000001,17 L10.0000001,15 L16.0000001,15 Z M18.0000001,12 L18.0000001,14 L10.0000001,14 L10.0000001,12 L18.0000001,12 Z M16.0000001,9 L16.0000001,11 L10.0000001,11 L10.0000001,9 L16.0000001,9 Z M18.0000001,6 L18.0000001,8 L10.0000001,8 L10.0000001,6 L18.0000001,6 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}