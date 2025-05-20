import React from 'react';
import EXPExercises from './exercices';
import ZoomImageModal from '../../components/ZoomImageBox';
import SlidesParent from '../../components/SlidesParent';
import Slide from '../../components/Slide';

function EXP1() {
    return (
        <div className="p-1 md:p-10 bg-white text-gray-800 leading-loose space-y-8">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700">
                القِصَّةُ: مَاجِدٌ وَحَنونُ فِي مَمْلَكَةِ الجُمَلِ العَجِيبَةِ
            </h1>

            <section className="text-lg space-y-4">
                <SlidesParent>
                    <Slide step={1}>
                        <p>
                            في يَومٍ مِنَ الأَيَّامِ، كانَ مَاجِدٌ وَصَدِيقَتُهُ حَنونُ يَجْلِسَانِ تَحْتَ شَجَرَةٍ كَبِيرَةٍ فِي الحَدِيقَةِ، وَهُمَا يُرَاجِعَانِ دَرْسَ النَّحْوِ.
                            قالَ مَاجِدٌ:<br />
                            <span className="block text-blue-700 font-semibold mt-2">ــ "أَشْعُرُ أَنَّ الجُمَلَ تَطِيرُ مِنْ رَأْسِي وَلا تَبْقَى!"</span><br />
                            ضحِكَتْ حَنونُ وَقالَتْ:<br />
                            <span className="block text-pink-600 font-semibold mt-2">ــ "لَو أَنَّ لِلْجُمَلِ مَمْلَكَةً، لَذَهَبْنَا إِلَيْهَا وَتَعَلَّمْنَا مِنْهَا!"</span>
                        </p>
                    </Slide>
                    <Slide step={2}>

                        <p>
                            فَجْأَةً، هَبَّتْ رِيحٌ زَرْقَاءُ، وَسَمِعَا صَوْتًا يَهْتِفُ:<br />
                            <span className="block text-green-700 font-semibold mt-2">ــ "إِرْكَبَا البِسَاطَ الطَّائِرَ... إِلَى مَمْلَكَةِ الجُمَلِ العَجِيبَةِ!"</span><br />
                            نَظَرَا، فَإِذَا بِبِسَاطٍ سَاحِرٍ أَمَامَهُم، فَرَكِبَاهُ، وَفِي لَحْظَةٍ، طَارَ بِهِمَا فِي السَّمَاءِ حَتَّى وَصَلُوا إِلَى بَابٍ كَبِيرٍ كُتِبَ عَلَيْهِ:<br />
                            <span className="block italic text-center mt-4 border border-indigo-300 bg-indigo-50 p-3 rounded-md">
                                "مَمْلَكَةُ الجُمَلِ : ادْخُلْ تَعْرَِفْ وَتَفْهَمْ."
                            </span>
                        </p>
                    </Slide>
                    <Slide step={3}>
                        <p>
                            فُتِحَ البَابُ نَفْسُهُ، وَدَخَلَ ماجِدٌ وَحَنونُ، فَإِذَا بِهِمَا فِي عَالَمٍ مُمْتَلِئٍ بِالجُمَلِ الحَيَّةِ!
                        </p>
                    </Slide>

                    <Slide step={4}>
                        <p>
                            💬 جُمْلَةٌ تُشْبِهُ الأَمِيرَةَ تَقُولُ:<br />
                            <span className="block text-purple-700 font-semibold mt-2">
                                ــ "أَنَا الجُمْلَةُ الاسْمِيَّةُ ! أَبْدَأُ بِاسْمٍ دَائِمًا. مِثْلُ: القِطَّةُ نَائِمَةٌ."
                            </span>
                        </p>
                    </Slide>
                    <Slide step={5}>
                        <p>
                            وَجَاءَ فَارِسٌ بِدِرْعٍ لَمَّاعٍ وَقالَ:<br />
                            <span className="block text-yellow-700 font-semibold mt-2">
                                ــ "وَأَنَا الجُمْلَةُ الفِعْلِيَّةُ! أَبْدَأُ بِفِعْلٍ. مِثْلُ: نَامَتِ القِطَّةُ."
                            </span><br />
                            قالَتْ حَنونُ بِدَهْشَةٍ:<br />
                            <span className="block text-pink-600 font-semibold mt-2">
                                ــ "إِذًا أَنْتُمَا تَقُولَانِ نَفْسَ المَعْنَى، لَكِنْ بِطَرِيقَتَيْنِ!"
                            </span><br />
                            قالَتِ الأَمِيرَةُ:<br />
                            <span className="block text-purple-700 font-semibold mt-2">
                                ــ "نَعَمْ، لَكِنْ لا تَخْطِئَا! إِذَا رَأَيْتُمَا اسْمًا فِي البِدَايَةِ، فَاعْلَمَا أَنَّنِي أَنَا الجُمْلَةُ الاسْمِيَّةُ."
                            </span><br />
                            قالَ الفَارِسُ:<br />
                            <span className="block text-yellow-700 font-semibold mt-2">
                                ــ "وَإِذَا بَدَأَتِ الجُمْلَةُ بِفِعْلٍ، فَأَنَا مَنْ يَقُودُهَا."
                            </span>
                        </p>
                    </Slide>
                    <Slide step={6}>
                        <p>
                            وَفَجْأَةً، جَاءَ طَيْرٌ كَبِيرٌ يُسَمَّى "طَيْرَ القَوَاعِدِ"، وَقَالَ:<br />
                            <span className="block text-red-600 font-semibold mt-2">
                                ــ "إِنْ أَرَدْتُمُ الرُّجُوعَ إِلَى عَالَمِكُم، فَعَلَيْكُم أَنْ تَكْتُبُوا ثَلَاثَ جُمَلٍ اسْمِيَّةٍ وَثَلَاثَ جُمَلٍ فِعْلِيَّةٍ لِتُثْبِتُوا أَنَّكُم فَهِمْتُم."
                            </span>
                        </p>
                    </Slide>
                    <Slide step={7}>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 space-y-2">
                            <p className="font-semibold">📜 أَخَذَ ماجِدٌ قَلَمَهُ وَكَتَبَ:</p>
                            <ul className="list-disc list-inside">
                                <li>الشَّمْسُ مُشْرِقَةٌ.</li>
                                <li>البُحَيْرَةُ هَادِئَةٌ.</li>
                                <li>السَّيَّارَةُ سَرِيعَةٌ.</li>
                            </ul>

                            <p className="font-semibold mt-4">✍️ وَكَتَبَتْ حَنونُ:</p>
                            <ul className="list-disc list-inside">
                                <li>طَارَ العُصْفُورُ.</li>
                                <li>لَعِبَتِ الفَتَاةُ.</li>
                                <li>سَبَحَ السَّمَكُ فِي البَحْرِ.</li>
                            </ul>

                            <p className="text-green-700 font-bold mt-4">📣 صَاحَ الطَّائِرُ: "رَائِعَانِ! أَنْتُمَا الآنَ فُرْسَانُ مَمْلَكَةِ الجُمَلِ!"</p>
                        </div>
                    </Slide>
                    <Slide step={8}>
                        <p className="mt-6">
                            🌪 وَفِي لَحْظَةٍ، دَارَ البِسَاطُ بِهِمَا وَأَعَادَهُمَا إِلَى الحَدِيقَةِ، وَقَدِ امْتَلَأَتْ قُلُوبُهُمَا بِالفَرَحِ وَالعِلْمِ.
                        </p>
                        <p>
                            قالَ ماجِدٌ:<br />
                            <span className="block text-blue-700 font-semibold mt-2">ــ "الآنَ لَنْ تَطِيرَ الجُمَلُ مِنْ رَأْسِي!"</span><br />
                            قالت حَنونُ:<br />
                            <span className="block text-pink-600 font-semibold mt-2">ــ "وَلَنْ أَنْسَى أَبَدًا الأَمِيرَةَ وَالفَارِسَ وَطَيْرَ القَوَاعِدِ!"</span>
                        </p>
                    </Slide>
                </SlidesParent>
            </section>

            <section className="bg-yellow-50 p-5 rounded-md border border-yellow-200 mt-8">
                <h2 className="text-2xl font-bold text-yellow-700 mb-4">قاعدة هذه القصة هي:</h2>
                <p className="font-semibold">القاعدة النحوية: أنواع الجُمَل في اللغة العربية</p>
                <p>في اللغة العربية، هناك نوعان رئيسيان من الجُمل:</p>

                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>الجملة الاسمية</strong><br />
                        • تبدأ باسم.<br />
                        • تتكوّن غالبًا من مبتدأ وخبر.<br />
                        • مثال:<br />
                        <span className="ml-4 block">- القطةُ نائمةٌ. ← مبتدأ: "القطةُ"، خبر: "نائمةٌ".</span>
                        <span className="ml-4 block">- السماءُ صافيةٌ.</span>
                    </li>
                    <li>
                        <strong>الجملة الفعلية</strong><br />
                        • تبدأ بفعل.<br />
                        • يكون فيها الفعل ثم الفاعل ثم بقية الجملة.<br />
                        • مثال:<br />
                        <span className="ml-4 block">- نَامَتِ القِطَّةُ. ← فعل: "نامت"، فاعل: "القطة".</span>
                        <span className="ml-4 block">- لَعِبَ الطِّفْلُ فِي السَّاحَةِ.</span>
                    </li>
                </ol>

            </section>
            {/* video /p1.mp4 */}
            <div className="mt-8">
                <video
                    className="w-full h-auto rounded-lg shadow-lg max-w-3xl mx-auto"
                    controls
                    src="/p1.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <EXPExercises />

            <div className='mt-8 flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg border border-blue-200/80'>
                <ZoomImageModal src="/im1.jpg" className="w-full h-auto shadow-lg mx-auto p-4 rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" />
            </div>
        </div>
    );
}

export default EXP1;
