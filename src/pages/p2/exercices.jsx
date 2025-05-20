import React, { useState } from 'react';

const corrections = {
    exercise1: [
        'دفتر ماجدٍ',
        'حقيبة حنونَ',
        'صوتِ عمرَ',
        'رسمةُ بيلسانَ',
        'كتابَ عمرِ'
    ],
    exercise2: [
        'ماجدٍ',
        'حنونَ',
        'عمرَ',
        'بيلسانَ',
        'حنونَ'
    ],
    exercise3: [
        'قصةُ بيلسانَ',
        'صوتُ عمرَ',
        'حقيبةُ حنونَ',
        'دفترُ ماجدٍ'
    ]
};

export default function EXPIDExercises() {
    // State for each exercise
    const [ans1, setAns1] = useState(Array(corrections.exercise1.length).fill(''));
    const [res1, setRes1] = useState([]);

    const [ans2, setAns2] = useState(Array(corrections.exercise2.length).fill(''));
    const [res2, setRes2] = useState([]);

    const [ans3, setAns3] = useState(Array(corrections.exercise3.length).fill(''));
    const [res3, setRes3] = useState([]);

    const validate = (answers, corrects, setResults) => {
        const feedback = answers.map((a, i) => a.trim() === corrects[i]);
        setResults(feedback);
    };

    const inputCls = 'border border-indigo-300 focus:ring focus:ring-indigo-200 rounded-lg px-3 py-2 w-full';
    const btnCls = 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition';

    return (
        <div className="min-h-screen bg-indigo-50 py-12 px-6 md:px-16 lg:px-32 font-sans text-gray-900">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">تمارين المركب الإضافي</h1>

            {/* Exercise 1 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔹 التمرين 1: ضع خطًّا تحت المركب الإضافي</h2>
                <div className="space-y-4">
                    {[
                        'قرأتُ دفترَ ماجدٍ بعناية.',
                        'رتبتُ حقيبةَ حنونَ صباحًا.',
                        'استمعتُ إلى صوتِ عمرَ وهو يقرأ.',
                        'أعجبتني رسمةُ بيلسانَ.',
                        'نسيتُ كتابَ عمرِ في المنزل.'
                    ].map((sent, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="w-64 font-medium">{sent}</span>
                            <input
                                type="text"
                                dir="auto"
                                placeholder="اكتب المركب"
                                value={ans1[idx]}
                                onChange={e => { const a = [...ans1]; a[idx] = e.target.value; setAns1(a); }}
                                className={inputCls + ' md:w-1/3'}
                            />
                            <button onClick={() => validate(ans1, corrections.exercise1, setRes1)} className={btnCls}>تحقق</button>
                            {res1.length > 0 && (
                                <span className={`${res1[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl ml-4`}>
                                    {res1[idx] ? '✅ صحيح' : `❌ الصحيح: ${corrections.exercise1[idx]}`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Exercise 2 */}
            <section className="bg-white shadow-lg rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔹 التمرين 2: أكمل الفراغ بمركب إضافي</h2>
                <div className="space-y-4">
                    {[
                        'هذا قلمُ _______________.',
                        'هذه حقيبةُ _______________.',
                        'أحببتُ دفترَ _______________.',
                        'رأيتُ لعبةَ _______________.',
                        'أعجبتني فكرةُ _______________.'
                    ].map((template, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="w-64 font-medium">{template}</span>
                            <input
                                type="text"
                                dir="auto"
                                placeholder="اكتب الإسم"
                                value={ans2[idx]}
                                onChange={e => { const a = [...ans2]; a[idx] = e.target.value; setAns2(a); }}
                                className={inputCls + ' md:w-1/4'}
                            />
                            <button onClick={() => validate(ans2, corrections.exercise2, setRes2)} className={btnCls}>تحقق</button>
                            {res2.length > 0 && (
                                <span className={`${res2[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl ml-4`}>
                                    {res2[idx] ? '✅ صحيح' : `❌ الصحيح: ${corrections.exercise2[idx]}`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Exercise 3 */}
            <section className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔹 التمرين 3: كوّن مركبًا إضافيًا</h2>
                <div className="space-y-4">
                    {[
                        { a: 'قصة', b: 'بيلسان' },
                        { a: 'صوت', b: 'عمر' },
                        { a: 'حقيبة', b: 'حنون' },
                        { a: 'دفتر', b: 'ماجد' }
                    ].map((pair, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="w-64 font-medium">{`${pair.a} / ${pair.b} =`}</span>
                            <input
                                type="text"
                                dir="auto"
                                placeholder="كوّن المركب"
                                value={ans3[idx]}
                                onChange={e => { const a = [...ans3]; a[idx] = e.target.value; setAns3(a); }}
                                className={inputCls + ' md:w-1/3'}
                            />
                            <button onClick={() => validate(ans3, corrections.exercise3, setRes3)} className={btnCls}>تحقق</button>
                            {res3.length > 0 && (
                                <span className={`${res3[idx] ? 'text-green-600' : 'text-red-600'} font-semibold rtl ml-4`}>
                                    {res3[idx] ? '✅ صحيح' : `❌ الصحيح: ${corrections.exercise3[idx]}`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
