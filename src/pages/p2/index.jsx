import React from 'react';
import EXPExercises from './exercices';

function EXP2() {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-2xl">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
                مغامرة المركّب الإضافي في قرية بَيْلَسَان الساحرة
            </h1>

            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                <p>
                    في قلب قرية <strong>"بَيْلَسَان"</strong> العجيبة، حيث تهمس الأزهار وتتراقص أوراق الأشجار، عاش صديقان شغوفان بالاستكشاف هما <strong>ماجد</strong> و<strong>حَنُّون</strong>.
                    وفي صباحٍ مشرق، بينما كانا يجمعان أزهاراً ملوّنة بالقرب من <strong>"بحيرة الكلمات"</strong>، سمعا رنيناً غامضاً قادماً من <strong>"غابة الأبجدية"</strong>.
                </p>

                <p>
                    فجأة، ظهرت أمامهما جنية صغيرة تدعى <strong>"بَيْلَسَان"</strong> تحمل كتاباً سحرياً يتلألأ بألوان زاهية.
                    قالت لهما بنبرة مستعجلة: <em>“لقد اختفت كنوز المركّب الإضافي من مملكتنا! هل تساعدونني في العثور عليها؟”</em>
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-md">
                    <p className="font-semibold text-purple-700 mb-2">قالت بَيْلَسَان:</p>
                    <p>
                        "المركّب الإضافي كالصديقين التوأم، لا ينفصل أحدهما عن الآخر! ويتكون من:"
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>الجزء الأول (المضاف):</strong> مثل: <em>كتاب</em></li>
                        <li><strong>الجزء الثاني (المضاف إليه):</strong> مثل: <em>التلميذ</em></li>
                        <li>ومعهما يصبح لدينا: <strong>"كتاب التلميذ"</strong></li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-purple-700 mt-8">المحطة الأولى: وادي الإضافة</h2>
                <p>
                    عند صخرة كبيرة، وجدوا نقشاً يقول: <strong>"أكملوا الفراغ: ساعة ___"</strong><br />
                    بسرعة كتبت حَنُّون: <strong>"ساعة الحائط"</strong> (ساعة: مضاف، الحائط: مضاف إليه)<br />
                    وفُتِحت الصخرة كاشفةً طريقاً سرياً!
                </p>

                <h2 className="text-2xl font-semibold text-purple-700 mt-8">المحطة الثانية: جسر الكلمات</h2>
                <p>
                    طلب منهم حارس الجسر أن يذكروا مركّباً إضافياً.<br />
                    فقال ماجد بثقة: <strong>"هذا غطاء القلم خاصتي"</strong> (غطاء: مضاف، القلم: مضاف إليه)<br />
                    وسقطت من السماء قطعة الكنز الثانية!
                </p>

                <h2 className="text-2xl font-semibold text-purple-700 mt-8">المحطة الأخيرة: كهف الأسرار</h2>
                <p>
                    داخل الكهف المظلم، وجدوا صندوقاً مقفولاً عليه السؤال:<br />
                    <strong>"ما المركّب الإضافي في: حقيبة المدرسة؟"</strong><br />
                    أجابت بَيْلَسَان بابتسامة: <strong>"حقيبة (مضاف) + المدرسة (مضاف إليه)"</strong><br />
                    وانفتح الصندوق ليظهر آخر قطع الكنز!
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                    <p>
                        كانت المفاجأة أن الكنز هو عبارة عن حروف ذهبية تشكّل الجملة:<br />
                        <span className="font-bold text-yellow-700">"المركّب الإضافي صديقان لا ينفصلان!"</span>
                    </p>
                    <p>فرح الجميع بهذا الاكتشاف، وقالت بَيْلَسَان بفخر: <em>"الآن أنتم أبطال المركّب الإضافي!"</em></p>
                </div>

                <h2 className="text-2xl font-semibold text-purple-700 mt-8">العودة إلى القرية</h2>
                <p>
                    عند عودتهم، بدأ ماجد وحنُّون بالتدرب على ما تعلّماه:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ماجد:</strong> "انظروا إلى باب المنزل"</li>
                    <li><strong>حَنُّون:</strong> "وهذه سيارة الأب تنتظرنا"</li>
                </ul>
                <p>
                    وبينما كانت بَيْلَسَان تلوّح لهما من بين الغيوم، تلمع أجنحتها تحت أشعة الشمس، ابتسم الصديقان بسعادة غامرة.
                </p>
            </div>
            {/* video /p1.mp4 */}
            <div className="mt-8">
                <video
                    className="w-full h-auto rounded-lg shadow-lg max-w-3xl mx-auto"
                    controls
                    src="/p2.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <EXPExercises />
        </div>
    );
}

export default EXP2;
