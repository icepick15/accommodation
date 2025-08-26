// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CreateAccountPage from './pages/Auth/CreateAccountPage';
import LoginPage from './pages/Auth/LoginPage';
import './App.css';
import MakeReservationPage from './pages/Booking/MakeReservationPage';
import ChooseRoomPage from './pages/Booking/ChooseRoomPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Authentication Routes */}
          <Route path="/signup" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/create-account" element={<CreateAccountPage />} />
          
          {/* Redirect /register to /signup for consistency */}
          <Route path="/register" element={<Navigate to="/signup" replace />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/*  */}
          <Route path="/reservations/booking-info" element={<MakeReservationPage />} />
          
          <Route path="/reservations/choose-room" element={<ChooseRoomPage />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;