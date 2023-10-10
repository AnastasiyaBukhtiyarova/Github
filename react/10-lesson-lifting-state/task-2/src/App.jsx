import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';
import ProductsList from './ProductsList';
class Page extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford',
    },
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.props.userData,
      [name]: value,
    });
  };
  render() {
    return (
      <div className="page">
        <main className="content">
        
          <ShoppingCart userData={this.state.userData} />
          <Profile
            userData={this.state.userData}
            handleChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}
export default Page;
