import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          value={this.props.text}
          onChange={this.props.onChange}
          type="text"
          className="filter__input"
        />
      </div>
    );
  }
}

export default Filter;
