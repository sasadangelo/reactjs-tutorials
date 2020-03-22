import React, { Component } from 'react';
import billboard from '../images/under-construction.png';

class Page3 extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Page 3</h1>
        </div>
        <div className="content-area clearfix">
          <div className="description">
            <h2>Under Construction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
          <div className="billboard">
            <img src={billboard} width="600" height="380"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Page3