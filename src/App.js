import React, { Component } from 'react'
import axios from 'axios';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorite from './components/Favorite'
import Main from './components/Mian'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
         
        </Switch>
      </Router>
    </>
    )
  }
}

export default App
