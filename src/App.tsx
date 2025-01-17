import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // debugger
  return (
    <div className="App">
      <Todolist />
      <Todolist />
      <Todolist />
    </div>
  );
}

const Todolist = () => {
  return (
    <div>
      <h3> What to learn </h3>
      <div>
        <input/>
        <button>+</button>   
      </div> 
      <ul>
        <li><input type="checkbox" checked={true} /><span>CSS & HTML</span></li>
        <li><input type="checkbox" checked={true} /><span>    JS    </span></li>
        <li><input type="checkbox" checked={false} /><span>   React  </span></li>
      </ul> 
    </div>
  )
}

export default App;
