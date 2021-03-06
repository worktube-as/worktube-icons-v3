import React, { Component } from 'react';
export default class BookmarkFillIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Fill/Bookmark-fill"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Fill/Bookmark",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M7,2 C5.9,2 5,2.9 5,4 L5,22 L12,16 L19,22 L19,4 C19,2.9 18.1,2 17,2 L7,2 Z",
      id: "\u21B3-\uD83C\uDFA8COLOR-2",
      fill: this.props.color
    })));
  }

}