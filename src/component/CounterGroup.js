import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {

    state ={
        sum: 0, 
        counter: new Array(this.props.size).fill(0)
    }

    update = (passed) => {
        const updatedSum = this.state.sum + passed;
        this.setState({sum: updatedSum})
    }

    createArray = () =>{
        const result = []
        for (var i=0; i<this.props.size; i++)
           result.push(<Counter callUpdate={this.update}/>)
        return result
    }
//.map(() => <Counter callUpdate={this.update}/>)
    render() {
        return (
        <div>
             {this.createArray()}
             <span> sum: {this.state.sum}</span>
        </div>
    )
  }
}
