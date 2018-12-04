import React, { Component } from 'react';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><button onClick={Click}>Hello World!</button>number: 0</p>
        </header>
      </div>
    );
  }
}

function Click(){
  alert("now you know how to handle onclick event");
}
export default App;
