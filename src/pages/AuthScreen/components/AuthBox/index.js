import React from 'react';
import request from 'request';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import EmailPasswordAuth from '../EmailPasswordAuth';
import TokenAuth from '../TokenAuth';

import './AuthBox.css';

class AuthBox extends React.Component {
    render() {
        return ( 
            <div className="authbox">
                <div className="authbox wrapper">
                    <Router>
                        <div className="authbox lg-cont">
                            <h1>Welcome back!</h1>
                            <h2>And no, I'm not ripping off Discord.</h2>

                            <Route exact path="/login/" component={EmailPasswordAuth}/>
                            <Route path="/login/token/" component={TokenAuth}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default AuthBox;