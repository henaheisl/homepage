import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Page from './components/Page/Page.js';
import About from './components/About/About.js';

function App() {
  return (
    <div>
    <Header />
    <Page />
    
    <Footer />
  </div>
  );
}

export default App;