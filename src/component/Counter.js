import React, { Component } from 'react'

export default class Counter extends Component {

    render() {
        return (
        <div>
            <button onClick={() => {this.props.onDecreased(this.props.id)}}>-</button>
            <span>{this.props.counterNum}</span>
            <button onClick={() => {this.props.onIncreased(this.props.id)}}>+</button>
        </div>
        )
    }
}
