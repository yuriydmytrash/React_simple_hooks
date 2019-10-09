import React, { useState } from 'react';


// class App extends React.Component {
const App = () => {
  // state = { resourse: 'post' };
  return (
    <div>
      <div>
        <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
        <button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>

      </div>
      {this.state.resource}
    </div >
  );

}

export default App;