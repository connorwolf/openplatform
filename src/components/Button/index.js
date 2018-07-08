import React from 'react';

import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.className = 'btn btn-' + props.color;
        this.state = { enabled: true }
        this.onClick = props.onClick;
    }

    render() {
        return <button className={this.className} onClick={this.onClick}>{this.text}</button>
    }
}

export default Button;