import React from 'react';
import Counter from './Counter.jsx';
const App = () => {
  return (
    <>
      <Counter start={17} />
      <Counter start={5} />
      <Counter start={10} />
    </>
  );
};
export default App;
