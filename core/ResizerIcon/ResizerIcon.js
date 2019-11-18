import React, { Component } from 'react';
export default class ResizerIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Resizer"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Resizer",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("polygon", {
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color,
      points: "20 12 20 20 12 20"
    })));
  }

}