import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import HundredDaysOfCode from './components/Projects/HundredDaysOfCode';
import OnlineResume from './components/OnlineResume/OnlineResume';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router> 
      {/* router needs to surrond everything */}
      <div className="App">
        <MyNavbar></MyNavbar>
        
        <Switch>

          <Route exact path="/blog">
            <Blog></Blog>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/projects">
            <Projects></Projects>
          </Route>

          <Route exact path="/projects/tinyturtle">
            <Project current="0"></Project>
          </Route>

          <Route exact path="/projects/angularcaloriecalculator">
            <Project current="1"></Project>
          </Route>

          <Route exact path="/projects/yelpcamp">
            <Project current="2"></Project>
          </Route>

          <Route exact path="/projects/personalwebsitev2">
            <Project current="4"></Project>
          </Route>

          <Route exact path="/projects/100DaysOfCode">
            <HundredDaysOfCode></HundredDaysOfCode>
          </Route>

          <Route exact path="/projects/goalsandgains">
            <Project current="3"></Project>
          </Route>

          <Route exact path="/onlineresume">
            <OnlineResume></OnlineResume>
          </Route>

      </Switch>
      </div>

    </Router>
  );
}

export default App;
