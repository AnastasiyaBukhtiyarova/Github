import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  if (!userData) {
    return null;
  }
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((userData) => setUserData(userData));
  }, [match.params.userId]);
  const { avatar_url, location, name } = userData;
  console.log(userData);
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>

        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends Component {
//   state = {
//     user: null,
//   };
//   componentDidMount() {
//     this.fetchUser();
//   }
//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//     if (prevUser !== currentUser) {
//       this.fetchUser();
//     }
//   }
//   fetchUser = () => {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error();
//         }
//       })
//       .then((data) => this.setState({ data }));
//   };
//   render() {
//     const { user } = this.state;
//     if (!user) {
//       return null;
//     }
//     const { avatar_url, location, name } = user;
//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>

//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
