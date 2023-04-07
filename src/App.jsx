import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import HomePage from './components/main/HomePage/HomePage';
import MenuPage from './components/main/MenuPage/MenuPage';
import ReservationPage from './components/main/ReservationPage/ReservationPage';
import OrderOnlinePage from './components/main/OrderOnlinePage/OrderOnlinePage';
import Footer from './components/footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (

      <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/reservation" element={<ReservationPage />} />
          <Route exact path="/order" element={<OrderOnlinePage />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
