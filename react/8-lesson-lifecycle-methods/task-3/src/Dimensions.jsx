import React, { Component } from 'react';
class Dimension extends Component {
  state = {
    width: null,
    height: null,
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
    this.setState({
      width,
      height,
    });
    document.title = `${width} х ${height}`;
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  render() {
    //const { width, height } = this.state;
    return <div className="dimensions">{`${innerWidth}px - ${innerHeight}px`}</div>;
  }
}
export default Dimension;
