import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
const Options = ({ title, options }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button className="options__list-item">{option.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
Options.propTypes = {
  title: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.shape()).isRequired,
  
};
const mapState = (state) => {
  return {
    options: state.options.optionsList,
  };
};
export default connect(mapState)(Options);
