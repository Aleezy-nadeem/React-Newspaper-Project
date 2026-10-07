// rcc 
// rccp
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
     <nav className="navbar navbarexpandlg bgbodytertiary"> 
  <div className="containerfluid">
    <a className="navbarbrand" href="#">Navbar</a>
    <button className="navbartoggler" type="button" databstoggle="collapse" databstarget="#navbarSupportedContent" ariacontrols="navbarSupportedContent" ariaexpanded="false" arialabel="Toggle navigation">
      <span className="navbartogglericon"></span>
    </button>
    <div className="collapse navbarcollapse" id="navbarSupportedContent">
      <ul className="navbarnav meauto mb2 mblg0">
        <li className="navitem">
          <a className="navlink active" ariacurrent="page" href="/">Home</a>
        </li>
        <li className="navitem">
          <a className="navlink" href="/about">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
