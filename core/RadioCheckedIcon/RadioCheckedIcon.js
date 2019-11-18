import React, { Component } from 'react';
export default class RadioCheckedIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Radio-checked"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Radio-checked",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M12,20 C16.4,20 20,16.4 20,12 C20,7.6 16.4,4 12,4 C7.6,4 4,7.6 4,12 C4,16.4 7.6,20 12,20 Z M12,22 C6.5,22 2,17.5 2,12 C2,6.5 6.5,2 12,2 C17.5,2 22,6.5 22,12 C22,17.5 17.5,22 12,22 Z M12,17 C14.8,17 17,14.8 17,12 C17,9.2 14.8,7 12,7 C9.2,7 7,9.2 7,12 C7,14.8 9.2,17 12,17 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}