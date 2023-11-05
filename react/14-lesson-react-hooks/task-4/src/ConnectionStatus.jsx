import React, { useEffect, useState } from 'react';
import './index.scss';

const ConnectionStatus = () => {
  const [connection, setConnection] = useState({ status: true });
  useEffect(() => {
    const handleConnection = () => {
      if (window.navigator.onLine) {
        setConnection({ status: true });
      } else {
        setConnection({ status: false });
      }
    };

    handleConnection();
  }, [connection]);
      
  
  const { status } = connection;
  return (
    <div className="status status_offline">{status ? 'online' : 'offline'}</div>
  );
};

// class ConnectionStatus extends Component {
//   state = {
//     status: true,
//   };

//   componentDidMount() {
//     window.addEventListener('online', () => {
//       this.setState({
//         status: true,
//       });
//     });
//     window.addEventListener('offline', () => {
//       this.setState({
//         status: false,
//       });
//     });
//   }
//   componentWillUnmount() {
//     window.removeEventListener('online', () => {
//       this.setState({
//         status: true,
//       });
//     });
//     window.removeEventListener('offline', () => {
//       this.setState({
//         status: false,
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="status status_offline">
//         {this.state.status ? 'online' : 'offline'}
//       </div>
//     );
//   }
// }
export default ConnectionStatus;
