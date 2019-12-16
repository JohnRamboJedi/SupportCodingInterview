import React, {Component} from 'react';
import './App.css';
import Input from "./components/Input"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AccountPage from './components/AccountPage';


class App extends Component {
  constructor() {
    super()
    localStorage.clear()
  }

submittedData = (accountNum, accountAmt) => {
  window.localStorage.setItem(accountNum, accountAmt);
  window.location.href = "/account"

}

  render() {
    return (
      <Router>
      <Switch>
          <Route path="/account" component={() => <AccountPage/>}/>
          <Route path="/">
            <Input submission={this.submittedData}/>
          </Route>
        </Switch>
    </Router>
      )
  }
}

export default App;
