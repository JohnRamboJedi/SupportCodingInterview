import React, {Component} from 'react';
import './App.css';
import Input from "./components/Input"
import AccountPage from './components/AccountPage';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      accountInfo: {}
    }
  }

submittedData = (accountNum, accountAmt) => {
this.setState({accountInfo: {accountNum: accountNum, accountAmt: accountAmt}})
this.setState({isLoggedIn: true});
}

  render() {
    const {isLoggedIn} = this.state;
    return (
    isLoggedIn ?  <AccountPage accountData={this.state.accountInfo}/> : <Input submission={this.submittedData}/>
      )
  }
}

export default App;
