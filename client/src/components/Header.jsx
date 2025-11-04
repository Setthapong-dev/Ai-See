import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, Bot, Menu, X, LogIn, Database, User, LogOut } from 'lucide-react'
import AISeeLogo from '../assets/AI-See_logo.svg'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  // Decode JWT token to get user data
  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      return JSON.parse(jsonPayload)
    } catch (error) {
      return null
    }
  }

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = decodeToken(token)
      if (decoded) {
        setUserData({
          email: decoded.email || 'user@example.com',
          role: decoded.role || 'user'
        })
      }
    } else {
      setUserData(null)
    }
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isUserMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUserData(null)
    setIsUserMenuOpen(false)
    navigate('/')
    window.location.reload()
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-xl shadow-xl border-b border-gray-200/10' 
        : 'bg-white/10 backdrop-blur-lg shadow-lg border-b border-gray-200/5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 hover:opacity-80 transition duration-300"
          >
            <img 
              src={AISeeLogo} 
              alt="AI-See Logo" 
              className="w-8 h-8"
            />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}>MangoMind</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                location.pathname === '/' 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              หน้าแรก
            </Link>
            <Link 
              to="/ai" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                location.pathname === '/ai' 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <Bot className="w-4 h-4 mr-2" />
              AI Dashboard
            </Link>
            <Link 
              to="/prediction" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                location.pathname === '/prediction' 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <Database className="w-4 h-4 mr-2" />
              Prediction
            </Link>
            {userData ? (
              <div className="relative user-menu">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors cursor-pointer"
                >
                  <User className="w-5 h-5" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{userData.email}</p>
                      <p className="text-xs text-gray-500 mt-1">Role: {userData.role}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      ออกจากระบบ
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                  location.pathname === '/login' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-yellow-600 focus:outline-none focus:text-yellow-600 transition duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/10 py-4 animate-in slide-in-from-top duration-300 bg-white/15 backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                  location.pathname === '/' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                หน้าแรก
              </Link>
              <Link 
                to="/ai" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                  location.pathname === '/ai' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI Dashboard
              </Link>
              <Link 
                to="/prediction" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                  location.pathname === '/prediction' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Database className="w-4 h-4 mr-2" />
                Prediction
              </Link>
              {userData ? (
                <>
                  <div className="px-3 py-2 border-t border-gray-200/10 mt-2 pt-2">
                    <p className="text-xs text-gray-500 mb-1">Email:</p>
                    <p className="text-sm font-medium text-gray-800">{userData.email}</p>
                    <p className="text-xs text-gray-500 mt-2 mb-1">Role:</p>
                    <p className="text-sm text-gray-600">{userData.role}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center text-red-600 hover:bg-red-50 w-full cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    ออกจากระบบ
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ${
                    location.pathname === '/login' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
