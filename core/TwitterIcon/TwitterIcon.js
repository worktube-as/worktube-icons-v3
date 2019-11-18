import React, { Component } from 'react';
export default class TwitterIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Social/Twitter"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Social/Twitter",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M8.29,20 C15.837,20 19.965,13.8436531 19.965,8.50546136 C19.965,8.33021272 19.965,8.15594862 19.953,7.98266906 C20.756,7.41163417 21.449,6.70276326 22,5.89149989 C21.252,6.21836814 20.457,6.4329985 19.644,6.52751462 C20.5,6.0224441 21.141,5.2289025 21.448,4.29260218 C20.642,4.7632137 19.761,5.09500467 18.842,5.27320694 C17.288,3.64674202 14.689,3.56797859 13.036,5.09795829 C11.971,6.08447031 11.518,7.55537743 11.849,8.9583511 C8.55,8.79491698 5.476,7.2609991 3.392,4.73761558 C2.303,6.58363357 2.86,8.9445675 4.663,10.1299572 C4.01,10.1112509 3.371,9.93797131 2.8,9.62488666 L2.8,9.67608289 C2.801,11.5988952 4.178,13.2548964 6.092,13.6359145 C5.488,13.7983641 4.854,13.8219931 4.24,13.7048325 C4.777,15.3509883 6.318,16.47829 8.073,16.5107799 C6.62,17.6351279 4.825,18.2455445 2.977,18.2435754 C2.651,18.2425909 2.325,18.2238846 2,18.1854874 C3.877,19.3708771 6.06,20 8.29,19.9970464",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}