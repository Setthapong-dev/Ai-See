import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center pt-24 sm:pt-20 md:pt-16 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-md w-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/60 p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">สมัครสมาชิก</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
                <input id="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
                <input id="password" type="password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" />
              </div>
              <div>
                <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่าน</label>
                <input id="confirm" type="password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white/90" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 transition-colors">
                สมัครสมาชิก
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


