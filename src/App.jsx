import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import HomePage from './components/main/HomePage/HomePage';
import MenuPage from './components/main/MenuPage/MenuPage';
import ReservationPage from './components/main/ReservationPage/ReservationPage';
import Footer from './components/footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (

      <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/little-lemon" element={<HomePage />} />
          <Route exact path="/little-lemon/menu" element={<MenuPage />} />
          <Route exact path="/little-lemon/reservation" element={<ReservationPage />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
