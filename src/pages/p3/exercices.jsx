import React, { useState } from 'react';

// بيانات التدريبات
const table1Rows = [
    'كان الولدُ مبتسمًا.',
    'إنّ ماجد ماهر.',
    'كانت الفلّاحُ مجتهدًا غنيًّا.',
    'كأنّ السماءَ ليلٌ دافئ.',
    'ما زال الولدُ المريض في فراشه.',
    'صار الجوُّ الهادئُ عاصفًا.',
    'ليست الطريقُ سهلة.'
];
const table1Cols = ['ناسخ', 'اسم الناسخ', 'خبر الناسخ'];
const correctionsTable1 = [
    ['كان', 'الولدُ', 'مبتسمًا'],
    ['إنَّ', 'ماجد', 'ماهر'],
    ['كانت', 'الفلّاحُ', 'مجتهدًا غنيًّا'],
    ['كأنَّ', 'السماءَ', 'ليلٌ دافئ'],
    ['ما زال', 'الولدُ المريض', 'في فراشه'],
    ['صار', 'الجوُّ الهادئُ', 'عاصفًا'],
    ['ليست', 'الطريقُ', 'سهلة']
];

const ex1Templates = [
    '__ ماجدٌ مجتهدًا في دراسته.',
    '__ حنونُ طيبةَ القلب.',
    '__ عمرُ يضحكُ كثيرًا مع أصدقائه.',
    '__ بيلسانُ ماهرةً في الرسم.'
];
const choices2 = ['كانَ', 'أصبحت', 'ظلَّ', 'ما زالت'];
const corEx1 = ['كانَ', 'أصبحت', 'ظلَّ', 'ما زالت'];

export default function EXPNassikhExercises() {
    // جدول الناسخ
    const [inputs1, setInputs1] = useState(table1Rows.map(() => ['', '', '']));
    const [results1, setResults1] = useState(table1Rows.map(() => null));

    // التمرين 1
    const [ansEx1, setAnsEx1] = useState(Array(ex1Templates.length).fill(''));
    const [resEx1, setResEx1] = useState(Array(ex1Templates.length).fill(null));

    // دالة التحقق
    const validateRow = (answer, correct) => answer.trim() === correct;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16 lg:px-32">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">تمارين "كان وأخواتها"</h1>

            {/* جدول الناسخ والخبر */}
            <section className="bg-white shadow rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">1. أكمل جدول الناسخ والخبر</h2>
                <table className="w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-indigo-100">
                            <th className="border px-4 py-2">الجملة</th>
                            {table1Cols.map(col => (
                                <th key={col} className="border px-4 py-2">{col}</th>
                            ))}
                            <th className="border px-4 py-2">نتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table1Rows.map((row, idx) => (
                            <tr key={idx} className="even:bg-gray-50">
                                <td className="border px-4 py-2 align-top">{row}</td>
                                {inputs1[idx].map((val, c) => (
                                    <td key={c} className="border px-2 py-1">
                                        <input
                                            type="text"
                                            dir="auto"
                                            value={val}
                                            onChange={e => {
                                                const all = inputs1.map(r => [...r]);
                                                all[idx][c] = e.target.value;
                                                setInputs1(all);
                                            }}
                                            className="w-full border border-indigo-200 rounded px-2 py-1 focus:ring focus:ring-indigo-100"
                                        />
                                    </td>
                                ))}
                                <td className="border px-4 py-2 text-center">
                                    <button
                                        onClick={() => {
                                            const rowInputs = inputs1[idx];
                                            const corrects = correctionsTable1[idx];
                                            const allRes = [...results1];
                                            const ok = rowInputs.every((val, i) => validateRow(val, corrects[i]));
                                            allRes[idx] = ok;
                                            setResults1(allRes);
                                        }}
                                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
                                    >تحقق</button>
                                    {results1[idx] != null && (
                                        <div className="mt-2 text-sm">
                                            {results1[idx]
                                                ? <span className="text-green-600 font-semibold">✅ جميع الإجابات صحيحة</span>
                                                : <span className="text-red-600 font-semibold">❌ يوجد خطأ. الإجابات الصحيحة: <br />
                                                    {correctionsTable1[idx].join(' | ')}</span>
                                            }
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* التمرين 1 قائمة */}
            <section className="bg-white shadow rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">2. أكمل الجمل الآتية</h2>
                <p className="mb-4 text-gray-700">اختر الفعل الناسخ المناسب:</p>
                <div className="space-y-4">
                    {ex1Templates.map((tpl, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                            <span className="w-full md:w-1/2">{tpl}</span>
                            <select
                                value={ansEx1[idx]}
                                onChange={e => {
                                    const a = [...ansEx1]; a[idx] = e.target.value; setAnsEx1(a);
                                }}
                                className="border border-indigo-300 rounded px-3 py-2 focus:ring focus:ring-indigo-100"
                            >
                                <option value="">اختر...</option>
                                {choices2.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                            <button
                                onClick={() => {
                                    const all = [...resEx1];
                                    all[idx] = validateRow(ansEx1[idx], corEx1[idx]);
                                    setResEx1(all);
                                }}
                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                            >تحقق</button>
                            {resEx1[idx] != null && (
                                <span className={`mt-2 md:mt-0 font-semibold ${resEx1[idx] ? 'text-green-600' : 'text-red-600'}`}>
                                    {resEx1[idx]
                                        ? '✅ صحيح'
                                        : `❌ إختيارك: ${ansEx1[idx] || '-'}، الصحيح: ${corEx1[idx]}`}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}