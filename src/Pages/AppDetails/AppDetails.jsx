import React, { useState, useEffect } from 'react';
import { Download, Star } from 'lucide-react';
import { getLocalStorageItem, setLocalStorageItem } from '../../library/utils';

const TrendingAppCard = ({ app }) => {
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const storedApps = getLocalStorageItem('installed-apps') || [];
        const alreadyInstalled = storedApps.some(item => Number(item.id) === Number(app.id));
        setIsInstalled(alreadyInstalled);
    }, [app.id]);

    const handleInstall = (e) => {
        e.preventDefault(); // Prevents navigation if wrapped in a Link
        const storedApps = getLocalStorageItem('installed-apps') || [];
        
        if (!isInstalled) {
            const updatedApps = [...storedApps, app];
            setLocalStorageItem('installed-apps', updatedApps);
            setIsInstalled(true);
            alert(`${app.title} added to your installed apps!`);
        }
    };

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <img src={app.image} alt={app.title} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 line-clamp-1">{app.title}</h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mt-1">
                        <span className="flex items-center gap-1 text-orange-500">
                            <Star size={12} fill="currentColor" /> {app.ratingAvg || '5.0'}
                        </span>
                        <span>•</span>
                        <span>{app.size} MB</span>
                    </div>
                </div>
            </div>

            <button 
                onClick={handleInstall}
                disabled={isInstalled}
                className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
                    isInstalled 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700 active:scale-95'
                }`}
            >
                {isInstalled ? 'Installed' : 'Install Now'}
            </button>
        </div>
    );
};

export default TrendingAppCard;