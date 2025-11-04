import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
      setLoading(false)
      return
    }

    try {
      const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
      const response = await axios.post(`${baseURL}/api/auth/register`, {
        email: formData.email,
        password: formData.password
      })
      
      // Success - redirect to login
      alert('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ')
      navigate('/login')
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก')
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
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">สมัครสมาชิก</h1>
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
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" 
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่าน</label>
                <input 
                  id="confirmPassword" 
                  type="password" 
                  required 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full rounded-lg bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium px-4 py-2 transition-colors"
              >
                {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
              มีบัญชีแล้ว?{' '}
              <Link to="/login" className="text-yellow-700 hover:text-yellow-800 font-medium underline underline-offset-2">เข้าสู่ระบบ</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register


