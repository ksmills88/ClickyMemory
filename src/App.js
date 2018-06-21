import React, { Component } from 'react';
import JumboTron from './components/JumboTron';
import Images from './components/Images';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          
        <JumboTron />
        <Images />
      </div>
      
    );
  }
}
console.log(this.state)


export default App;
