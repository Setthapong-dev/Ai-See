import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login', { 
        state: { 
          requireAuth: true,
          from: { pathname: location.pathname }
        } 
      })
    }
  }, [navigate, location.pathname])

  const token = localStorage.getItem('token')
  
  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-700">กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute

