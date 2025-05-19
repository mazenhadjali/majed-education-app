import React from 'react';

function Wrapper1({ children }) {
    return (
        <div
            className="h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/landing-bg.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

            {/* Content */}
            <div className="relative z-10 container my-20 overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full mx-auto space-y-6 text-right text-white">
                <h2 className="text-2xl font-semibold text-center">مرحبا بك</h2>
                {children}
            </div>
        </div>
    );
}

export default Wrapper1;
