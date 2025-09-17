import React from 'react'
import { Brain, Target, Users, Award } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "ผู้ใช้ที่ไว้วางใจ",
      description: "ผู้ใช้จากทั่วประเทศไทย"
    },
    {
      icon: Brain,
      number: "99.9%",
      label: "ความแม่นยำ",
      description: "ผลลัพธ์ที่เชื่อถือได้"
    },
    {
      icon: Target,
      number: "24/7",
      label: "พร้อมใช้งาน",
      description: "บริการตลอด 24 ชั่วโมง"
    },
    {
      icon: Award,
      number: "50+",
      label: "รางวัลที่ได้รับ",
      description: "การยอมรับจากผู้เชี่ยวชาญ"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ทำไมต้องเลือก AI-See?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI-See เป็นแพลตฟอร์ม AI ที่พัฒนาขึ้นโดยทีมผู้เชี่ยวชาญชาวไทย 
              เพื่อตอบสนองความต้องการของคนไทยโดยเฉพาะ ด้วยเทคโนโลยี AI 
              ที่ล้ำสมัยและเข้าใจบริบทของประเทศไทย
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              เราเชื่อว่า AI ควรเป็นเครื่องมือที่ช่วยให้ชีวิตง่ายขึ้น ไม่ใช่ซับซ้อนขึ้น 
              ดังนั้นเราจึงออกแบบทุกฟีเจอร์ให้ใช้งานง่าย เข้าใจได้ทันที และให้ผลลัพธ์ที่แม่นยำ
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Brain className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">AI ระดับโลก</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">ทีมผู้เชี่ยวชาญ</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">เข้าใจคนไทย</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-gray-700 font-medium">มาตรฐานสูง</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">
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
