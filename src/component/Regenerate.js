import React, { Component } from 'react'

export default class Regenerate extends Component {
  
  state ={
      input: ""
  }

  submit = () => {
    this.props.getInput(parseInt(this.state.input))
    this.state.input = ""
  }

  change = (event) => {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div>
        <input value={this.state.input}
               onChange={this.change}>
        </input>
        <button onClick={this.submit}>
          Regen
        </button>
      </div>
    )
  }
}