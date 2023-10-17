import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronUp, faChevronDown);
class Expand extends Component {
  state = {
    hiddenChildren: false,
  };
  hideChildren = () => {
    this.setState({
      hiddenChildren: false,
    });
  };
  showChildren = () => {
    this.setState({
      hiddenChildren: true,
    });
  };
  render() {
    const { title, children } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>

          {this.state.hiddenChildren ? (
            <button className="expand__toggle-btn">
              {' '}
              <FontAwesomeIcon icon="chevron-up" onClick={this.hideChildren} />
            </button>
          ) : (
            <button className="expand__toggle-btn">
              <FontAwesomeIcon
                icon="chevron-down"
                onClick={this.showChildren}
              />
            </button>
          )}
        </div>

        {this.state.hiddenChildren ? (
          <div className="expand__content">{children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
/*<button className="expand__toggle-btn" onClick={this.showChildren}>
            {this.state.hiddenChildren ? (
              <FontAwesomeIcon icon="chevron-up" onClick={this.hideChildren} />
            ) : (
              <FontAwesomeIcon
                icon="chevron-down"
                onClick={this.showChildren}
              />
            )}
          </button>
        </div>
*/
