import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (<div className='bg-primary-black-color'>
    <div className="w-4/5 m-auto bg-primary-black-color">
      <Navbar/>
      <Home />
      <Footer />
    </div></div>
  );
}

export default App;
