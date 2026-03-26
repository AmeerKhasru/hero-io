import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom'; // Changed to react-router-dom
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const navigation = useNavigation();
    
    
    const isLoading = navigation.state === "loading";

    return (
        <div className="relative min-h-screen flex flex-col">
            
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                       
                        <div className="w-16 h-16 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
                        <p className="text-purple-700 font-bold animate-pulse">Loading App Store...</p>
                    </div>
                </div>
            )}

            <Navbar />
            
          
            <main className={`flex-grow transition-opacity duration-50 ${isLoading ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                <Outlet />
            </main>

            <Footer />

            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                theme="colored" 
            />
        </div>
    );
};

export default Root;