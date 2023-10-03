import React, { Component } from 'react';
class Dimensions extends Component {
 state = {
      width:null,
      heigth: null,
    };
  

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
    
  }
  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
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
export default Dimensions;
