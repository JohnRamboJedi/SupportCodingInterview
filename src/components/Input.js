import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect, Switch } from 'react-router-dom'

export default class Input extends Component {
	constructor() {
    super();
    this.state = {
      userAcccount: "",
      invalidAccount: false
    }
}

    handleChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ userAccount: event.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const accountInfo = {
      23416: "$2051.52",
      82352: "-$124.44",
      65275: "$3.55",
      31038: "-$51.22"
    };

    const accountNumbers = Object.keys(accountInfo);
    event.preventDefault();
    if (accountNumbers.includes(this.state.userAccount)){
      this.setState({invalidAccount: false});
			this.props.submission(this.state.userAccount, accountInfo[this.state.userAccount]);
    } else {
      this.setState({invalidAccount: true});
    }
  }



    render() {
    	return (
				<React.Fragment>
    		<div className="center">
				    <h1>Welcome To Godaddy ATM</h1>
						</div>
			<div className="center">
    		<form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Account Number"
              value={this.state.userAccount}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.invalidAccount && <div>Unknown User</div>}
        </div>
				</React.Fragment>
    	)
    }
}
