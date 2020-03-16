import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Compliance from './pages/Compliance';
import Rules from './pages/Rules';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/compliance"><Compliance /></Route>
        <Route exact path="/rules"><Rules /></Route>
      </div>
    </Router>
  );
}

export default App;
