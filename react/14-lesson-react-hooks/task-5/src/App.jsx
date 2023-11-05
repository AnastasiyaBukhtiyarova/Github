import React, { Component, useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Clock from './Clock';
// const App = ({ match }) => {
//   const { location, offset } = useParams();
//   console.log(match);

//   const [visible, setVisible] = useState({ visible: true });

//   useEffect(() => {
//     const toggle = () => {
//       setVisible({ visible: !visible });
//     };
//   }, []);

//   return (
//     <div>
//       {/* <button onClick={toggle}>Toggle</button> */}
//       <div>
//         {visible && <Clock location={'London'} offset={0} />}

//         {visible && <Clock location={'Kyiv'} offset={2} />}
//       </div>
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>
          {this.state.visible && <Clock location={'London'} offset={0} />}
          {this.state.visible && <Clock location={'Kyiv'} offset={2} />}
        </div>
      </div>
    );
  }
}

export default App;
