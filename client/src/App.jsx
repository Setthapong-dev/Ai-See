import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ai from './pages/Ai'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<Ai />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
