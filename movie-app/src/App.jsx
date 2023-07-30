import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage/Home';
import TopRatedPage from './Pages/TopRatedPage/TopRatedPage';
import UpcomingPage from './Pages/Upcoming/UpcomingPage';
import SingleMovie from './Pages/SingleMovie/SingleMovie';

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Home />} />
          <Route path='/toprated' element={<TopRatedPage />} />
          <Route path='/upcoming' element={<UpcomingPage />} />
          <Route path='/singleMovie/:id' element={<SingleMovie />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
