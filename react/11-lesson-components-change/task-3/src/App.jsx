import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Expand from './Expand';
class App extends Component {
  state = {
    isOpen: false,
  };
  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };
  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };
  render() {
    return (
      <div className="app">
        <Expand
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          onOpen={this.showDialog}
          title="some title">
          {
            <p>
              Hooks are a new addition in React 16.8. They let you use state and
              other React features without writing a class.
            </p>
          }
        </Expand>
      </div>
    );
  }
}
export default App;
