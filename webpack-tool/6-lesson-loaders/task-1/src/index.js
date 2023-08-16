// file path: src/index.js

import renderProfile from './profile/renderProfile.js';
import './index.scss';

const profileData = {
  name: 'Tom',
  location: 'The World',
};

renderProfile(profileData);
