import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResourse] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResourse('posts')}>Posts</button>
        <button onClick={() => setResourse('todos')}>Todos</button>

      </div>
      <ResourceList resource={resource} />
    </div>
  );

}

export default App;