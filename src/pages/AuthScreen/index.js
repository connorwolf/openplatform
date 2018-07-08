import React from 'react';

import AuthBox from '../../components/AuthBox';
import FadeImg from '../../components/FadeImg';

import background from './background.png';

import './AuthScreen.css';

class AuthScreen extends React.Component {
    render() {
        return (
        <div className="authscreen">
            <FadeImg src={background}/>
            <AuthBox/>
        </div>
        );
    }
}

export default AuthScreen;