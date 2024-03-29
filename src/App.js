import React from 'react';
import './App.scss';
import Home from './UI/Pages/Home/Home.jsx';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App-Main'>
      <div className='App-Content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
