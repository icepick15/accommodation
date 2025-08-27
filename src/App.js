// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CreateAccountPage from './pages/Auth/CreateAccountPage';
import LoginPage from './pages/Auth/LoginPage';
import './App.css';
import MakeReservationPage from './pages/Booking/MakeReservationPage';
import ChooseRoomPage from './pages/Booking/ChooseRoomPage';
import ConfirmationPage from './pages/Booking/ConfirmationPage';
import PaymentPage from './pages/Booking/PaymentPage';
import ProtectedRoute from './components/layout/ProtectedRouteClean';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Authentication Routes */}
          <Route path="/signup" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/create-account" element={<CreateAccountPage />} />
          
          {/* Redirect /register to /signup for consistency */}
          <Route path="/register" element={<Navigate to="/signup" replace />} />

          {/* Protected Reservation Flow */}
          <Route
            path="/reservations/booking-info"
            element={
              <ProtectedRoute stage="booking">
                <MakeReservationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations/choose-room"
            element={
              <ProtectedRoute stage="room">
                <ChooseRoomPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations/confirmation"
            element={
              <ProtectedRoute stage="confirmation">
                <ConfirmationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations/payment"
            element={
              <ProtectedRoute stage="payment">
                <PaymentPage />
              </ProtectedRoute>
            }
          />

          {/* Catch all route - redirect to home (placed last) */}
          <Route path="*" element={<Navigate to="/" replace />} />


        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;