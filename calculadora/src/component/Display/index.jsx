import React, { Component } from 'react';
import "./index.css";

class Display extends Component {
    render() {
        return (
            <div className="display">
                {this.props.value}
            </div>
        )
    }
}

export default Display;