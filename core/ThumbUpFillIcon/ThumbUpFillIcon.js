import React, { Component } from 'react';
export default class ThumbUpFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Thumb-up-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Thumb-up",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M10,2 C12.209139,2 14,3.790861 14,6 L14,8.88273498 L17.6014165,8.48257759 C18.0739432,8.43007462 18.5520459,8.46223271 19.0132851,8.57754253 C21.1564648,9.11333744 22.4595076,11.2850754 21.9237126,13.428255 L20.1595065,20.4850797 C19.9369249,21.3754059 19.1369703,22.0001297 18.2192431,22.0001297 L7.00001081,22.0001297 L6.983,21.999 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,12 C2,10.8954305 2.8954305,10 4,10 L6.306,9.999 L9.06367082,2.64887656 C9.21003472,2.25857283 9.58315544,2 10,2 Z M6,12 L4,12 L4,20 L6,20 L6,12 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}