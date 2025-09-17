import React from 'react'
import { Camera } from 'lucide-react'

const ImageUpload = ({ selectedImage, onImageUpload, onSubmit, isAnalyzing }) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-md">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
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
            onClick={onSubmit}
            disabled={!selectedImage || isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            <Camera className="w-5 h-5" />
            {isAnalyzing ? 'กำลังวิเคราะห์...' : 'วิเคราะห์ภาพ'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageUpload