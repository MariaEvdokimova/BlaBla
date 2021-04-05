import React from 'react';

import './scss/style.scss';
import { Header } from './components/Header';
import {Portfolio} from './components/Portfolio';
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return <>
    <header className="header" id="header">
      <Header />
    </header>

    <main className="main" id="main">

      <Portfolio />
      <About />
      <Contact />
    </main>

    <footer className="footer">
      <Footer />
    </footer>
</>
};

export default App;
