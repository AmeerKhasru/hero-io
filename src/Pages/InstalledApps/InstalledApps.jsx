import React, { useState, useEffect } from 'react';
import { Download, Star, ChevronDown } from 'lucide-react';
import { getLocalStorageItem, setLocalStorageItem } from '../../library/utils';
import { toast } from 'react-toastify';

const InstalledApps = () => {
    
    const [installedApps, setInstalledApps] = useState([]);

    
    useEffect(() => {
        const stored = getLocalStorageItem('installed-apps');
        if (stored) {
            setInstalledApps(stored);
        }
    }, []);

    
    const handleUninstall = (id) => {
        const updatedList = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedList);

           toast.error('Uninstalled!', {
        position: "bottom-right",
        icon: "🗑️", 
        theme: "colored"
    });
        // Save the updated list back to storage
        setLocalStorageItem('installed-apps', updatedList);
     
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-20">
            {/* --- HEADER SECTION --- */}
            <div className="py-16 text-center bg-slate-50/50 mb-10">
                <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Your Installed Apps</h1>
                <p className="text-slate-500">Manage all your applications in one place</p>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                {/* --- FILTER & COUNT BAR --- */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-800">
                        {installedApps.length} {installedApps.length === 1 ? 'App' : 'Apps'} Found
                    </h2>
                    
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-sm bg-white border-slate-200 text-slate-500 font-medium normal-case gap-2">
                            Sort By Size <ChevronDown size={16} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setInstalledApps([...installedApps].sort((a,b) => b.size - a.size))}>Size (Large to Small)</button></li>
                            <li><button onClick={() => setInstalledApps([...installedApps].sort((a,b) => a.size - b.size))}>Size (Small to Large)</button></li>
                        </ul>
                    </div>
                </div>

                {/* --- INSTALLED APPS LIST --- */}
                <div className="space-y-4">
                    {installedApps.length > 0 ? (
                        installedApps.map((app) => (
                            <div 
                                key={app.id} 
                                className="flex flex-row items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                            >
                                <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0 overflow-hidden">
                                    <img 
                                        src={app.image} 
                                        alt={app.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>

                                <div className="ml-5 flex-grow">
                                    <h3 className="text-lg font-bold text-slate-800">{app.title}</h3>
                                    <div className="flex items-center gap-4 mt-1">
                                        <div className="flex items-center gap-1 text-green-500 font-bold text-xs">
                                            <Download size={14} strokeWidth={3} />
                                            <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-orange-500 font-bold text-xs">
                                            <Star size={14} fill="currentColor" />
                                            <span>{app.ratingAvg || 5}</span>
                                        </div>
                                        <div className="text-slate-400 text-xs font-medium">
                                            {app.size} MB
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleUninstall(app.id)}
                                    className="btn btn-error btn-outline btn-sm px-6 rounded-lg normal-case"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium">No applications installed.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;