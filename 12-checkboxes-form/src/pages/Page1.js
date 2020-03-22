import React, { Component } from 'react';
import Page1Form from '../components/Page1Form';

class Page1 extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Page 1</h1>
        </div>
        <div className="content-area clearfix">
          <Page1Form />
        </div>
    </div>
    )
  }
}

export default Page1