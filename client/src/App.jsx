import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ai from './pages/Ai'
import Register from './pages/Register'
import Creations from './pages/Creations'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/register" element={<Register />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
