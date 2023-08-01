let message = 'Just learn it!';

export function sendMessage(name) {
  console.log(`${name}, ${message} Your Gromcode`);
}

export function setMessage(text) {
  message = 'Good job!';
}
sendMessage('Anna');
