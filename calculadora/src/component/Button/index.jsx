import React, { Component } from 'react';
import './index.css';

class Button extends Component {

    render() {
        return (
            <button className={`
                button
                ${this.props.operation ? 'operation' : ''}
                ${this.props.double ? 'double' : ''}
                ${this.props.triple ? 'triple' : ''}
            `} onClick={e => this.props.click && this.props.click(this.props.label)}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;