import React from 'react';
import {HashRouter} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
