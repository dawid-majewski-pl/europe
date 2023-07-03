import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Information from './components/Information';
import Countries from './components/Countries';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Information />
      <Countries />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
