import React, { Component } from 'react';
export default class FlagIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Flag"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Flag",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M5,11 C6.65685425,11 8,9.65685425 8,8 C8,6.34314575 6.65685425,5 5,5 C3.34314575,5 2,6.34314575 2,8 C2,9.65685425 3.34314575,11 5,11 Z M11,7 L21,7 C21.5522847,7 22,6.55228475 22,6 C22,5.44771525 21.5522847,5 21,5 L11,5 C10.4477153,5 10,5.44771525 10,6 C10,6.55228475 10.4477153,7 11,7 Z M11,11 L21,11 C21.5522847,11 22,10.5522847 22,10 C22,9.44771525 21.5522847,9 21,9 L11,9 C10.4477153,9 10,9.44771525 10,10 C10,10.5522847 10.4477153,11 11,11 Z M3,15 L21,15 C21.5522847,15 22,14.5522847 22,14 C22,13.4477153 21.5522847,13 21,13 L3,13 C2.44771525,13 2,13.4477153 2,14 C2,14.5522847 2.44771525,15 3,15 Z M3,19 L21,19 C21.5522847,19 22,18.5522847 22,18 C22,17.4477153 21.5522847,17 21,17 L3,17 C2.44771525,17 2,17.4477153 2,18 C2,18.5522847 2.44771525,19 3,19 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}