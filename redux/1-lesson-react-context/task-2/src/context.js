import React from 'react';

const userData = {
  user1: {
    name: 'google',
    avatarUrl: 'https://api.github.com/users/google',
  },
  user2: {
    name: 'github',
    avatar: 'https://api.github.com/users/github',
  },
};
export default userData;

export const users = React.createContext({});
