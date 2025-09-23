import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, Camera, BarChart3, Zap, Shield, CheckCircle } from 'lucide-react'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Eye,
      title: "Computer Vision",
      description: "ระบบวิเคราะห์ภาพมะม่วงด้วย AI ที่สามารถจดจำและวิเคราะห์ความสุกของมะม่วงได้อย่างแม่นยำ",
      color: "blue"
    },
    {
      id: 2,
      icon: Camera,
      title: "Image Recognition",
      description: "เทคโนโลยีจดจำภาพที่สามารถแยกแยะลักษณะของมะม่วงสุกและไม่สุกได้อย่างชัดเจน",
      color: "green"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Smart Analysis",
      description: "วิเคราะห์ข้อมูลภาพมะม่วงด้วย AI เพื่อประเมินระดับความสุกและให้คำแนะนำที่ถูกต้อง",
      color: "purple"
    },
    {
      id: 4,
      icon: Zap,
      title: "Real-time Processing",
      description: "ประมวลผลภาพแบบเรียลไทม์ ให้ผลลัพธ์การวิเคราะห์ความสุกที่รวดเร็วและแม่นยำ",
      color: "orange"
    },
    {
      id: 5,
      icon: Shield,
      title: "Privacy & Security",
      description: "รักษาความปลอดภัยและความเป็นส่วนตัวของภาพที่อัปโหลดด้วยเทคโนโลยีการเข้ารหัสขั้นสูง",
      color: "red"
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "High Accuracy",
      description: "ความแม่นยำสูงในการวิเคราะห์ความสุกของมะม่วง ด้วยเทคโนโลยี Machine Learning ที่ทันสมัย",
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      red: "text-red-600 bg-red-100",
      orange: "text-orange-600 bg-orange-100",
      indigo: "text-indigo-600 bg-indigo-100"
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            เทคโนโลยี AI สำหรับมะม่วง
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            สำรวจเทคโนโลยี AI ที่ล้ำสมัยของเรา ที่จะเปลี่ยนวิธีที่คุณตรวจสอบความสุกของมะม่วง
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition duration-300 group"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition duration-300`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
            พร้อมที่จะตรวจสอบความสุกของมะม่วงด้วย AI แล้วหรือยัง?
          </p>
          <Link 
            to="/ai" 
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base inline-block text-center"
          >
            เริ่มตรวจสอบมะม่วง
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
