import React, {Component} from "react";
import ReactDOM from "react-dom";

export default function AccountPage () {
  return (
  <div>
  <h1>Welcome Account</h1>
  <button onClick={()=> console.log(localStorage)}>Click here</button>
  </div>
)
}
