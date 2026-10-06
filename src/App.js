import Navbar from './Components/Navbar';
import News from './Components/News';
import logo from './logo.svg';
// import './App.css';

//Rcc Class based components
import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}

