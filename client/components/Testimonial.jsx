import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      role: "นักพัฒนาซอฟต์แวร์",
      content: "AI-See ช่วยให้การวิเคราะห์ข้อมูลเป็นเรื่องง่ายมาก ใช้งานง่ายและผลลัพธ์แม่นยำ",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      id: 2,
      name: "สมหญิง สวยงาม",
      role: "นักออกแบบ UX/UI",
      content: "ฟีเจอร์ AI Vision ของ AI-See ช่วยให้การออกแบบมีประสิทธิภาพมากขึ้น",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      id: 3,
      name: "วิชัย เก่งมาก",
      role: "นักวิเคราะห์ข้อมูล",
      content: "AI Chat ของ AI-See ตอบคำถามได้ดีมาก ช่วยประหยัดเวลาในการทำงาน",
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ความคิดเห็นจากผู้ใช้
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ฟังเสียงจากผู้ใช้จริงที่ได้สัมผัสประสบการณ์การใช้งาน AI-See
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              พร้อมที่จะเริ่มต้นแล้วหรือยัง?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              เข้าร่วมกับผู้ใช้หลายพันคนที่ไว้วางใจ AI-See 
              เพื่อเพิ่มประสิทธิภาพการทำงานและสร้างสรรค์สิ่งใหม่ๆ
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>ปลอดภัย 100%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>ใช้งานง่าย</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
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
