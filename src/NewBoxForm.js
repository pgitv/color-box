import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, backgroundColor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createBox({
      width: +this.state.width,
      height: +this.state.height,
      backgroundColor: this.state.backgroundColor
    });
    this.setState({ width: 0, height: 0, backgroundColor: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    // [] is ES2016 convention to dynamically assign key value
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          name="width"
          type="number"
          value={this.state.width}
          onChange={this.handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          id="height"
          name="height"
          type="number"
          value={this.state.height}
          onChange={this.handleChange}
        />

        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <button>Add a new item!</button>
      </form>
    );
  }
}

export default NewBoxForm;
