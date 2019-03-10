/*
*   Header para todas las paginas
*/
import 'bootstrap/dist/css/bootstrap.min.css'   ;
import 'font-awesome/css/font-awesome.min.css'  ;
import '../css/wp-main.css'   ;
import $                    from 'jquery'       ;
import Popper               from 'popper.js'    ;
import 'bootstrap/dist/js/bootstrap.bundle.min' ;
import React, { Component } from 'react'        ;
//
class Header extends Component {
  constructor(props) {
    super(props);
    this.stilo1 = {
      backgroundColor: '#e3f2fd'
    }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top"  style={this.stilo1}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">acacaca</span>
            </button>
            <a className="navbar-brand font-roboto-mono " href="/">Sebastian Ezequiel Andreoletti</a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-3"><a href="https://github.com/sebaeze"  target="_blank"><i className="fa fa-github"></i></a></li>
              <li className="nav-item active ml-3"><a href="https://ar.linkedin.com/in/sebastian-andreoletti-ba0a8728"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </nav>
    )
  }
}

export default Header;