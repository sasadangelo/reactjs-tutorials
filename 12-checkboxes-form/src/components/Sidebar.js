import React from 'react';
import Navbar from './Navbar';
import '../App.css';

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="logo">
        <i className="fas fa-cube"/> Application
      </div>
      <hr/>
      <Navbar />
    </div>
  );
}

export default Sidebar;
