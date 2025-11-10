import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Prediction = () => {
  const [predictions, setPredictions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPredictions = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('กรุณาเข้าสู่ระบบเพื่อดูประวัติการวิเคราะห์')
        setIsLoading(false)
        return
      }

      try {
        const serverUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
        const response = await axios.get(`${serverUrl}/api/predict`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = Array.isArray(response.data) ? response.data : []
        data.sort((a, b) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
          return dateB - dateA
        })
        setPredictions(data)
      } catch (err) {
        console.error('Fetch predictions error:', err)
        if (err.response?.status === 401 || err.response?.status === 403) {
          setError('โทเค็นหมดอายุหรือไม่ถูกต้อง กรุณาเข้าสู่ระบบใหม่')
        } else {
          setError('ไม่สามารถดึงข้อมูลได้ กรุณาลองใหม่อีกครั้ง')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchPredictions()
  }, [])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 mt-10 pt-24 sm:pt-20 md:pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
            ประวัติการวิเคราะห์มะม่วง
          </h1>

          {isLoading ? (
            <div className="bg-white shadow rounded-lg p-8 text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500 mx-auto mb-4" />
              <p className="text-gray-700">กำลังโหลดข้อมูล...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-6 text-center">
              {error}
            </div>
          ) : predictions.length === 0 ? (
            <div className="bg-white shadow rounded-lg p-8 text-center text-gray-600">
              ยังไม่มีประวัติการวิเคราะห์
            </div>
          ) : (
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-500">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        วันที่
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        ผลการวิเคราะห์
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        รูปภาพ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {predictions.map((item) => (
                      <tr key={item.id || `${item.email}-${item.created_at}-${item.picture}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.created_at
                            ? new Date(item.created_at).toLocaleString('th-TH')
                            : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.prediction || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.picture ? (
                            <a
                              href={item.picture}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-600 hover:text-yellow-500 underline"
                            >
                              ดูรูป
                            </a>
                          ) : (
                            '-'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Prediction

