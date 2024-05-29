import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, SearchPage, UserPage } from './pages/index';

const App = () => {
 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
