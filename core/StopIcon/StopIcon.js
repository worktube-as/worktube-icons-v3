import React, { Component } from 'react';
export default class StopIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Stop"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Stop",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("rect", {
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color,
      x: "7",
      y: "7",
      width: "10",
      height: "10",
      rx: "2"
    })));
  }

}