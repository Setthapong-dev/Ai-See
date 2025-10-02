import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Camera } from 'lucide-react'

const Ai = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [content, setContent] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(file)
      setContent('') // รีเซ็ตผลลัพธ์เมื่ออัปโหลดภาพใหม่
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const handleSubmit = async () => {
    if (!selectedImage) return
    setIsAnalyzing(true)
    setContent('กำลังวิเคราะห์ความสุกของมะม่วง...')

    try {
      const base64 = await fileToBase64(selectedImage)
      const predictUrl = import.meta.env.VITE_PREDICT_URL || 'http://localhost:5000/predict'
      const res = await axios.post(predictUrl, {
        image_base64: base64,
      }, {
        headers: { 'Content-Type': 'application/json' },
      })

      const label = res?.data?.class
      const confidence = res?.data?.confidence
      if (label) {
        setContent(`${label} (confidence: ${(confidence * 100).toFixed(1)}%)`)
      } else {
        setContent('ไม่พบผลลัพธ์จากเซิร์ฟเวอร์')
      }
    } catch (err) {
      const msg = err?.response?.data?.error || err?.message || 'เกิดข้อผิดพลาดไม่ทราบสาเหตุ'
      setContent(`ผิดพลาด: ${msg}`)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center py-8 md:mt-10">
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
                  <div className="mt-4">
                    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
                      {previewUrl && (
                        <img
                          src={previewUrl}
                          alt="ตัวอย่างรูปภาพ"
                          className="max-h-72 w-full object-contain bg-gray-50"
                        />
                      )}
                    </div>
                    <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 truncate">
                        ✓ เลือกไฟล์แล้ว: {selectedImage.name}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedImage || isAnalyzing}
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
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
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600"></div>
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