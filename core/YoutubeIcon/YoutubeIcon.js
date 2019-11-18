import React, { Component } from 'react';
export default class YoutubeIcon extends Component {
  render() {
    return React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("title", null, "Icons/Social/Youtube"), React.createElement("desc", null, "Created with Sketch."), React.createElement("g", {
      id: "Icons/Social/Youtube",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("path", {
      d: "M9.98843166,14.5858841 L9.98843166,8.97424577 C11.9806381,9.91167957 13.523602,10.8172007 15.3484631,11.7935281 C13.8433511,12.6282431 11.9806381,13.5646796 9.98843166,14.5858841 M21.0909982,6.18288702 C20.7473426,5.73012644 20.1616339,5.37809012 19.5380733,5.26140953 C17.7052433,4.9133623 6.27097442,4.91236503 4.43914059,5.26140953 C3.93909677,5.35515291 3.49383863,5.58153321 3.11133499,5.93356952 C1.49963997,7.42947453 2.00466431,15.4515145 2.39314456,16.7509573 C2.55650549,17.3134176 2.76767938,17.7193064 3.03363894,17.9855775 C3.37629845,18.3376139 3.84546307,18.5799505 4.38435491,18.6886529 C5.8934513,19.0007984 13.668037,19.1753207 19.506198,18.7355246 C20.0440937,18.6417812 20.5202311,18.3914664 20.895762,18.0244711 C22.3859324,16.5345497 22.2843299,8.06174371 21.0909982,6.18288702",
      id: "\u21B3-\uD83C\uDFA8COLOR",
      fill: this.props.color
    })));
  }

}