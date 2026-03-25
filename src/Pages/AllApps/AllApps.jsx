import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Download, Star, Search, Plus, CheckCircle } from 'lucide-react';
import { getLocalStorageItem, setLocalStorageItem } from '../../library/utils';

const AllApps = () => {
  const allApps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const installedApps = getLocalStorageItem('installed-apps') || [];

  const filteredApps = allApps?.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuickInstall = (e, app) => {
    e.preventDefault();
    e.stopPropagation();
    const stored = getLocalStorageItem('installed-apps') || [];
    if (!stored.some(item => item.id === app.id)) {
        setLocalStorageItem('installed-apps', [...stored, app]);
        window.location.reload(); // Simple way to refresh status in this view
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Our All Applications</h1>
        <p className="text-slate-500">Explore All Apps on the Market developed by us.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-lg font-bold text-slate-800">({filteredApps.length}) Apps Found</h2>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search Apps..."
              className="input input-bordered w-full pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => {
            const isInstalled = installedApps.some(item => item.id === app.id);
            return (
              <Link 
                to={`/app/${app.id}`} 
                key={app.id} 
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-all block group"
              >
                <div className="bg-slate-100 rounded-lg h-56 w-full mb-4 overflow-hidden flex items-center justify-center">
                  <img src={app.image} alt={app.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-slate-800 truncate pr-2">{app.title}</h3>
                    <button 
                        onClick={(e) => handleQuickInstall(e, app)}
                        className={`p-1.5 rounded-full ${isInstalled ? 'text-green-500 bg-green-50' : 'text-purple-600 bg-purple-50 hover:bg-purple-100'}`}
                    >
                        {isInstalled ? <CheckCircle size={18}/> : <Plus size={18}/>}
                    </button>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] font-bold">
                    <Download size={12} strokeWidth={3} />
                    <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-[10px] font-bold">
                    <Star size={12} fill="currentColor" />
                    <span>{app.ratingAvg || "5.0"}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllApps;