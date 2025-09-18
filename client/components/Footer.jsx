import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Mail, Heart } from 'lucide-react'
import AISeeLogo from '../src/assets/AI-See_logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={AISeeLogo} 
                alt="AI-See Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">AI-See</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              แอปพลิเคชัน AI ที่ช่วยคัดผลไม้ด้วยการวิเคราะห์ภาพ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link to="/ai" className="text-gray-400 hover:text-white transition duration-300">
                  AI Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">การสนับสนุน</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  วิธีใช้งาน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  คำถามที่พบบ่อย
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  รายงานปัญหา
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  ความช่วยเหลือ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI-See. สงวนลิขสิทธิ์ทั้งหมด
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">สร้างด้วย</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400 text-sm ml-2">ในประเทศไทย</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
