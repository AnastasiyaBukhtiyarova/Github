import React, { useEffect, useState } from 'react';
import './index.scss';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);


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
