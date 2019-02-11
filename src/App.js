import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  state = {
    textInputed: '',
  }
  
  updateInput = (value) => {
  	this.setState(() => ({
      textInputed: value.trim()
    }))
  }
  
  render() {
    const { textInputed } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" 
			onChange={(event) => this.updateInput(event.target.value)}
			value={textInputed} />
          <p className="echo">Echo:</p>
          <p>{this.state.textInputed}</p>
        </div>
      </div>
    );
  }
}

export default App;
