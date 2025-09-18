import React from 'react'
import { Brain, Target, Users, Award } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "ภาพที่วิเคราะห์",
      description: "ภาพมะม่วงที่ผ่านการวิเคราะห์"
    },
    {
      icon: Brain,
      number: "95%",
      label: "ความแม่นยำ",
      description: "ความแม่นยำในการวิเคราะห์"
    },
    {
      icon: Target,
      number: "2 วินาที",
      label: "เวลาวิเคราะห์",
      description: "เวลาที่ใช้ในการวิเคราะห์"
    },
    {
      icon: Award,
      number: "100%",
      label: "ความพึงพอใจ",
      description: "ความพึงพอใจของผู้ใช้"
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              ทำไมต้องเลือก AI-See?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              AI-See เป็นแพลตฟอร์ม AI ที่พัฒนาขึ้นโดยทีมผู้เชี่ยวชาญชาวไทย 
              เพื่อช่วยตรวจสอบความสุกของมะม่วงด้วยเทคโนโลยี Computer Vision 
              ที่ล้ำสมัยและเข้าใจลักษณะของมะม่วงไทย
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              เราเชื่อว่า AI ควรเป็นเครื่องมือที่ช่วยให้การเลือกมะม่วงง่ายขึ้น ไม่ใช่ซับซ้อนขึ้น 
              ดังนั้นเราจึงออกแบบระบบให้ใช้งานง่าย อัปโหลดภาพแล้วได้ผลลัพธ์ทันที และแม่นยำ
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Computer Vision</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">ทีมผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">เข้าใจมะม่วงไทย</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">แม่นยำสูง</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {stat.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
