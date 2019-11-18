import React, { Component } from 'react';
export default class PlayMarketIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Social/Play-market"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Social/Play-market",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M4,21.928 L4,22 L12.5,17 L15.5956547,15.185 L13.1323291,12.705 L4,21.928 Z M16.4515643,9.334 L13.8020857,12 L16.4515643,14.667 L21,12 L16.4515643,9.334 Z M15.5670915,8.816 L12.5,7 L4,2 L4,2.072 L13.1323291,11.296 L15.5670915,8.816 Z M12.469467,11.967 L4,20.517 L4,12 L4,3.423 L12.469467,11.967 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}