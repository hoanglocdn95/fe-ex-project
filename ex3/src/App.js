import React, { Component } from 'react';
import ListAll from './components/ListAll';
import Create from './components/Create';
import './App.css';

class App extends Component {
   render() {
    return (
      <div>
        <div id='name-list'>Todo List</div>
        <Create/> 
        <ListAll/>
      </div>
    );
  }
}

export default App;
