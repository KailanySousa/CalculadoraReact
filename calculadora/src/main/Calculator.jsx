import React, { Component } from 'react';
import './Calculator.css';

import Button from '../component/Button/index';
import Display from '../component/Display/index';

class Calculator extends Component {


    clearMemory = () => {
        console.log("limpar");
    }

    setOperation = (operation) => {
        console.log(operation);
    }

    addDigit = (n) => {
        console.log(n);
    }

    render() {

        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" triple click={this.clearMemory} />
                < Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" operation click={this.setOperation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" operation click={this.setOperation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" operation click={this.setOperation} />
                <Button label="0" double click={this.addDigit} />
                <Button label="." />
                <Button label="=" />
            </div>
        )
    }
}

export default Calculator;