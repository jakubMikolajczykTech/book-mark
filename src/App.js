import React from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Section from './components/Section/Section.js';
import Footer from './components/Footer/Footer.js';
import "./styles.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
};

export default App;