import React, { Component } from 'react';
class Dimension extends Component {
  state = {
    width: null,
    heigth: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }
  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };
  setDimensions = (width, height) => {
    document.title = `${innerWidth} Х ${innerHeight}`;
    this.setState({
      width,
      height,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}
export default Dimension;