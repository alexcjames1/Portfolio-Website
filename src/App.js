import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './routes';
import { Audentio } from './routes';
import { Download } from './routes';
import './css/style.scss';

function App() {
  return (
      <div className="App">
          <Router>
               <Route exact path="/" component={Home} />
               <Route exact path="/contact" component={Contact} />
           </Router>
      </div>
  );
}

export default App;
