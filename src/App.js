import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Card_Com from './components/Card_Com';
import SimpleFormExample from './components/SimpleFormExample';
import { createBrowserHistory } from "history";
import { Card } from '@material-ui/core';
const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        <Router history={history}>
        <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/Card" component={Card_Com} />
                    </Switch></Router>
         
        </header>
      </div>
    );
  }
}

export default App;
