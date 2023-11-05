import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const time = (time) => moment(time).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      offset: getTimeWithOffset(props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        offset: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    //  return <div>{this.state.date.toLocaleTimeString()}</div>;
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">{time(this.state.offset)}</div>
        </div>
      </>
    );
  }
}
export default Clock;
