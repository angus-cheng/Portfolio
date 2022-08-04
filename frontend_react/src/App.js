import React from 'react'

// Import containers from ./container/index.js
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
// Navbar treated as simple component
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
      <div className="app">
          <Navbar></Navbar>
          <Header></Header>
          <About></About>
          <Work></Work>
          <Skills></Skills>
          <Testimonial></Testimonial>
          <Footer></Footer>
      </div>
  );
}

export default App;