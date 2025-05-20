import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-950/90 to-indigo-800/70 p-6 text-white min-h-screen">

      {/* Faculty Logo */}
      <img
        src="/ISEAHZ.png"
        alt="ISEAHZ Logo"
        className="max-w-40 h-auto mb-6 drop-shadow-md p-3 rounded-full bg-white/90 shadow-lg"
      />

      <h1 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
        مرحبا بك في التطبيق
      </h1>

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 space-y-10">
        {/* Students Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">
            إعداد الطالبتين:
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src="/dorra.jpg"
                alt="درصاف بن خليفة"
                className="w-28 h-28 object-cover rounded-full border-4 border-indigo-400 shadow-md"
              />
              <p className="text-lg font-semibold">درصاف بن خليفة</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src="/emna-jlassi.jpg"
                alt="آمنة الجلاصي"
                className="w-28 h-28 object-cover rounded-full border-4 border-indigo-400 shadow-md"
              />
              <p className="text-lg font-semibold">آمنة الجلاصي</p>
            </div>
          </div>
        </div>

        {/* Supervisor Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">
            تحت إشراف الدكتورة:
          </h2>
          <div className="flex flex-col items-center text-center space-y-2">
            <img
              src="/dr-hanen-arous.jpg"
              alt="حنان عروس"
              className="w-28 h-28 object-cover rounded-full border-4 border-indigo-400 shadow-md"
            />
            <p className="text-lg font-semibold">حنان عروس</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
