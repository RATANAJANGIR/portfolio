import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><About /><Contact /> <Resume /> </>} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;