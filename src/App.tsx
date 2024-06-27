import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/DashboardLayout';
import Users from './pages/users/Users';
import UserDetails from './pages/users/UserDetail';
// import './App.scss';

const App: React.FC = () => {
  const isAuth = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard/*" element={isAuth ? <Dashboard /> : <Navigate to="/" />} >
          <Route index element={<Users />} />
					<Route index path="users" element={<Users />} />
					<Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
