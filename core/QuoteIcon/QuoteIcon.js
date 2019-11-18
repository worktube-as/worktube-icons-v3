import React, { Component } from 'react';
export default class QuoteIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Quote"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Quote",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M6.28571423,18.4271431 C4.59446422,18.4271431 2,13.4049645 2,11.083393 C2,10.2128573 2,9.34232161 2,8.4717859 C2,6.86492875 3.2304285,5.57000017 4.8571428,5.57000017 L7.3571428,5.57000017 C8.9838571,5.57000017 10.2142857,6.86489303 10.2142857,8.4717859 L10.2142857,10.9383216 C10.2142857,12.5452145 8.9838571,13.7842859 7.3571428,13.7842859 L5.21428565,13.7842859 C5.44671423,15.3914645 5.82085709,16.8200002 6.28571423,18.4271431 Z M18.0714286,18.4271431 C16.3801786,18.4271431 13.7857143,13.4049645 13.7857143,11.083393 C13.7857143,10.2128573 13.7857143,9.34232161 13.7857143,8.4717859 C13.7857143,6.86492875 15.0161428,5.57000017 16.6428571,5.57000017 L19.1428571,5.57000017 C20.7695714,5.57000017 22,6.86489303 22,8.4717859 L22,10.9383216 C22,12.5452145 20.7695714,13.7842859 19.1428571,13.7842859 L17,13.7842859 C17.2324286,15.3914645 17.6065714,16.8200002 18.0714286,18.4271431 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}