import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './components/NavBar';

import './HomePage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.pages = [{
            name: 'Home',
            path: '/',
            id: 0,
            side: 'left'
        }, {
            name: 'Login',
            path: '/login',
            id: 1,
            side: 'right'
        }];
    }
    render() {
        return (
            <div className="home">
                <header>
                    <NavBar links={this.pages}/>
                </header>
                <div className="content">
                    <div className="header">
                        <h1>OpenPlatform</h1>
                        <h2>A React Project integrated into <a href="https://discordapp.com/">Discord</a>'s API</h2>
                    </div>
                    <div className="login-button">
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        );
    }   
}

export default HomePage;