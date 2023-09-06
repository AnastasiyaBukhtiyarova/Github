// put your code here
import React from 'react';
import moment from 'moment';
import './index.scss';

const Profile = ({ firstName, lastName, birthDate }) => {
  const birth = moment(birthDate).format('DD MMM YY');
  return (
    <div className='block'>
      <p className="profile__name">{`${firstName} ${lastName}`}</p>
      <p className="profile__birth">{`Was born ${birth}`}</p>
    </div>
  );
};
export default Profile;
