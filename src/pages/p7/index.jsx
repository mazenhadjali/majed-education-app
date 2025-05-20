import React from 'react';

function EXP7() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4 md:px-16 lg:px-32 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 text-center mb-12">
        مغامرة الأفعال المعتلة وسرها
      </h1>

      <section className="space-y-10">
        {/* قصة الأفعال الغريبة */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">قصة الأفعال الغريبة</h2>
          <p className="text-lg">
            ذات يوم، كان ماجد وحنُّون يساعدان المعلمة في ترتيب بطاقات الكلمات، لكنهما لاحظا مجموعة من الأفعال تبدو غريبة وغير مكتملة.<br />
            قال ماجد: "انظري يا حنُّون هذه الأفعال تبدو غريبة."
          </p>
        </div>

        {/* ظهور الجنية وتعريف الأفعال المعتلة */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">ظهور الجنية وتعريف الأفعال المعتلة</h2>
          <p className="text-lg">
            لم تمر بضعة ثوانٍ حتى ظهرت أمامهما فجأة جِنّيةٌ بيضاء اللون ذات وجه طفوليٍّ مبتسم وقالت:<br />
            "مرحبًا يا صغار، أنا نيلسان جِنّية الأفعال. لقد سمعت حديثكما حول البطاقات، أنتم محقون؛ هذه الأفعال تسمى الأفعال المعتلة."<br />
            فسألت حنُّون: "لم سمّيتِها أفعالًا معتلة؟"<br />
            أجابت الجنية مبتسمة: "سؤال ذكي يا حنُّون! تُسمى الأفعال المعتلة لأنها تحتوي على حروف العلة. وهل تعرفون يا أطفال ما هي حروف العلة؟"<br />
            فكّر ماجد قليلاً ثم صاح: "نعم! لقد درسناها في الحصة الفارطة: الألف والواو."<br />
            أكملت حنُّون: "نعم، والياء أيضًا."
          </p>
        </div>

        {/* سر الأفعال المعتلة */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">سر الأفعال المعتلة</h2>
          <p className="text-lg">
            ابتسمت الجنية وقالت: "رائع! أحسنتم. إذن سأخبركما بسرّ الأفعال المعتلة."<br />
            أخرجت ثلاث كرات سحريّة وكان على كل واحدة منها كلمة: <strong>قال</strong>، <strong>يدعو</strong>، <strong>سعى</strong>.<br />
            قالت الجنية: "هذه أفعال معتلة لكنها تختلف حسب موقع حرف العلة فيها:<br />
            - <strong>قال</strong> يُسمى <em>أجوف</em> لأن حرف العلة في أوله.<br />
            - <strong>يدعو</strong> يُسمى <em>أجوف</em> لأن حرف العلة في وسطه.<br />
            - <strong>سعى</strong> يُسمى <em>ناقص</em> لأن حرف العلة في آخره."
          </p>
        </div>

        {/* التحدي والختام */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">التحدي والختام</h2>
          <p className="text-lg">
            قال ماجد: "إذًا ليست كل الأفعال المعتلة متشابهة."<br />
            ابتسمت الجنية وقالت: "بالضبط! والآن لديكما تحدٍّ: عليكما العثور على ثلاثة أفعال معتلة مختلفة من كتابكما المدرسي."<br />
            فأسّرع الأطفال للبحث، وعندما وجدا الأفعال المطلوبة، كانت الجنية قد عادت إلى عالمها فلم يجداها؛ حينها بقي الاثنان يضحكان من غرابة هذه المغامرة.<br />
            وظلّت الجنية نيلسان سرّ ماجد وحنُّون.
          </p>
        </div>
      </section>
    </div>
  );
}

export default EXP7;
