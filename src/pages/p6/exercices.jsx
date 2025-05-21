import React, { useState } from 'react';

// بيانات التمارين الأربعة
const ex1Data = [
  { sentence: 'سافَرَ ماجد بَحْثًا عَنِ العَمَلِ (لِماذا سافَرَ ماجد؟)', answer: 'بَحْثًا عَنِ العَمَلِ' },
  { sentence: 'وَقَفْتُ فَوْقَ الرَّبْوَةِ لِأُشَاهِدَ الحَقْلَ (لِماذا وَقَفْتُ؟)', answer: 'لِأُشَاهِدَ الحَقْلَ' },
  { sentence: 'ذَهَبَتْ حنُون إِلَى الشَّاطِئِ لِلسِّبَاحَةِ (لِماذا ذَهَبَتْ؟)', answer: 'لِلسِّبَاحَةِ' },
  { sentence: 'سَأَلْتُ المُعَلِّمَ لِأَسْتَفْسِرَ (لِماذا سَأَلْتُ؟)', answer: 'لِأَسْتَفْسِرَ' },
  { sentence: 'خَرَجَ ماجد إِلَى الحَدِيقَةِ تَرْوِيحًا عَنِ النَّفْسِ (لِماذا خَرَجَ؟)', answer: 'تَرْوِيحًا عَنِ النَّفْسِ' }
];

const ex2Data = [
  { prompt: 'قَصَدْتُ النَّهْرَ ____', answer: 'لِلصَّيْدِ' },
  { prompt: 'وَقَفَ ماجدُ ____', answer: 'إِجْلَالًا لِلْقَائِدِ' },
  { prompt: 'فَتَحْتُ التِّلْفَازَ ____', answer: 'لِأُشَاهِدَ البَرْنَامَجَ' },
  { prompt: 'تَصَفَّحَتْ بيلسان المُوسُوعَةَ ____', answer: 'بَحْثًا عَنِ المَعْلُومَةِ' }
];

const ex3Data = [
  { sentence: 'حدَقَ النَّورسُ في الماءِ بحثًا عن السَمكِ.', answer: 'بحثًا عن السَمكِ' },
  { sentence: 'دَخَلْتُ إِلَى المَلْعَبِ لِأُشَاهِدَ المُبَارَاةَ.', answer: 'لِأُشَاهِدَ المُبَارَاةَ' },
  { sentence: 'قصَدْتُ سَاحَةَ الحَيِّ لِلَّعِبِ.', answer: 'لِلَّعِبِ' },
  { sentence: 'شَحَنَتْ حنُونُ الهَاتِفَ لِتَتَّصِلَ بِأُمِّهَا.', answer: 'لِتَتَّصِلَ بِأُمِّهَا' },
  { sentence: 'سَافَرَ أَخِي طَلَبًا لِلْعِلْمِ.', answer: 'طَلَبًا لِلْعِلْمِ' }
];

const ex4Data = [
  { prompt: 'رَفَعْتُ رَأْسِي ____.', answer: 'لِأَنْظُرَ إِلَى الهِلَالِ' },
  { prompt: 'خَرَجَ عمرُ ____.', answer: 'بَحْثًا عَنِ السُّلَحْفَاةِ' },
  { prompt: 'تَشَمَّمْتُ الزَّهْرَةَ ____.', answer: 'لِأَسْتَمْتِعَ بِطِيبِهَا' },
  { prompt: 'قَصَدَ جَدِّي العِيَادَةَ ____.', answer: 'طَلَبًا لِلشِّفَاءِ' }
];

export default function ReasonsExercises() {
  // حالات المدخلات والنتائج لكل تمرين
  const [res1, setRes1] = useState(Array(ex1Data.length).fill(''));
  const [ok1, setOk1] = useState(Array(ex1Data.length).fill(null));

  const [res2, setRes2] = useState(Array(ex2Data.length).fill(''));
  const [ok2, setOk2] = useState(Array(ex2Data.length).fill(null));

  const [res3, setRes3] = useState(Array(ex3Data.length).fill(''));
  const [ok3, setOk3] = useState(Array(ex3Data.length).fill(null));

  const [res4, setRes4] = useState(Array(ex4Data.length).fill(''));
  const [ok4, setOk4] = useState(Array(ex4Data.length).fill(null));

  const validate = (given, correct) => given.trim() === correct;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-6 md:px-20 lg:px-40 space-y-16">
      <h1 className="text-4xl font-extrabold text-center text-green-700">تمارين محددات الأسباب والغاية</h1>

      {/* التمرين 1 */}
      <section className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">التمرين 1: أسطر تحت المحدد الذي يجيب عن السؤال</h2>
        {ex1Data.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="mb-2 text-lg text-gray-800">{item.sentence}</p>
            <input
              type="text"
              placeholder="اكتب العبارة المحددة"
              value={res1[i]}
              onChange={e => {
                const arr = [...res1]; arr[i] = e.target.value; setRes1(arr);
              }}
              className="border border-green-300 rounded px-3 py-2 w-full md:w-1/2 focus:ring focus:ring-green-200"
            />
            <button
              className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => {
                const arr = [...ok1]; arr[i] = validate(res1[i], item.answer); setOk1(arr);
              }}
            >تحقق</button>
            {ok1[i] != null && (
              <span className={`ml-4 font-semibold ${ok1[i] ? 'text-green-600' : 'text-red-600'}`}>
                {ok1[i] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
              </span>
            )}
          </div>
        ))}
      </section>

      {/* التمرين 2 */}
      <section className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">التمرين 2: أكمل بمحدد يبين السبب</h2>
        {ex2Data.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="mb-2 text-lg text-gray-800">{item.prompt}</p>
            <input
              type="text"
              placeholder="اكتب السبب"
              value={res2[i]}
              onChange={e => {
                const arr = [...res2]; arr[i] = e.target.value; setRes2(arr);
              }}
              className="border border-green-300 rounded px-3 py-2 w-40 focus:ring focus:ring-green-200"
            />
            <button
              className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => { const arr = [...ok2]; arr[i] = validate(res2[i], item.answer); setOk2(arr); }}
            >تحقق</button>
            {ok2[i] != null && (
              <span className={`ml-4 font-semibold ${ok2[i] ? 'text-green-600' : 'text-red-600'}`}>
                {ok2[i] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
              </span>
            )}
          </div>
        ))}
      </section>

      {/* التمرين 3 */}
      <section className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">التمرين 3: أضع في إطار المفعول لأجله</h2>
        {ex3Data.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="mb-2 text-lg text-gray-800">{item.sentence}</p>
            <input
              type="text"
              placeholder="اكتب المفعول لأجله"
              value={res3[i]}
              onChange={e => { const arr = [...res3]; arr[i] = e.target.value; setRes3(arr); }}
              className="border border-green-300 rounded px-3 py-2 w-full md:w-1/2 focus:ring focus:ring-green-200"
            />
            <button
              className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => { const arr = [...ok3]; arr[i] = validate(res3[i], item.answer); setOk3(arr); }}
            >تحقق</button>
            {ok3[i] != null && (
              <span className={`ml-4 font-semibold ${ok3[i] ? 'text-green-600' : 'text-red-600'}`}>
                {ok3[i] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
              </span>
            )}
          </div>
        ))}
      </section>

      {/* التمرين 4 */}
      <section className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">التمرين 4: أعوض الحال بمفعول لأجله</h2>
        {ex4Data.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="mb-2 text-lg text-gray-800">{item.prompt}</p>
            <input
              type="text"
              placeholder="اكتب المفعول لأجله"
              value={res4[i]}
              onChange={e => { const arr = [...res4]; arr[i] = e.target.value; setRes4(arr); }}
              className="border border-green-300 rounded px-3 py-2 w-full md:w-1/2 focus:ring focus:ring-green-200"
            />
            <button
              className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => { const arr = [...ok4]; arr[i] = validate(res4[i], item.answer); setOk4(arr); }}
            >تحقق</button>
            {ok4[i] != null && (
              <span className={`ml-4 font-semibold ${ok4[i] ? 'text-green-600' : 'text-red-600'}`}>
                {ok4[i] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
              </span>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}