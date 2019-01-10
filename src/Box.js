import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import './box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor
    };
  }

  render() {
    let boxStyle = {
      backgroundColor: this.state.backgroundColor,
      width: this.state.width,
      height: this.state.height
    };
    return <div className="box" style={boxStyle} />;
  }
}

export default Box;
