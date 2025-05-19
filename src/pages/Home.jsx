import React from 'react'

function Home() {
  return (
    <React.Fragment>
      <h1 className="text-4xl font-extrabold text-gray-50 mb-6">مرحبا بك في التطبيق</h1>

      <div className="text-right text-lg text-white space-y-6 bg-gradient-to-br from-indigo-900 to-indigo-600 p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-xl mx-auto backdrop-blur-lg">
        <div>
          <p className="font-bold text-2xl text-white mb-2 border-b border-white/20 pb-1">إعداد الطالبتين:</p>
          <ul className="list-disc pr-6 marker:text-indigo-300 space-y-1 text-base leading-relaxed">
            <li>درصاف بن خليفة</li>
            <li>آمنة الجلاصي</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-2xl text-white mb-2 border-b border-white/20 pb-1">تحت إشراف الدكتورة:</p>
          <ul className="list-disc pr-6 marker:text-indigo-300 space-y-1 text-base leading-relaxed">
            <li>حنان عروس</li>
          </ul>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home