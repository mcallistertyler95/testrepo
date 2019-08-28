import React from 'react';
import './App.css';
import { LoginRouter } from './Login';
import { DashboardRouter } from './Dashboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    </div>
    <Route exact path="/" component={LoginRouter}/>
    <Route exact path="/dashboard" component={DashboardRouter}/>
    </Router>
  );
}

export default App;
