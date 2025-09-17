import React from 'react'
import { Eye, MessageCircle, BarChart3, Zap, Shield, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Eye,
      title: "AI Vision",
      description: "ระบบวิเคราะห์ภาพด้วย AI ที่สามารถจดจำและวิเคราะห์วัตถุ สถานที่ และกิจกรรมต่างๆ ได้อย่างแม่นยำ",
      color: "blue"
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "AI Chat",
      description: "แชทบอทอัจฉริยะที่เข้าใจภาษาไทยและตอบคำถามได้อย่างเป็นธรรมชาติ พร้อมให้คำแนะนำที่ถูกต้อง",
      color: "green"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "AI Analysis",
      description: "วิเคราะห์ข้อมูลขนาดใหญ่ด้วย AI เพื่อค้นหาลักษณะและแนวโน้มที่ซ่อนอยู่ ช่วยในการตัดสินใจ",
      color: "purple"
    },
    {
      id: 4,
      icon: Zap,
      title: "Real-time Processing",
      description: "ประมวลผลข้อมูลแบบเรียลไทม์ ให้ผลลัพธ์ที่รวดเร็วและแม่นยำในทุกการใช้งาน",
      color: "yellow"
    },
    {
      id: 5,
      icon: Shield,
      title: "Privacy & Security",
      description: "รักษาความปลอดภัยและความเป็นส่วนตัวของข้อมูลผู้ใช้ด้วยเทคโนโลยีการเข้ารหัสขั้นสูง",
      color: "red"
    },
    {
      id: 6,
      icon: Globe,
      title: "Multi-language Support",
      description: "รองรับหลายภาษา รวมถึงภาษาไทย อังกฤษ และภาษาอื่นๆ เพื่อการใช้งานที่ครอบคลุม",
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      yellow: "text-yellow-600 bg-yellow-100",
      red: "text-red-600 bg-red-100",
      indigo: "text-indigo-600 bg-indigo-100"
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ฟีเจอร์ AI ที่ทรงพลัง
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            สำรวจฟีเจอร์ AI ที่ล้ำสมัยของเรา ที่จะเปลี่ยนวิธีที่คุณทำงานและเรียนรู้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            พร้อมที่จะสัมผัสประสบการณ์ AI ที่แตกต่างแล้วหรือยัง?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            เริ่มใช้งานทันที
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
