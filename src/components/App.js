import React, { useState } from 'react';


// class App extends React.Component {
const App = () => {
  // state = { resourse: 'post' };
  const [resource, setResourse] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResourse('posts')}>Posts</button>
        <button onClick={() => setResourse('todos')}>Todos</button>

      </div>
      {resource}
    </div >
  );

}

export default App;