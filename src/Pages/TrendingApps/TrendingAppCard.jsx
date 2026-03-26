import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import { getLocalStorageItem, setLocalStorageItem } from '../../library/utils';

const TrendingAppCard = ({ app }) => {
    const [isInstalled, setIsInstalled] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedApps = getLocalStorageItem('installed-apps') || [];
        const alreadyInstalled = storedApps.some(item => Number(item.id) === Number(app.id));
        setIsInstalled(alreadyInstalled);
    }, [app.id]);

    const handleInstall = (e) => {
        e.stopPropagation(); 
        const storedApps = getLocalStorageItem('installed-apps') || [];
        if (!isInstalled) {
            const updatedApps = [...storedApps, app];
            setLocalStorageItem('installed-apps', updatedApps);
            setIsInstalled(true);
        }
    };

    return (
        <div 
            onClick={() => navigate(`/app/${app.id}`)} 
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex items-center gap-4 mb-4">
                <img src={app.image} alt={app.title} className="w-16 h-16 rounded-xl object-cover border border-slate-50" />
                <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 line-clamp-1 group-hover:text-purple-600 transition-colors">
                        {app.title}
                    </h3>
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
                className={`w-full py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isInstalled ? 'bg-slate-100 text-slate-400' : 'bg-purple-600 text-white hover:bg-purple-700 active:scale-95'
                }`}
            >
                {isInstalled ? <><CheckCircle size={14}/> Installed</> : <><Plus size={14}/> Install Now</>}
            </button>
        </div>
    );
};

export default TrendingAppCard;