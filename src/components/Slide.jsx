
/* -------------------------------- Slide.jsx -------------------------------- */
import React from 'react';

const Slide = ({ children, step, className = '' }) => (
    <div className={`p-6 bg-white rounded-md shadow-md mx-2 ${className}`}>
        {/* Show step number if provided */}
        {step != null && (
            <div className="mb-3 text-sm text-gray-500">
                الصفحة رقم {step}
            </div>
        )}
        {children}
    </div>
);

export default Slide;
