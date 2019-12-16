import React, {Component} from "react";
import ReactDOM from "react-dom";

export default function LandingPage (props) {
  return (
  <div>
  <center>
    <h2>
    {console.log(props)}
    {`Welcome Account ${props.actNum}`}
    </h2>
    </center>
  </div>
)
}
