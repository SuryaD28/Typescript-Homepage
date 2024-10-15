import React from 'react';
import  './App.css'
import RoutingComponent from './routes/routecomponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponents from './components/navbar';
import Home from './components/Home';
import ProductComponent from './components/Product';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
          <RoutingComponent />  
   
    </div>
  );
}

export default App;
