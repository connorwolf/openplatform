import React from 'react';

import './TextField.css';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className + ' input textfield';
        this.type = props.type;
        this.name = props.name;

        this.state = { content: '' };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(evt) {
        evt.preventDefault();
        console.log(evt.target.value);
        this.setState({
            content: evt.target.value
        });
    }

    render() {
        return(
            <div className="textfield-wrapper">
                <h5 className="textfield-title">
                    {this.name}
                </h5>
                <input value={this.state.content} type={this.type} className="textfield" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TextField;   