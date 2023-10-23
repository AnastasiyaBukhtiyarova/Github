import React, { Component } from 'react';

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
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
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
