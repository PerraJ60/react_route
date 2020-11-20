/*==================================================================================
Lab #2:
For this lab, Products (see menu) is now implemented with a Tools web store, using a
json server file.
Global state management should be working. 
Much is still not implemented, but it is a good platform to build further on.
Use inspect element Console to watch what happens when Add to Cart is pushed!
Changes in About, and Contact as well. Extern API, and styled components are used.
Tests are done for 5 components, 4 of them are snapshots.
===================================================================================*/
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Products from './components/Products.js';
import { GlobalProvider } from './components/GlobalState.js';
import { CartCountProvider } from './components/CartContext.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Login from './components/Login.js';
import './App.css';

export const ConfigContext = React.createContext();

const configValue = {
  showCategories: true
};

function App () {
    return (
      
          <div style={{fontFamily: 'sans-serif'}}>
              <nav>
                <ul className='header'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                </ul> 
            </nav>
          <ConfigContext.Provider value={configValue}>
            <GlobalProvider>
             <CartCountProvider>
              <div className='content'>  
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/products' component={Products}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/about' component={About}/>
                  <Route path='/login' component={Login}/>   
                </Switch>
              </div>
             </CartCountProvider>
            </GlobalProvider>
          </ConfigContext.Provider>
          </div>
          
  );
}

export default App;
    