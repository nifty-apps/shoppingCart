import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import CustomerDetails from './components/Customer/CustomerDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Cart />
      <CustomerDetails/>
      <Footer></Footer>
    </>
  );
}

export default App;
