import React, { Component } from 'react';
//import './App.css';

class App extends Component {
  state = {number: this.props.number}

  Click = () =>{
    //alert("now you know how to handle onclick event");
    this.setState({
      number: this.state.number+1
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><button onClick={this.Click}>Hello World!</button>number: {this.state.number}</p>
        </header>
      </div>
    );
  }
}


export default App;
