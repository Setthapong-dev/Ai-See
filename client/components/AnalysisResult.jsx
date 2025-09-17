import React from 'react'

const AnalysisResult = ({ content, isAnalyzing }) => {
  return (
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
  )
}

export default AnalysisResult
