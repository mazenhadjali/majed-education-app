import React from 'react';

function WrapperP({ children }) {
    return (
        <React.Fragment>
            <div className="h-screen bg-cover bg-center relative pt-10">

                <div className="relative z-10 container my-20 overflow-auto bg-white/90 rounded-2xl shadow-lg p-2 w-full mx-auto space-y-6 text-right">
                    {children}
                </div>
            </div>

        </React.Fragment>
    );
}

export default WrapperP;
