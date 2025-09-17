import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageUpload from '../components/ImageUpload'
import AnalysisResult from '../components/AnalysisResult'

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ตรวจสอบความสุกของมะม่วงด้วย AI
            </h1>
            
            <ImageUpload 
              selectedImage={selectedImage}
              onImageUpload={handleImageUpload}
              onSubmit={handleSubmit}
              isAnalyzing={isAnalyzing}
            />

            <AnalysisResult 
              content={content}
              isAnalyzing={isAnalyzing}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Ai