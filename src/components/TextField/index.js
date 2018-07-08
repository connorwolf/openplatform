import React from 'react';

import './TextField.css';

class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange(event) {
        const text = event.target.value;
        this.props.onChange(this.props.name, text);
    }

    render() {
        return(
            <div className="textfield-wrapper">
                <h5 className="textfield-title">
                    {this.props.name}
                </h5>
                <input value={this.props.value} type={this.props.type} onChange={this.handleChange} className="textfield"/>
            </div>
        );
    }
}

export default TextField;   