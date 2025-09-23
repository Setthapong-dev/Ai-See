import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      role: "เกษตรกรผู้ปลูกมะม่วง",
      content: "AI-See ช่วยให้การเลือกมะม่วงสุกเป็นเรื่องง่ายมาก ใช้งานง่ายและผลลัพธ์แม่นยำ",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      id: 2,
      name: "สมหญิง สวยงาม",
      role: "พ่อค้าแม่ค้าผลไม้",
      content: "ระบบวิเคราะห์ภาพของ AI-See ช่วยให้การคัดเลือกมะม่วงมีประสิทธิภาพมากขึ้น",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      id: 3,
      name: "วิชัย เก่งมาก",
      role: "ผู้บริโภค",
      content: "AI-See ช่วยให้เลือกมะม่วงสุกได้ง่ายมาก ช่วยประหยัดเวลาในการเลือกซื้อ",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            ความคิดเห็นจากผู้ใช้
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            ฟังเสียงจากผู้ใช้จริงที่ได้สัมผัสประสบการณ์การตรวจสอบความสุกของมะม่วงด้วย AI-See
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              พร้อมที่จะตรวจสอบมะม่วงแล้วหรือยัง?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              เข้าร่วมกับผู้ใช้หลายพันคนที่ไว้วางใจ AI-See 
              เพื่อการเลือกมะม่วงสุกที่แม่นยำและง่ายดาย
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2"></div>
                <span>ปลอดภัย 100%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5 sm:mr-2"></div>
                <span>ใช้งานง่าย</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-1.5 sm:mr-2"></div>
                <span>ผลลัพธ์แม่นยำ</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonial
