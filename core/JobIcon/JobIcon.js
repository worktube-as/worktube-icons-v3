import React, { Component } from 'react';
export default class JobIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Job"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Job",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M19,7 L17,7 L17,5 C17,3.9 16.1,3 15,3 C15,3 15.7,3 14,3 L10,3 L9,3 C7.9,3 7,3.9 7,5 L7,7 L5,7 L4,7 C2.9,7 2,7.9 2,9 L2,19 C2,20.1 2.9,21 4,21 C4,21 3.3,21 5,21 L19,21 L20,21 C21.1,21 22,20.1 22,19 L22,9 C22,7.9 21.1,7 20,7 C20,7 20.7,7 19,7 Z M9,5.5 C9,5.2 9.2,5 9.5,5 L10,5 L14,5 L14.5,5 C14.8,5 15,5.2 15,5.5 L15,7 L9,7 L9,5.5 Z M4,9.5 C4,9.2 4.2,9 4.5,9 L19.5,9 C19.8,9 20,9.2 20,9.5 L20,18.5 C20,18.8 19.8,19 19.5,19 L4.5,19 C4.2,19 4,18.8 4,18.5 L4,9.5 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}