import React, { Component } from 'react';
import './App.css';
import store from './store.js';
import {Provider} from 'react-redux';
import Homepage from './components/Homepage';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Homepage />
        </div>
      </Provider>
    );
  }
}

export default App;
