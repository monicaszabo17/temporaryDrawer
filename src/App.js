
//import './App.css';
import React from 'react';
import Home from './home';
import Product from './product';
import Survey  from './survey';
import TemporaryDrawer from './drawer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    
      <div className="App">
  
        <BrowserRouter>
          <TemporaryDrawer/>
      
          <Switch>
            <Route exact path='/' children = { <Home/> } />
            <Route exact path='/product' children = { <Product/> } />
            <Route exact path='/survey' children = { <Survey/> } />
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
