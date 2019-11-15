import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Top10 from './Components/Top10Cards/Top10Cards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route>
          <Top10 exact path='/'/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
    
  );
}


