import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Register from './components/Register';
import Navigation from './components/Navigation';
import YodlrRoutes from './components/YodlrRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <YodlrRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
