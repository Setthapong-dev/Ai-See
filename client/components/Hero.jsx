import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center pt-24 sm:pt-20 md:pt-16 pb-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 sm:bottom-20 right-4 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 md:mt-7 shadow-lg ">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1.5 sm:mr-2" />
          <span className="text-xs sm:text-sm font-medium text-blue-700">AI Technology</span>
        </div>  

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          AI-See
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-2 sm:mb-4 font-light">
          ตรวจสอบความสุกของมะม่วงด้วย
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-6 sm:mb-8 font-semibold">
          ปัญญาประดิษฐ์ที่แม่นยำ
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          อัปโหลดภาพมะม่วงเพื่อให้ AI วิเคราะห์ความสุกอย่างแม่นยำ 
          ด้วยเทคโนโลยี Computer Vision ที่ล้ำสมัยและใช้งานง่าย
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4">
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">วิเคราะห์ภาพ</span>
          </div>
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">ผลลัพธ์เร็ว</span>
          </div>
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">แม่นยำสูง</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Link 
            to="/ai" 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            เริ่มใช้งานฟรี
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
          <button className="w-full sm:w-auto bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 text-sm sm:text-base">
            ดูตัวอย่าง
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">5K+</div>
            <div className="text-xs sm:text-sm text-gray-600">ภาพที่วิเคราะห์</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">95%</div>
            <div className="text-xs sm:text-sm text-gray-600">ความแม่นยำ</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">2วินาที</div>
            <div className="text-xs sm:text-sm text-gray-600">เวลาวิเคราะห์</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
