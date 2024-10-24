import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, About, Contacts, Events, Gallery, Press } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Add a container for layout */}
        <Navbar /> {/* Navbar at the top */}
        <div className="content"> {/* Wrap content to manage layout */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/press" element={<Press />} />
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
