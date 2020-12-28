import React, { Component, useState } from 'react';
import './Calculator.css';

import Button from '../component/Button/index';
import Display from '../component/Display/index';

const initialState = {
    displayValue: '0', // valor inicial que será exibido no display
    clearDisplay: false, // propriedade para validar se o display vai ser limpo ou não
    operation: null, // valor inicial da operação
    values: [0, 0], // array com os dois valores que serão calculados
    current: 0 // propriedade para validar qual das duas posições do array será manipulada
}

class Calculator extends Component {

    state = { ...initialState };

    clearMemory = () => {
        this.setState({ ...initialState });
    }

    setOperation = (operation) => {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];

            try {
                switch (currentOperation) {
                    case '+':
                        values[0] = values[0] + values[1];
                        break;

                    case '-':
                        values[0] = values[0] - values[1];
                        break;

                    case '*':
                        values[0] = values[0] * values[1];
                        break;

                    case '/':
                        values[0] = values[0] / values[1];
                        break;

                    default:
                        break;
                }
            } catch (e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit = (n) => {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
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
                <Button label="." click={this.addDigit} />
                <Button label="=" operation click={this.setOperation} />
            </div>
        )
    }
}

export default Calculator;