import React from 'react';
import request from 'request';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import EmailPasswordAuth from '../EmailPasswordAuth';
import TokenAuth from '../TokenAuth';

import './AuthBox.css';

class AuthBox extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.location = '/';
        this.nextLocation = '/token';
        this.locationString = 'Have a token?';

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        console.log('Logging in...');
        console.log(JSON.stringify(this.state));

        request({
            url: 'https://discordapp.com/api/v6/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify(this.state),
        }, function(err, res, body) {
            console.log(err);
            console.log(res);
            console.log(body);
        });
 
    }

    handleFieldChange(fieldId, value) {
        console.log(value);
        this.setState({
            [fieldId]: value
        });
    }

    render() {
        return ( 
            <div className="authbox">
                <div className="authbox wrapper">
                    <Router>
                        <div className="authbox lg-cont">
                            <h1>Welcome back!</h1>
                            <h2>And no, I'm not ripping off Discord.</h2>

                            <Route exact path="/" component={EmailPasswordAuth}/>
                            <Route path="/token" component={TokenAuth}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default AuthBox;