import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronUp, faChevronDown);

class Expand extends Component {
  state = {
    hiddenChildren: false,
  };
  toggleButton = () => {
    this.setState({
      hiddenChildren: !this.state.hiddenChildren,
    });
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>

          <button className="expand__toggle-btn" onClick={this.toggleButton}>
            {this.state.hiddenChildren ? (
              <FontAwesomeIcon icon="chevron-up" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </button>
        </div>
        {this.state.hiddenChildren && (
          <div className="expand__content">{children}</div>
        )}
      </div>
    );
  }
}

export default Expand;
