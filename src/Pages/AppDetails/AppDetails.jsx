import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Download, Star, MessageSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
// Assuming getLocalStorageItem is also exported from utils
import { setLocalStorageItem, getLocalStorageItem } from '../../library/utils';

const AppDetails = () => {
    const { id } = useParams();
    const allApps = useLoaderData();
    const app = allApps.find(a => a.id === parseInt(id));

    if (!app) return <div className="p-20 text-center">App not found</div>;

    // Data for Recharts using the actual app data if available
    const ratingData = app.ratings || [
        { name: '5 star', count: 9500 },
        { name: '4 star', count: 6200 },
        { name: '3 star', count: 3100 },
        { name: '2 star', count: 1800 },
        { name: '1 star', count: 800 },
    ];

    const handleInstall = () => {
        const storedApps = getLocalStorageItem('installed-apps') || [];

        const isAlreadyInstalled = storedApps.find(item => item.id === app.id);

        if (!isAlreadyInstalled) {
            const updatedApps = [...storedApps, app];
            
           
            setLocalStorageItem('installed-apps', updatedApps);
            
            alert(`${app.title} installed successfully!`);
        } else {
            alert("This app is already installed.");
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-20 pt-10">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* --- TOP HERO SECTION --- */}
                <div className="bg-white border border-slate-100 rounded-xl p-8 mb-8 flex flex-col md:flex-row gap-10 items-center md:items-start shadow-sm">
                    <div className="w-52 h-52 bg-white border border-slate-100 rounded-3xl shadow-sm flex items-center justify-center p-6">
                        <img src={app.image} alt={app.title} className="max-h-full object-contain" />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <h1 className="text-3xl font-bold text-slate-800 mb-1">{app.title}</h1>
                        <p className="text-slate-400 mb-8 font-medium">
                            Developed by <span className="text-purple-600 underline cursor-pointer">{app.companyName}</span>
                        </p>

                        <div className="flex justify-center md:justify-start gap-12 mb-8">
                            <div>
                                <Download size={24} className="text-green-500 mb-1 mx-auto md:mx-0" />
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Downloads</p>
                                <p className="text-2xl font-black text-slate-800">8M</p>
                            </div>
                            <div>
                                <Star size={24} className="text-orange-500 mb-1 mx-auto md:mx-0" fill="currentColor" />
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Average Rating</p>
                                <p className="text-2xl font-black text-slate-800">{app.ratingAvg}</p>
                            </div>
                            <div>
                                <MessageSquare size={24} className="text-purple-500 mb-1 mx-auto md:mx-0" fill="currentColor" />
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Reviews</p>
                                <p className="text-2xl font-black text-slate-800">54K</p>
                            </div>
                        </div>

                        <button 
                            onClick={handleInstall} 
                            className="btn bg-[#00D991] hover:bg-[#00c080] border-none text-white px-10 normal-case font-bold rounded-lg shadow-sm"
                        >
                            Install Now {app.size} MB
                        </button>
                    </div>
                </div>

                {/* --- RATINGS SECTION --- */}
                <div className="bg-white border border-slate-100 rounded-xl p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Ratings</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={ratingData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                <XAxis 
                                    type="number" 
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#CBD5E1', fontSize: 12, fontWeight: 'bold' }}
                                />
                                <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                />
                                <Bar dataKey="count" fill="#FF8A00" radius={[0, 4, 4, 0]} barSize={30}>
                                    {ratingData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#FF8A00" />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* --- DESCRIPTION SECTION --- */}
                <div className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Description</h2>
                    <div className="text-slate-500 leading-relaxed space-y-6 text-sm">
                        <p>{app.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;