import React, { Component } from 'react';
const red = '#f00';
const green = '#0f0';
const blue = '#00f';
class Colors extends Component {
  constructor(props) {
    super(props);
  }
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          onClick={() => this.setBodyColor(red)}
          style={{
            backgroundColor: red,
          }}
          className="colors__button"></button>
        <button
          onClick={() => this.setBodyColor(green)}
          style={{
            backgroundColor: green,
          }}
          className="colors__button"></button>
        <button
          onClick={() => this.setBodyColor(blue)}
          style={{
            backgroundColor: blue,
          }}
          className="colors__button"></button>
      </div>
    );
  }
}
export default Colors;
