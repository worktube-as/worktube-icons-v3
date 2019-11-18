import React, { Component } from 'react';
export default class TestTaskIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Test-task"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Test-task",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M17,3 C18.6568542,3 20,4.34314575 20,6 L20,19 C20,20.6568542 18.6568542,22 17,22 L7,22 C5.34314575,22 4,20.6568542 4,19 L4,6 C4,4.34314575 5.34314575,3 7,3 L7,5 C6.44771525,5 6,5.44771525 6,6 L6,19 C6,19.5522847 6.44771525,20 7,20 L17,20 C17.5522847,20 18,19.5522847 18,19 L18,6 C18,5.44771525 17.5522847,5 17,5 L17,3 Z M15,15 L15,17 L7.99773766,17 L7.99773766,15 L15,15 Z M16,12 L16,14 L7.99773766,14 L7.99773766,12 L16,12 Z M13,9 L13,11 L7.99773766,11 L7.99773766,9 L13,9 Z M16,2 C16.5522847,2 17,2.44771525 17,3 L17,6 C17,6.55228475 16.5522847,7 16,7 L8,7 C7.44771525,7 7,6.55228475 7,6 L7,3 C7,2.44771525 7.44771525,2 8,2 L16,2 Z M15,4 L9,4 L9,5 L15,5 L15,4 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}