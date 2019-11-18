import React, { Component } from 'react';
export default class BanIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Ban"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Ban",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M4,12 C4,16.418278 7.581722,20 12,20 C13.8482015,20 15.550021,19.3732643 16.9045228,18.3207287 L5.67927125,7.09547725 C4.62673571,8.44997896 4,10.1517985 4,12 Z M12,4 C10.1517985,4 8.44997896,4.62673571 7.09547725,5.67927125 L18.3207287,16.9045228 C19.3732643,15.550021 20,13.8482015 20,12 C20,7.581722 16.418278,4 12,4 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}