import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Information from './components/Information';
import Countries from './components/Countries';
import Subscription from './components/Subscription';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Information />
      <Countries />
      <Subscription />
    </div>
  );
}

export default App;
