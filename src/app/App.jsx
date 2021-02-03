import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from '../components/containers/Home';
import Details from '../components/containers/Details';
import './App.css';


export default function App() {
    
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                component = { Home }
              />
              <Route
                path="/details/:id"
                exact
                component = { Details }
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }

