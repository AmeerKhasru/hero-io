import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-4 text-center">
            {/* --- ILLUSTRATION --- */}
            <div className="max-w-md mb-8">
               
                <img 
                    src="/src/assets/error-404.png" 
                    alt="404 Illustration" 
                    className="w-full h-auto"
                />
            </div>

            {/* --- TEXT CONTENT --- */}
            <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
                Oops, page not found!
            </h1>
            <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                The page you are looking for is not available.
            </p>

            {/* --- ACTION BUTTON --- */}
            <button 
                onClick={() => navigate('/')}
                className="btn bg-[#9333EA] hover:bg-[#7e22ce] text-white border-none px-10 rounded-lg normal-case font-bold shadow-md transition-all active:scale-95"
            >
                Go Back!!
            </button>
        </div>
    );
};

export default ErrorPage;