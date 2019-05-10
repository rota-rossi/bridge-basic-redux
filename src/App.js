import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './store/store.js';

import ChildComponent from './ChildComponent';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
          name: 'NO NAME'
        }
      };
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/rota-rossi')
      .then(result => {this.setState({user: result.data})})
      .catch(error => {console.log(error.message)});
    ;
  }


  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ChildComponent />
        </header>
      </div>
      </Provider>
    );
  };
};

