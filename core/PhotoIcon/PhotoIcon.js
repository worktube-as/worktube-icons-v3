import React, { Component } from 'react';
export default class PhotoIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Photo"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Photo",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M22,8 C22,6.9 21.1,6 20,6 L18,6 L16,3 L8,3 L6,6 L4,6 C2.9,6 2,6.9 2,8 C2,8 2,7.4 2,9 L2,18 C2,19.7 2,19 2,19 C2,20.1 2.9,21 4,21 L20,21 C21.1,21 22,20.1 22,19 C22,19 22,19.7 22,18 L22,9 L22,8 Z M20,18 L20,18.5 C20,18.8 19.8,19 19.5,19 L4.5,19 C4.2,19 4,18.8 4,18.5 C4,18.5 4,18.6 4,18 L4,9 L4,8.5 C4,8.2 4.2,8 4.5,8 L7.1,8 L9.1,5 L15,5 L17,8 L19.6,8 C19.8,8 20,8.2 20,8.5 C20,8.5 20,8.5 20,9 L20,18 Z M12,8 C9.2,8 7,10.2 7,13 C7,15.8 9.2,18 12,18 C14.8,18 17,15.8 17,13 C17,10.2 14.8,8 12,8 Z M12,16 C10.3,16 9,14.7 9,13 C9,11.3 10.3,10 12,10 C13.7,10 15,11.3 15,13 C15,14.7 13.7,16 12,16 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}