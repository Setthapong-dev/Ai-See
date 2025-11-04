import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ai from './pages/Ai'
import Register from './pages/Register'
import Prediction from './pages/Prediction'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/ai" 
            element={
              <ProtectedRoute>
                <Ai />
              </ProtectedRoute>
            } 
          />
          <Route path="/register" element={<Register />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
