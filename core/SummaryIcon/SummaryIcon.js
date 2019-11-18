import React, { Component } from 'react';
export default class SummaryIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Summary"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Summary",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M19,18 L19,20 L3,20 L3,18 L19,18 Z M21,15 L21,17 L3,17 L3,15 L21,15 Z M20,11 L20,13 L13,13 L13,11 L20,11 Z M7,5 C8.65685425,5 10,6.34314575 10,8 C10,8.67575081 9.7765771,9.2993184 9.39957171,9.80086239 C10.3712071,10.5288247 11,11.6909811 11,13 L9,13 C9,11.8954305 8.1045695,11 7,11 C5.8954305,11 5,11.8954305 5,13 L3,13 C3,11.6909811 3.62879289,10.5288247 4.60081219,9.79909715 C4.2234229,9.2993184 4,8.67575081 4,8 C4,6.34314575 5.34314575,5 7,5 Z M21,8 L21,10 L13,10 L13,8 L21,8 Z M7,7 C6.44771525,7 6,7.44771525 6,8 C6,8.55228475 6.44771525,9 7,9 C7.55228475,9 8,8.55228475 8,8 C8,7.44771525 7.55228475,7 7,7 Z M18,5 L18,7 L13,7 L13,5 L18,5 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}