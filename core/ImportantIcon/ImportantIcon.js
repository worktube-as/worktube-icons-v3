import React, { Component } from 'react';
export default class ImportantIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Important"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Important",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M13,7.007 L13,14.007 C13,14.559 12.552,15.007 12,15.007 C11.448,15.007 11,14.559 11,14.007 L11,7.007 C11,6.455 11.448,6.007 12,6.007 C12.552,6.007 13,6.455 13,7.007 L13,7.007 Z M13,17.007 C13,17.559 12.552,18.007 12,18.007 C11.448,18.007 11,17.559 11,17.007 C11,16.455 11.448,16.007 12,16.007 C12.552,16.007 13,16.455 13,17.007 L13,17.007 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}