import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super()
        this.state = {number: 0}
    }

    increment = () => {
        this.props.callUpdate(1)
        this.setState({number: this.state.number + 1})
    }

    decrement = () => {
        this.props.callUpdate(-1)
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
        <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.number}</span>
            <button onClick={this.increment}>+</button>
        </div>
        )
    }
}
