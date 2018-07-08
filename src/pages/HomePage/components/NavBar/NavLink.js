import React from 'react'
import { Link } from 'react-router-dom';

class NavLink extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.link.name;
        this.path = props.link.path;

        props.link.side == 'right' ? this.className = 'navlink-right' : this.className = 'navlink-left';

    }
    render() {
        return <Link to={this.path} className={this.className}>{this.name}</Link>;
    }
}

export default NavLink; 