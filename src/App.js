import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Icon from './Component/Icon';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import Blog from './Component/Blog';
import Contact from './Component/Contact';


function App(){

 

    return (  
      <Router>
      <div >
      <Navbar></Navbar>
      <Switch>
     
      <Route exact path="/">
        <Home />
        <About></About>
        <Icon></Icon>
        <Projects></Projects>
        <Skill></Skill>
        <Contact></Contact>
      </Route>
      <Route exact path="/about">
      <About></About>
      </Route>
      <Route exact path="/skill">
        <Skill></Skill>
      </Route>
      <Route exact path="/projects">
        <Projects></Projects>
      </Route>
      <Route exact path="/blog">
      <Blog></Blog>
       </Route>
       <Route exact path="/contact">
        <Contact></Contact>
       </Route>
        </Switch>
      </div>
    </Router>
            
      
      
            
    );
  }

export default App; 