import React from 'react';

import TextField from '../TextField';
import Button from '../Button';

import './AuthBox.css';

class AuthBox extends React.Component {

    handleLogin() {
        
    }

    render() {
        return ( 
            <div className="authbox">
                <div className="authbox wrapper">
                    <div className="authbox lg-cont">
                        <h1>Welcome back!</h1>
                        <h2>And no, I'm not ripping off Discord.</h2>
                        <TextField name="email" type="email"/>
                        <TextField name="password" type="password"/>
                        <Button text="Login" color="pinkple" onClick={this.handleLogin}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthBox;