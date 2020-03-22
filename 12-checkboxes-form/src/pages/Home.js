import React, { Component } from 'react';
import { Link } from "react-router-dom";
import billboard from '../images/billboard.png';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Application</h1>
        </div>
        <div className="content-area clearfix">
          <div className="description">
            <h2>What is Application?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <Link to="/docs">
              <input type="submit" name="learn-more" value="Learn More"/>
            </Link>
          </div>
          <div className="billboard">
            <img src={billboard} width="600" height="494"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home