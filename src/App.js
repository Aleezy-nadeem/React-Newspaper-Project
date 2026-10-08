import Navbar from './Components/Navbar';
import News from './Components/News';
import logo from './logo.svg';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import './App.css';
//Rcc Class based components


export default class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
       <News pageSize={5}/>
      </div>
    )
  }
}

