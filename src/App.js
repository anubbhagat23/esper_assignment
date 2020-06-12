import React from 'react';
import { Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routes from './routing';
import history from './services/history';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="container-fluid main-container">
        <Router history={history}>
          <Route component={Dashboard}/>
        </Router>
    </div>
  );
}

export default App;
