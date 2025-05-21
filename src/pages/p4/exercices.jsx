import React, { useState } from 'react';

const ex1Sentences = [
    { sentence: 'ذهب عمرُ إلى المدرسة.', answer: 'إلى المدرسة' },
    { sentence: 'جلست بيلسان على الكرسي.', answer: 'على الكرسي' },
    { sentence: 'وضعت حنونُ الكتابَ في الحقيبة.', answer: 'في الحقيبة' },
    { sentence: 'يلعب ماجد بالكرة في الساحة.', answer: 'بالكرة في الساحة' },
    { sentence: 'استراح المعلم تحت الشجرة.', answer: 'تحت الشجرة' }
];

const ex2Questions = [
    { sentence: 'كتبت درسي ____ الدفتر.', answer: 'في' },
    { sentence: 'رجع التلميذ ____ المدرسة.', answer: 'إلى' },
    { sentence: 'خرج القطار ____ المحطة.', answer: 'من' },
    { sentence: 'نام القط ____ الطاولة.', answer: 'تحت' },
    { sentence: 'شاهدت الطائرة ____ السماء.', answer: 'في' }
];

const ex3Data = [
    'الولد في الحديقة.',
    'القلم على الطاولة.',
    'الكتاب من المكتبة.',
    'الطفل تحت البطانية.'
];

const ex4Data = [
    { sentence: 'سافرت في الليل.', answer: 'زمان' },
    { sentence: 'جلست على المقعد.', answer: 'مكان' },
    { sentence: 'كتبت بالقلم.', answer: 'وسيلة' },
    { sentence: 'تعبت من العمل.', answer: 'سبب' }
];

const choices4 = ['مكان', 'زمان', 'وسيلة', 'سبب'];

export default function JarMajrourExercises() {
    const [ex1Answers, setEx1Answers] = useState(Array(ex1Sentences.length).fill(''));
    const [ex1Results, setEx1Results] = useState(Array(ex1Sentences.length).fill(null));

    const [ex2Answers, setEx2Answers] = useState(Array(ex2Questions.length).fill(''));
    const [ex2Results, setEx2Results] = useState(Array(ex2Questions.length).fill(null));

    const [ex4Answers, setEx4Answers] = useState(Array(ex4Data.length).fill(''));
    const [ex4Results, setEx4Results] = useState(Array(ex4Data.length).fill(null));

    const validateAnswer = (given, correct) => given.trim() === correct;

    return (
        <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-16 lg:px-32 space-y-12">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">تمارين المركب الجرّي</h1>

            {/* التمرين 1 */}
            <section className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🔹 التمرين 1: ضع خطًا تحت الجار والمجرور</h2>
                {ex1Sentences.map((item, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="mb-2 font-medium text-gray-800">{item.sentence}</p>
                        <input
                            type="text"
                            placeholder="اكتب الجار والمجرور"
                            value={ex1Answers[idx]}
                            onChange={e => {
                                const updated = [...ex1Answers];
                                updated[idx] = e.target.value;
                                setEx1Answers(updated);
                            }}
                            className="border border-blue-300 rounded px-3 py-1 w-64 focus:ring focus:ring-blue-100"
                        />
                        <button
                            className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                            onClick={() => {
                                const newResults = [...ex1Results];
                                newResults[idx] = validateAnswer(ex1Answers[idx], item.answer);
                                setEx1Results(newResults);
                            }}
                        >تحقق</button>
                        {ex1Results[idx] != null && (
                            <span className={`ml-4 font-semibold ${ex1Results[idx] ? 'text-green-600' : 'text-red-600'}`}>
                                {ex1Results[idx] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
                            </span>
                        )}
                    </div>
                ))}
                <p className="mt-4 text-sm text-gray-600">✳️ الجار: (إلى – على – في – بالـ – تحت) | المجرور: الاسم الذي يلي حرف الجر مباشرة.</p>
            </section>

            {/* التمرين 2 */}
            <section className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🔹 التمرين 2: أكمل الفراغ بما يناسب من الجار والمجرور</h2>
                {ex2Questions.map((q, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="mb-2 font-medium text-gray-800">{q.sentence}</p>
                        <input
                            type="text"
                            value={ex2Answers[idx]}
                            onChange={e => {
                                const newAnswers = [...ex2Answers];
                                newAnswers[idx] = e.target.value;
                                setEx2Answers(newAnswers);
                            }}
                            className="border border-blue-300 rounded px-3 py-1 w-40 focus:ring focus:ring-blue-100"
                        />
                        <button
                            className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                            onClick={() => {
                                const newResults = [...ex2Results];
                                newResults[idx] = validateAnswer(ex2Answers[idx], q.answer);
                                setEx2Results(newResults);
                            }}
                        >تحقق</button>
                        {ex2Results[idx] != null && (
                            <span className={`ml-4 font-semibold ${ex2Results[idx] ? 'text-green-600' : 'text-red-600'}`}>
                                {ex2Results[idx] ? '✅ صحيح' : `❌ الصحيح: ${q.answer}`}
                            </span>
                        )}
                    </div>
                ))}
            </section>

            {/* التمرين 3 */}
            <section className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🔹 التمرين 3: كوّن جملاً تتضمن مركبًا جرّيًا</h2>
                <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
                    {ex3Data.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">✳️ كل جملة تحتوي على جار ومجرور.</p>
            </section>

            {/* التمرين 4 */}
            <section className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🔹 التمرين 4: حدد نوع الجار والمجرور</h2>
                {ex4Data.map((item, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="mb-2 font-medium text-gray-800">{item.sentence}</p>
                        <select
                            value={ex4Answers[idx]}
                            onChange={e => {
                                const updated = [...ex4Answers];
                                updated[idx] = e.target.value;
                                setEx4Answers(updated);
                            }}
                            className="border border-blue-300 rounded px-3 py-1 w-40 focus:ring focus:ring-blue-100"
                        >
                            <option value="">اختر...</option>
                            {choices4.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        <button
                            className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                            onClick={() => {
                                const newRes = [...ex4Results];
                                newRes[idx] = validateAnswer(ex4Answers[idx], item.answer);
                                setEx4Results(newRes);
                            }}
                        >تحقق</button>
                        {ex4Results[idx] != null && (
                            <span className={`ml-4 font-semibold ${ex4Results[idx] ? 'text-green-600' : 'text-red-600'}`}>
                                {ex4Results[idx] ? '✅ صحيح' : `❌ الصحيح: ${item.answer}`}
                            </span>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}