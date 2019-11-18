import React, { Component } from 'react';
export default class TextColorIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Outline/Text-color"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Outline/Text-color",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M20,18 C21.1,18 22,18.9 22,20 C22,21.1 21.1,22 20,22 L4,22 C2.9,22 2,21.1 2,20 C2,18.9 2.9,18 4,18 L20,18 Z M12.0702598,2.00000002 C12.6266972,2.00000002 13.3222441,2.41584161 13.6004628,3.10891091 L17.9128532,14.8910891 C18.191072,15.5841584 17.7737439,16 17.078197,16 C16.5217596,16 15.8262127,15.5841584 15.547994,14.8910891 L14.5742284,12.1188119 L9.42718178,12.1188119 L8.45341621,14.8910891 C8.31430684,15.4455446 7.61876,16 6.92321316,16 L6.78410379,16 C6.22766632,16 5.81033821,15.5841584 6.08855695,14.8910891 L10.4009474,3.10891091 C10.6791661,2.55445547 11.2356036,2.00000002 11.9311504,2.00000002 L12.0702598,2.00000002 Z M14,9.86666669 L13.952,9.86600002 L14,10 L14,9.86666669 Z M12,4.00000002 C11.8571429,4.80000002 11.5714286,5.60000002 11.2857143,6.40000002 L10,9.86666669 L13.952,9.86600002 L12.7142857,6.40000002 C12.5714286,6.13333336 12.4285714,5.73333336 12.2857143,5.20000002 C12.1428571,4.66666669 12,4.26666669 12,4.00000002 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}