import React, { Component } from 'react';
export default class HeartFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Heart-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Heart",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M21.9923233,9.59987812 C21.7903233,13.6938781 18.8993233,15.7508781 15.3163233,18.7988781 C13.4283233,20.4048781 10.6023233,20.4048781 8.70732325,18.8078781 C5.14832325,15.8078781 2.15732325,13.7098781 2.00432325,9.47387812 C1.81232325,4.15087812 8.06132325,1.97187812 11.6113233,6.31487812 C11.8053233,6.55287812 12.1933233,6.54787812 12.3863233,6.30987812 C15.9243233,1.95187812 22.2613233,4.15987812 21.9923233,9.59987812",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}