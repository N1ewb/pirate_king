import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Moviepage from './Pages/Moviepage';
import Home from './Pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/Moviepage/:imdbID`} element={<Moviepage />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
