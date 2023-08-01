const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      console.log(null);
    }
    const userData = await response.json();
    console.log(userData);
  } catch (err) {
    const res = await Promise.reject(new Error('Failed to get user data'));
    console.log(res);
  }
};
fetchUser('google');
fetchUser('c');
