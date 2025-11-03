import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center pt-24 sm:pt-20 md:pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Login</h1>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login