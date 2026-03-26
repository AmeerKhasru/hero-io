import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Download, Star, Search, Loader2 } from 'lucide-react';

const AllApps = () => {
  const allApps = useLoaderData() || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 400);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const filteredApps = allApps.filter(app =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tight">Our All Applications</h1>
        <p className="text-slate-500 font-medium">Explore all apps on the market developed by us.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-lg font-bold text-slate-800">
            {filteredApps.length > 0 ? `(${filteredApps.length}) Apps Found` : "No apps found"}
          </h2>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by app name..."
              className="input input-bordered w-full pl-12 bg-white border-slate-200 focus:border-purple-500 rounded-xl shadow-sm h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              {isSearching ? (
                <Loader2 className="animate-spin text-purple-600" size={20} />
              ) : (
                <Search size={20} />
              )}
            </div>
          </div>
        </div>

        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-300">
            <img
              src="https://i.ibb.co.com/FbddkM5r/no-results.png"
              alt="No search results found"
              className="w-64 h-64 object-contain mb-6 opacity-80"
            />

            <h3 className="text-xl font-bold text-slate-700 mb-1">No Apps Found</h3>
            <p className="text-slate-400 text-lg">
              No results match your search query: <span className="text-purple-600 font-semibold italic">"{searchQuery}"</span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredApps.map((app) => (
              <Link
                to={`/app/${app.id}`}
                key={app.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block group"
              >
                <div className="bg-slate-50 rounded-xl h-52 w-full mb-5 overflow-hidden flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-slate-800 text-lg truncate group-hover:text-purple-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">{app.companyName || "Verified Dev"}</p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-50">
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider">
                    <Download size={14} strokeWidth={3} />
                    <span>8M</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider">
                    <Star size={14} fill="currentColor" />
                    <span>{app.ratingAvg || "5.0"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;