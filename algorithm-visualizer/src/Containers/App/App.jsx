import React, { Component } from 'react';
import InsertionSort from '../InsertionSort/InsertionSort';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <p>
          Algorithm visualizer is an app that is used to visualize algorithms. The goal is the to create the light bulb
        switch effect for users. Hope you enjoy. <strong>Just a place holder for the moment</strong>.
      </p>

      <InsertionSort />
      </div>
    );
  }
}

export default App;
