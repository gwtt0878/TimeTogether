import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">TimeTogether</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 캘린더 섹션 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">일정 캘린더</h2>
                <div className="border rounded-lg p-4">
                  {/* 캘린더 컴포넌트가 들어갈 자리 */}
                  <p className="text-gray-500">캘린더가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>

            {/* 일정 목록 섹션 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">오늘의 일정</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-gray-900 font-medium">팀 미팅</h3>
                    <p className="text-sm text-gray-500">10:00 - 11:00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-gray-900 font-medium">프로젝트 리뷰</h3>
                    <p className="text-sm text-gray-500">14:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 팀원 섹션 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">팀원</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="bg-gray-200 text-gray-900 p-3 rounded-lg font-medium">홍길동</p>
                      <p className="text-sm text-gray-500">프로젝트 매니저</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="bg-gray-200 text-gray-900 p-3 rounded-lg font-medium">김철수</p>
                      <p className="text-sm text-gray-500">개발자</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
