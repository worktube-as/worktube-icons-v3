import React, { Component } from 'react';
export default class ItalicIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Italic"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Italic",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M5,21.000271 C4.44771525,21.000271 4,20.5525558 4,20.000271 C4,19.4479863 4.44771525,19.000271 5,19.000271 L8.306,19 L13.556,5 L10,5.00027104 C9.44771525,5.00027104 9,4.55255579 9,4.00027104 C9,3.44798629 9.44771525,3.00027104 10,3.00027104 L19,3.00027104 C19.5522847,3.00027104 20,3.44798629 20,4.00027104 C20,4.55255579 19.5522847,5.00027104 19,5.00027104 L15.693,5 L10.443,19 L14,19.000271 C14.5522847,19.000271 15,19.4479863 15,20.000271 C15,20.5525558 14.5522847,21.000271 14,21.000271 L5,21.000271 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}