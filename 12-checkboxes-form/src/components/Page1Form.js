import React, { Component } from 'react';
import '../App.css';

class Page1Form extends Component {
  render() {
    return (
      <div id="form">
        <form onSubmit="">
          <ul>
            <li><input type="checkbox" name="checkbox1" onChange="" value="checkbox1"/>CheckBox1</li>
            <li><input type="checkbox" name="checkbox2" onChange="" value="checkbox2"/>CheckBox2</li>
            <li><input type="checkbox" name="checkbox3" onChange="" value="checkbox3"/>Checkbox3</li>
            <li>
                <input type="submit" name="save" value="Save"/>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}  

export default Page1Form;
  