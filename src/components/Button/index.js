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
        return <input type="submit" className={this.className} onClick={this.onClick} value={this.text}></input>
    }
}

export default Button;