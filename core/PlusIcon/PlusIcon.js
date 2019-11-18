import React, { Component } from 'react';
export default class PlusIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Plus"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Plus",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M21,11 L13,11 L13,3 C13,2.4 12.6,2 12,2 C11.4,2 11,2.4 11,3 L11,11 L3,11 C2.4,11 2,11.4 2,12 C2,12.6 2.4,13 3,13 L11,13 L11,21 C11,21.6 11.4,22 12,22 C12.6,22 13,21.6 13,21 L13,13 L21,13 C21.6,13 22,12.6 22,12 C22,11.4 21.6,11 21,11 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}