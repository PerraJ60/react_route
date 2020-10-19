import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

function App () {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul> 
       </nav>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>   
    </Switch>
    
    </div>
    );
}
export default App;
    