import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, CrimsonValley, Raaka, Snowminer, TypeBook, WineFest, FdaLaw, Contact, Method } from './routes';
import './css/style.scss';

function App() {
  return (
      <div className="App">
          <Router>
               <Route exact path="/" component={Home} />
               <Route exact path="/contact" component={Contact} />

               <Route exact path="/method" component={Method} />
               <Route exact path="/crimsonvalley" component={CrimsonValley} />
               <Route exact path="/Raaka" component={Raaka} />
               <Route exact path="/snowminer" component={Snowminer} />
               <Route exact path="/typebook" component={TypeBook} />
               <Route exact path="/winefest" component={WineFest} />
               <Route exact path="/fdalaw" component={FdaLaw} />
           </Router>
      </div>
  );
}

export default App;
