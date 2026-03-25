import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Download, Star, Search } from 'lucide-react';

const AllApps = () => {
  const allApps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic for the Search Bar
  const filteredApps = allApps.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* --- HEADER SECTION --- */}
      <div className="py-16 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Our All Applications</h1>
        <p className="text-slate-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-center mt-4">
          <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* --- SEARCH & COUNT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-lg font-bold text-slate-800">
            ({filteredApps.length}) Apps Found
          </h2>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search Apps..."
              className="input input-bordered w-full pl-10 bg-white border-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        {/* --- APPS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div 
              key={app.id} 
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              {/* Grey placeholder image matching your wireframe */}
              <div className="bg-slate-200 rounded-lg h-56 w-full mb-4 flex items-center justify-center">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="h-full w-full object-cover rounded-lg opacity-80 mix-blend-multiply" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              <h3 className="font-bold text-slate-800 mb-4 truncate">
                {app.title}
              </h3>

              <div className="flex justify-between items-center">
                {/* Download Badge */}
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] font-bold border border-green-100">
                  <Download size={12} />
                  <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                </div>

                {/* Star Badge */}
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-[10px] font-bold border border-orange-100">
                  <Star size={12} fill="currentColor" />
                  <span>5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;