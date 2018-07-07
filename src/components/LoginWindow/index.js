import React from 'react';

import './LoginWindow.css';

class LoginWindow extends React.Component {
    render() {
        return ( 
            <div className="authbox wrapper">
                <div className="authbox lg-cont">
                    <h1>Welcome back!</h1>
                    <h2>And no, I'm not ripping off Discord.</h2>
                    <button className="btn btn-blurple">
                    Login
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginWindow;