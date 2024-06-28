import React from 'react';
import './App.css';
import Login from './js/Login';
import Home from './js/Home';
import DocumentView from './js/DocumentView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Alteração aqui

function App() {
  return (
    <Router>
      <Routes> {/* Alteração aqui */}
        <Route path="/" element={<Login />} /> {/* Alteração aqui */}
        <Route path="/home" element={<Home />} /> {/* Alteração aqui */}
        <Route path="/document/:image" element={<DocumentView />} /> {/* Alteração aqui */}
      </Routes> {/* Alteração aqui */}
    </Router>
  );
}

export default App;
