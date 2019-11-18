import React, { Component } from 'react';
export default class FilterIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Filter"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Filter",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M13,19 L9,19 L9,17 L13,17 L13,19 Z M15,15 L7,15 L7,13 L15,13 L15,15 Z M18,11 L4,11 L4,9 L18,9 L18,11 Z M22,7 L2,7 L2,5 L22,5 L22,7 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}