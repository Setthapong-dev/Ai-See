import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LogIn, AlertCircle } from 'lucide-react'
import axios from 'axios'

const Login = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showAuthMessage, setShowAuthMessage] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.requireAuth) {
      setShowAuthMessage(true)
    }
  }, [location.state])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
      const response = await axios.post(`${baseURL}/api/auth/login`, {
        email: formData.email,
        password: formData.password
      })
      
      // Save token to localStorage
      localStorage.setItem('token', response.data.token)
      
      // Success - redirect to previous page or home
      const from = location.state?.from?.pathname || '/'
      navigate(from === '/login' ? '/' : from)
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
      } else {
        setError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center pt-24 sm:pt-20 md:pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-md w-full">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/60 p-6 sm:p-8">
          <div className="flex items-center justify-center mb-6">
            <LogIn className="w-6 h-6 text-yellow-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">เข้าสู่ระบบ</h1>
          </div>

          {showAuthMessage && (
            <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p>กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
              <input 
                id="email" 
                type="email" 
                required 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
              <input 
                id="password" 
                type="password" 
                required 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" 
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium px-4 py-2 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            ยังไม่มีบัญชี?
            {' '}
            <Link to="/register" className="text-yellow-700 hover:text-yellow-800 font-medium underline underline-offset-2">สมัครสมาชิก</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login