import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '../../../../components/TextField';
import Button from '../../../../components/Button';

class TokenAuth extends React.Component {
    constructor() {
        super()
        this.state = {
            token: ''
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
                <TextField name="token" type="text" onChange={this.handleFieldChange} value={this.state["token"]}/>
                <Button text="Login" color="pinkple" onClick={this.handleLogin}/>
                <div className="authbox token-wrapper">
                    <Link to='/login/'>Prefer an email and password?</Link>
                </div>
            </div>
        );
    }
}

export default TokenAuth;