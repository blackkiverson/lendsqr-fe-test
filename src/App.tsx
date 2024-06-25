import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import UserDetails from './pages/UserDetails';
// import './App.scss';

const App: React.FC = () => {
  const isAuth = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <Login />} />
        {/* <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/users" element={isAuth ? <Users /> : <Navigate to="/" />} />
        <Route path="/user/:id" element={isAuth ? <UserDetails /> : <Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
