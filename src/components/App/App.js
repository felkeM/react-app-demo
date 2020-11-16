import React from 'react';
import Routes from '../Navbar/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_Container">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

