import React, { Component } from 'react';
class Dimension extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:innerWidth,
      heigth: innerHeight,
    };
      document.title = `${innerWidth} Х ${innerHeight}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
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
    document.title = `${innerWidth} Х ${innerHeight}`;
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
