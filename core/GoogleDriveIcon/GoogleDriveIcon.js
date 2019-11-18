import React, { Component } from 'react';
export default class GoogleDriveIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Social/Google-drive"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Social/Google-drive",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M2,14.8330062 L5.334,20.5 L11.516,10.0158162 L8.182,4.34882244 L2,14.8330062 Z M14.755,14.2942738 L21.422,14.2942738 L15.334,3.5 L8.667,3.5 L14.755,14.2942738 Z M6.334,20.1820596 L9.667,15.2755715 L22,15.2755715 L18.667,20.1820596 L6.334,20.1820596 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}