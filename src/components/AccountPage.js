import React, {Component} from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import BalancePage from "./BalancePage"
import '../index.css';

export default class  AccountPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      showLanding: true
    }
  }
render() {
  const {showLanding} = this.state;

  return (
  <div>
  <div className="right"><div style={{padding: "5px"}}>{this.props.accountData.accountNum}</div> <a className="logout" onClick={() => {window.location.href = "/"}}>Logout</a></div>
  {showLanding ? <LandingPage actNum={this.props.accountData.accountNum} /> : <BalancePage actInfo={this.props.accountData}/>}
  <center>
  <button onClick={() => this.setState({showLanding: !showLanding})}> {showLanding ? "Check Your Balance" : "Go Back"}</button>
  </center>
  </div>
)
}
}
