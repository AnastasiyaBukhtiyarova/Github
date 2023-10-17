import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronUp);
const Expand = ({ isOpen, children, title, onClose, onOpen }) => {
  if (isOpen) {
    return <FontAwesomeIcon icon="chevron-up" />;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button
          className="expand__toggle-btn"
          onClick={onClose}
          onClick={onOpen}>
          <FontAwesomeIcon icon="chevron-up" />
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

/*Dialog.PropTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
Dialog.defaultProps = {
  isOpen: false,
  title: '',
}; */
export default Expand;
