import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Camera } from 'lucide-react'

const Ai = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [content, setContent] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(file)
      setContent('') // รีเซ็ตผลลัพธ์เมื่ออัปโหลดภาพใหม่
    }
  }

  const handleSubmit = () => {
    if (selectedImage) {
      setIsAnalyzing(true)
      setContent('กำลังวิเคราะห์ความสุกของมะม่วง...')
      
      // จำลองการประมวลผล AI สำหรับตรวจสอบความสุกของมะม่วง
      setTimeout(() => {
        const isRipe = Math.random() > 0.5 // จำลองผลลัพธ์แบบสุ่ม
        setContent(isRipe ? 'มะม่วงสุกแล้ว' : 'มะม่วงยังไม่สุก')
        setIsAnalyzing(false)
      }, 2000)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 md:mt-10">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ตรวจสอบความสุกของมะม่วงด้วย AI
            </h1>
            
            {/* Image Upload Section */}
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Camera className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-lg text-gray-600 mb-2">
                      อัปโหลดภาพมะม่วง
                    </p>
                    <p className="text-sm text-gray-500">
                      คลิกเพื่อเลือกไฟล์หรือลากและวางที่นี่
                    </p>
                  </label>
                </div>
                
                {selectedImage && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700">
                      ✓ เลือกไฟล์แล้ว: {selectedImage.name}
                    </p>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedImage || isAnalyzing}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
                  >
                    <Camera className="w-5 h-5" />
                    {isAnalyzing ? 'กำลังวิเคราะห์...' : 'วิเคราะห์ภาพ'}
                  </button>
                </div>
              </div>
            </div>

            {/* Analysis Result Section */}
            <div className="border-t pt-8 flex justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  ผลการวิเคราะห์
                </h2>
                <div className="bg-gray-100 rounded-lg p-6 min-h-[100px]">
                {content ? (
                  <div className="flex items-center justify-center">
                    {isAnalyzing ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <p className="text-gray-700 text-lg">{content}</p>
                      </div>
                    ) : (
                      <p className={`text-lg font-semibold ${
                        content.includes('สุกแล้ว') ? 'text-green-600' : 
                        content.includes('ยังไม่สุก') ? 'text-orange-600' : 
                        'text-gray-700'
                      }`}>
                        {content}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">
                    อัปโหลดภาพมะม่วงและกดปุ่มวิเคราะห์เพื่อดูผลลัพธ์
                  </p>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Ai