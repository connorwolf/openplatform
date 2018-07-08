import React from 'react'

import NavLink from './NavLink';

import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return(
            <div className="homepage navbar">
                <span>OpenPlatform</span>
                {this.props.links.map(link => <NavLink key={link.id} link={link}/>)}
            </div>
        );
    }
}

export default NavBar;