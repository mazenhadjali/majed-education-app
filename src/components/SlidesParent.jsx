/* ----------------------------- SlidesParent.jsx ----------------------------- */
import React, { useState, Children, cloneElement } from 'react';

const SlidesParent = ({ children, className = '' }) => {
    const total = Children.count(children);
    const [index, setIndex] = useState(0);

    if (total === 0) return null;

    // تحضير السلايدات مع تمرير رقم الـ step
    const slides = Children.map(children, (child, i) =>
        cloneElement(child, { step: i + 1, key: i })
    );

    // انتقل للسلايد السابق (بدون لّف)
    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    // انتقل للسلايد التالي (بدون لّف)
    const next = () => {
        if (index < total - 1) setIndex(index + 1);
    };

    return (
        <div className={`relative w-full ${className}`}>
            {/* عرض السلايد الحالي فقط */}
            <div className="w-full">
                {slides[index]}
            </div>

            {/* أزرار السابق واللاحق */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={next}
                    disabled={index === total - 1}
                    aria-label="السلايد التالي"
                    className={`p-3 rounded-full shadow-lg transition 
            ${index === total - 1
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-gray-700 text-white hover:bg-gray-800'}`}
                >
                    التالي
                </button>
                <button
                    onClick={prev}
                    disabled={index === 0}
                    aria-label="السلايد السابق"
                    className={`p-3 rounded-full shadow-lg transition 
            ${index === 0
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-gray-700 text-white hover:bg-gray-800'}`}
                >
                    السابق
                </button>


            </div>
        </div>
    );
};

export default SlidesParent;
