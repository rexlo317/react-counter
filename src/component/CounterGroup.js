import React, { Component } from 'react'
import Counter from './Counter.js'
import Regenerate from './Regenerate.js';

export default class CounterGroup extends Component {
    constructor(props){
        super(props)
        this.state ={
            sum: 0, 
            counters: new Array(props.size).fill(0).map(() => {return {number: 0, id: Math.random()}}),
        }
    }
    /*
    update = (passed) => {
        const updatedSum = this.state.sum + passed;
        this.setState({sum: updatedSum})
    }*/

    setCounter = (input) =>{
        this.setState({ counters: new Array(input).fill(0).map(() => {return {number: 0, id: Math.random()}}),
                        sum: 0})
    }

    increaseUpdate = (id) =>{
        var newCounters = this.state.counters.map((counterItem)=>{
                            if(counterItem.id === id)
                                return {number: counterItem.number + 1, id: counterItem.id}
                            else
                                return {number: counterItem.number, id: counterItem.id}
        })

        this.setState({ counters: newCounters,
                        sum: this.state.sum + 1})
    }
    
    decreaseUpdate = (id) =>{
        var newCounters = this.state.counters.map((counterItem)=>{
            if(counterItem.id === id)
                return {number: counterItem.number - 1, id: counterItem.id}
            else
                return {number: counterItem.number, id: counterItem.id}
})

this.setState({ counters: newCounters,
        sum: this.state.sum - 1})
    }
    
//.map(() => <Counter callUpdate={this.update}/>)
    render() {
        return (
        <div>
             {this.state.counters.map((counterItem) => <Counter 
                                                            id = {counterItem.id}
                                                            onIncreased={this.increaseUpdate}
                                                            counterNum={counterItem.number}
                                                            onDecreased={this.decreaseUpdate}/>)}
             <span> sum: {this.state.sum}</span>
             <Regenerate getInput = {this.setCounter}/>
        </div>
    )
  }
}
