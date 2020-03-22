import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/page1"><Page1 /></Route>
        <Route exact path="/page2"><Page2 /></Route>
        <Route exact path="/page3"><Page3 /></Route>
      </div>
    </Router>
  );
}

export default App;
