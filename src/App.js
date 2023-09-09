import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import CustomerDetails from './components/Customer/CustomerDetails';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Cart />
      <CustomerDetails/>
    </>
  );
}

export default App;
