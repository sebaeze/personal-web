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
        <nav className="navbar navbar-expand-md navbar-light navbar-static-top"  style={this.stilo1}>
            <div className="col">
              <span className="navbar-brand font-roboto-mono wp-nombre " href="/">Sebastian Andreoletti</span>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <ul className="list-inline ml-auto">
                <li className="list-inline-item"><a href="https://github.com/sebaeze"  target="_blank"><i className="fa fa-github"></i></a></li>
                <li className="list-inline-item"><a href="https://ar.linkedin.com/in/sebastian-andreoletti-ba0a8728"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
        </nav>
    )
  }
}

export default Header;