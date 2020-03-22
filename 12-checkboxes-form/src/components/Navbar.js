import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state={'NavItemActive':''}
    }

    activeitem=(x) => {
      if (this.state.NavItemActive.length>0) {
        document.getElementById(this.state.NavItemActive).classList.remove('active');
      }
      this.setState({'NavItemActive':x},() => {
        document.getElementById(this.state.NavItemActive).classList.add('active');
      });
    };

    render() {
      return (
        <nav>
          <ul>
            <Navitem icon="fas fa-home" item="Home" tolink="/" activec={this.activeitem}></Navitem>
            <Navitem icon="fas fa-shield-alt" item="Page1" tolink="/page1"  activec={this.activeitem}></Navitem>
            <Navitem icon="fas fa-file-contract" item="Page2" tolink="/page2"  activec={this.activeitem}></Navitem>
            <Navitem icon="fas fa-book" item="Page3" tolink="/page3"  activec={this.activeitem}></Navitem>
          </ul>
        </nav>
        )
    }
}
    
export default Navbar
