import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom'; // Added Link import
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
        
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Our All Applications</h1>
        <p className="text-slate-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
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
              className="input input-bordered w-full pl-10 bg-white border-slate-200 focus:outline-purple-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        {/* --- APPS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link 
              to={`/app/${app.id}`} 
              key={app.id}  // Key belongs on the outermost element of the map
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-all hover:-translate-y-1 block"
            >
              {/* Image Container */}
              <div className="bg-slate-100 rounded-lg h-56 w-full mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                  }}
                />
              </div>

              <h3 className="font-bold text-slate-800 mb-4 truncate">
                {app.title}
              </h3>

              <div className="flex justify-between items-center">
                {/* Download Badge */}
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] font-bold border border-green-100">
                  <Download size={12} strokeWidth={3} />
                  <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                </div>

                {/* Star Badge */}
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-[10px] font-bold border border-orange-100">
                  <Star size={12} fill="currentColor" />
                  <span>{app.ratingAvg || "5.0"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredApps.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No apps found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;