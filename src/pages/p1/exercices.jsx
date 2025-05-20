import React, { useState } from 'react';

const corrections = {
    exercise1: [
        "البحرُ هائجٌ",
        "حقل والد ماجد واسعٌ",
        "ماجدُ يحرث الأرض",
        "الأطفال يرقصون",
        "ماجد و عمر يلعبان",
        "التلاميذ في القسم"
    ],
    exercise2: [
        "الخرفان وسط الزريبة",
        "حنون في البستان",
        "هذه أمي",
        "أنا مريض"
    ],
    exercise3: [
        { sentence: "لعب ماجد في الملعب", answer: "لعب" },
        { sentence: "قرأت حنون القصةَ بصوتٍ جميل", answer: "قرأت" },
        { sentence: "ركب عمر على الدراجة", answer: "ركب" },
        { sentence: "زرعت بيلسان الورود", answer: "زرعت" }
    ],
    exercise4: [
        { wrong: "لعب الكرة بيلسان", correct: "لعبت بيلسان الكرة" },
        { wrong: "قرأ عمر قصةً ممتعة", correct: "قرأ عمر قصةً ممتعة" },
        { wrong: "زرع ماجد الزهور", correct: "زرع ماجد الزهور" },
        { wrong: "كتب حنون الواجبات", correct: "كتب حنون الواجبات" }
    ]
};

export default function EXPExercises() {
    const [answers1, setAnswers1] = useState(Array(corrections.exercise1.length).fill(''));
    const [results1, setResults1] = useState([]);

    const [answers2, setAnswers2] = useState(Array(corrections.exercise2.length).fill(''));
    const [results2, setResults2] = useState([]);

    const [answers3, setAnswers3] = useState(Array(corrections.exercise3.length).fill(''));
    const [results3, setResults3] = useState([]);

    const [answers4, setAnswers4] = useState(Array(corrections.exercise4.length).fill(''));
    const [results4, setResults4] = useState([]);

    const validate = (answers, corrects, setResults, type) => {
        const res = answers.map((ans, idx) => {
            if (type === 'simple') {
                return ans.trim() === corrects[idx];
            } else if (type === 'sentence') {
                return ans.trim() === corrects[idx].answer;
            } else if (type === 'correction') {
                return ans.trim() === corrects[idx].correct;
            }
            return false;
        });
        setResults(res);
    };

    const inputClass = 'border border-indigo-300 focus:ring focus:ring-indigo-200 rounded-lg py-2 w-full max-w-xs';
    const buttonClass = 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition';

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-12 lg:px-20 font-sans text-gray-900">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12">تمارين نحوية تفاعلية</h1>

            {/* Exercise 1 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">التمرين 1: أكمل بمبتدأ يناسب السياق</h2>
                <div className="space-y-4">
                    {corrections.exercise1.map((_, idx) => (
                        <div key={idx} className="flex flex-col gap-2 md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="font-medium w-48">{`... ${_.slice(3)}`}</span>
                            <input
                                type="text"
                                dir="auto"
                                value={answers1[idx]}
                                onChange={e => { const v = [...answers1]; v[idx] = e.target.value; setAnswers1(v); }}
                                className={inputClass}
                            />
                            <button onClick={() => validate(answers1, corrections.exercise1, setResults1, 'simple')} className={buttonClass}>تحقق</button>
                            {results1.length > 0 && (
                                <span className={`${results1[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl`}>
                                    {results1[idx] ? '✅ صحيح' : `❌ خطأ (الصحيح: ${corrections.exercise1[idx]})`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Exercise 2 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">التمرين 2: أكوِّن 4 جمل إسميَة</h2>
                <div className="space-y-4">
                    {corrections.exercise2.map((_, idx) => (
                        <div key={idx} className="flex  gap-2 flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="font-medium w-48">{`${idx + 1}.`}</span>
                            <input
                                type="text"
                                dir="auto"
                                value={answers2[idx]}
                                onChange={e => { const v = [...answers2]; v[idx] = e.target.value; setAnswers2(v); }}
                                className={inputClass}
                            />
                            <button onClick={() => validate(answers2, corrections.exercise2, setResults2, 'simple')} className={buttonClass}>تحقق</button>
                            {results2.length > 0 && (
                                <span className={`${results2[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl`}>
                                    {results2[idx] ? '✅ صحيح' : `❌ خطأ (الصحيح: ${corrections.exercise2[idx]})`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Exercise 3 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">التمرين 3: استخرج الفعل من الجملة</h2>
                <div className="space-y-4">
                    {corrections.exercise3.map((item, idx) => (
                        <div key={idx} className="flex flex-col  gap-2 md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="font-medium w-64">{item.sentence}</span>
                            <input
                                type="text"
                                dir="auto"
                                placeholder="الفعل"
                                value={answers3[idx]}
                                onChange={e => { const v = [...answers3]; v[idx] = e.target.value; setAnswers3(v); }}
                                className={inputClass + ' md:w-1/4'}
                            />
                            <button onClick={() => validate(answers3, corrections.exercise3, setResults3, 'sentence')} className={buttonClass}>تحقق</button>
                            {results3.length > 0 && (
                                <span className={`${results3[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl`}>
                                    {results3[idx] ? '✅ صحيح' : `❌ خطأ (الصحيح: ${item.answer})`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Exercise 4 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">التمرين 4: صحّح الخطأ إن وجد</h2>
                <div className="space-y-4">
                    {corrections.exercise4.map((item, idx) => (
                        <div key={idx} className="flex  gap-2 flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="font-medium w-64">{item.wrong}</span>
                            <input
                                type="text"
                                dir="auto"
                                placeholder="التصحيح"
                                value={answers4[idx]}
                                onChange={e => { const v = [...answers4]; v[idx] = e.target.value; setAnswers4(v); }}
                                className={inputClass}
                            />
                            <button onClick={() => validate(answers4, corrections.exercise4, setResults4, 'correction')} className={buttonClass}>تحقق</button>
                            {results4.length > 0 && (
                                <span className={`${results4[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl`}>
                                    {results4[idx] ? '✅ صحيح' : `❌ خطأ (الصحيح: ${item.correct})`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
