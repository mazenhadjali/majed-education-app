
function Wrapper1({ children }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed relative pt-10"
            style={{ backgroundImage: "url('/landing-bg.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

            {/* Content */}
            <div className="relative z-10 container my-20 overflow-auto bg-white/10 rounded-2xl shadow-lg p-8 w-full mx-auto space-y-6 text-right text-white">
                {children}
            </div>
        </div>
    );
}

export default Wrapper1;
