import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '../TextField';
import Button from '../Button';

class EmailPasswordAuth extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    handleFieldChange(fieldId, value) {
        this.setState({
            [fieldId]: value
        });
    }

    render() {
        return(
            <div>
                <TextField name="email" type="email" onChange={this.handleFieldChange} value={this.state["email"]}/>
                <TextField name="password" type="password" onChange={this.handleFieldChange} value={this.state["password"]} />
                <Button text="Login" color="pinkple" onClick={this.handleLogin}/>
                <div className="authbox token-wrapper">
                    <Link to='/token'>Have a token?</Link>
                </div>
            </div>
        );
    }
}

export default EmailPasswordAuth;