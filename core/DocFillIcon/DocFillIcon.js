import React, { Component } from 'react';
export default class DocFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Doc-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Doc",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M16,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 L15,2 C15.5522847,2 16,2.44771525 16,3 L16,6 Z M9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L9,13 Z M9,17 C8.44771525,17 8,16.5522847 8,16 C8,15.4477153 8.44771525,15 9,15 L15,15 C15.5522847,15 16,15.4477153 16,16 C16,16.5522847 15.5522847,17 15,17 L9,17 Z",
      id: "Shape",
      fill: this.props.color
    })));
  }

}