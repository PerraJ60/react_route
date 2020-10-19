import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import './App.css';

function App () {
    return (
      <div>
        <nav>
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul> 
       </nav>
      <div className="content">  
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>   
          </Switch>
    </div>
    
    </div>
    );
}
export default App;
    