import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Information from './components/Information';
import Countries from './components/Countries';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Information />
      <Countries />
    </div>
  );
}

export default App;
