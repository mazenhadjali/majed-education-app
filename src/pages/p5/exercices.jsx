import React, { useState } from 'react';

const ex1Data = [
  { sentence: 'تُناثرت حبات القمح ________ (تأكيد الفعل)', answer: 'تناثرا' },
  { sentence: 'رَنَّ هاتف المنزل ________ (بيان العدد)', answer: 'رنتين' },
  { sentence: 'هجم على الفريسة ________ (بيان نوع الفعل)', answer: 'هجوما شرسا' },
  { sentence: 'دار حول الملعب ________ (بيان العدد)', answer: 'ثلاث دورات' },
  { sentence: 'انتصرنا على العدو ________ (بيان نوع الفعل)', answer: 'انتصارا باهرا' }
];

const ex2Data = [
  { verb: 'اصفرَ', example: 'اصفرَت أوراق الشجر ________', answer: 'اصفرار الموت' },
  { verb: 'استحسن', example: 'استحسن المعلمُ عملَ التلميذ ________', answer: 'استحسانا' },
  { verb: 'انتصر', example: 'انتصر جيشنا ________', answer: 'انتصارا' },
  { verb: 'احتمى', example: 'احتمى الطالبُ من المطر ________', answer: 'احتماء' },
  { verb: 'استقام', example: 'استقام صفُّ التلاميذ ________', answer: 'استقامة' }
];

export default function Maf3oolMutlaqExercises() {
  const [ex1Answers, setEx1Answers] = useState(Array(ex1Data.length).fill(''));
  const [ex1Results, setEx1Results] = useState(Array(ex1Data.length).fill(null));

  const [ex2Answers, setEx2Answers] = useState(Array(ex2Data.length).fill(''));
  const [ex2Results, setEx2Results] = useState(Array(ex2Data.length).fill(null));

  const validate = (input, correct) => input.trim() === correct;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 py-10 px-4 md:px-16 lg:px-32 space-y-16">
      <h1 className="text-4xl font-extrabold text-center text-yellow-800">تمارين على المفعول المطلق</h1>

      {/* التمرين 1 */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">🔹 التمرين 1: أثري الجمل بمفعول مطلق</h2>
        {ex1Data.map((item, idx) => (
          <div key={idx} className="mb-6">
            <p className="mb-2 text-lg text-gray-800">{item.sentence.replace('________', '_____')}</p>
            <input
              type="text"
              placeholder="اكتب المفعول المطلق"
              value={ex1Answers[idx]}
              onChange={e => {
                const arr = [...ex1Answers];
                arr[idx] = e.target.value;
                setEx1Answers(arr);
              }}
              className="border border-yellow-300 rounded px-3 py-2 w-full md:w-1/2 focus:ring focus:ring-yellow-200"
            />
            <button
              className="mt-2 ml-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
              onClick={() => {
                const res = [...ex1Results];
                res[idx] = validate(ex1Answers[idx], item.answer);
                setEx1Results(res);
              }}
            >تحقق</button>
            {ex1Results[idx] !== null && (
              <p className={`mt-2 font-semibold ${ex1Results[idx] ? 'text-green-600' : 'text-red-600'}`}>  
                {ex1Results[idx] ? '✅ إجابة صحيحة' : `❌ الصحيح: ${item.answer}`}  
              </p>
            )}
          </div>
        ))}
      </section>

      {/* التمرين 2 */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">🔹 التمرين 2: استعمل الفعل والمصدر المشتق</h2>
        {ex2Data.map((item, idx) => (
          <div key={idx} className="mb-6">
            <p className="mb-2 text-lg text-gray-800">{item.example}</p>
            <input
              type="text"
              placeholder="اكتب المصدر المناسب"
              value={ex2Answers[idx]}
              onChange={e => {
                const arr = [...ex2Answers];
                arr[idx] = e.target.value;
                setEx2Answers(arr);
              }}
              className="border border-yellow-300 rounded px-3 py-2 w-full md:w-1/2 focus:ring focus:ring-yellow-200"
            />
            <button
              className="mt-2 ml-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
              onClick={() => {
                const res = [...ex2Results];
                res[idx] = validate(ex2Answers[idx], item.answer);
                setEx2Results(res);
              }}
            >تحقق</button>
            {ex2Results[idx] !== null && (
              <p className={`mt-2 font-semibold ${ex2Results[idx] ? 'text-green-600' : 'text-red-600'}`}>  
                {ex2Results[idx] ? '✅ إجابة صحيحة' : `❌ الصحيح: ${item.answer}`}  
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
