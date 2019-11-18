import React, { Component } from 'react';
export default class VideoFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Video-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Video",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M14,5 C15.6568542,5 17,6.34314575 17,8 L17,9.919 L20.375305,7.21913119 C21.0300683,6.69532051 22,7.16149379 22,8 L22,16 C22,16.8385062 21.0300683,17.3046795 20.375305,16.7808688 L17,14.08 L17,16 C17,17.6568542 15.6568542,19 14,19 L5,19 C3.34314575,19 2,17.6568542 2,16 L2,8 C2,6.34314575 3.34314575,5 5,5 L14,5 Z M17.6007811,12 L20,13.9193752 L20,10.0806248 L17.6007811,12 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}