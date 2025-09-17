import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-lg">
          <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-700">AI Technology</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          AI-See
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
          เปิดโลกใหม่ด้วย
        </p>
        <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-semibold">
          ปัญญาประดิษฐ์ที่มองเห็นคุณ
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          สำรวจพลังของ AI ที่จะเปลี่ยนวิธีที่คุณทำงาน เรียนรู้ และสร้างสรรค์ 
          ด้วยเทคโนโลยีที่ล้ำสมัยและใช้งานง่าย
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <Brain className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">AI Vision</span>
          </div>
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <Zap className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Real-time</span>
          </div>
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Smart AI</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/ai" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            เริ่มใช้งานฟรี
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold py-4 px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200">
            ดูตัวอย่าง
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-sm text-gray-600">ผู้ใช้ที่ไว้วางใจ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">ความแม่นยำ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">พร้อมใช้งาน</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
