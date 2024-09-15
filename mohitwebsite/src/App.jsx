import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Apps from './component/App';
import About from './component/About';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
