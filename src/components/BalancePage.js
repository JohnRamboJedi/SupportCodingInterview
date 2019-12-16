import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../index.css';

export default class BalancePage extends Component {
  constructor(props){
  super(props)
  this.state = {
    isNegative: ""
  }
}
componentDidMount() {
this.negativeCheck();
}

negativeCheck = () => {
  const accountBal = this.props.actInfo.accountAmt;
  if(accountBal.includes("-")){
    this.setState({isNegative: true})
  } else {
    this.setState({isNegative: false})
  }
}

render() {
  return (
  <div>
  <center>
    <h3>Account Balance:<span className={this.state.isNegative ? "red" : "green"}> {this.props.actInfo.accountAmt}</span></h3>
    <h3>{`Account Number ${this.props.actInfo.accountNum}`}</h3>
    </center>
  </div>
)
}
}
