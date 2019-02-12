import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const ROSLIB = require('roslib');

const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090'
});

const topic = new ROSLIB.Topic({
      ros : ros,
      name : 'toggle_led',
      messageType: 'std_msgs/String'
});

ros.on('connection', () => {
      console.log('Connected to websocket server.');

      const message = new ROSLIB.Message({
          data: "Hello world"
      });

      topic.publish(message);
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const message = new ROSLIB.Message({
      data: event.target.value
    });
    topic.publish(message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
	  <form>
           <label>
            Name:
            <input type="text" onChange= {this.handleChange} />
            </label>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
