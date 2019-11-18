import React, { Component } from 'react';
export default class PictureFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Picture-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Picture",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M20,16.369924 L15.0998212,10.6530467 L8.86851736,20 L20,20 L20,16.369924 Z M21,2 C21.5522847,2 22,2.44771525 22,3 L22,21 C22,21.5522847 21.5522847,22 21,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,3 C2,2.44771525 2.44771525,2 3,2 L21,2 Z M8,6 C6.8,6 6,6.8 6,8 C6,9.2 6.8,10 8,10 C9.2,10 10,9.2 10,8 C10,6.8 9.2,6 8,6 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}