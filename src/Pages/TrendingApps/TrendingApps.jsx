import React from 'react';
import { Download, Star, ArrowRight } from 'lucide-react';
import { useLoaderData, Link } from 'react-router-dom';

const TrendingApps = () => {
    const apps = useLoaderData();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">Trending Apps</h2>
                    <p className="text-gray-500 text-lg">Explore All Trending Apps on the Market developed by us</p>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps && apps.map((app) => (
                        <div key={app.id} className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer rounded-2xl overflow-hidden group">
                            <figure className="px-4 pt-4">
                                <img src={app.image} alt={app.title} className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </figure>
                            <div className="card-body p-5">
                                <h3 className="card-title text-lg font-bold text-slate-800 mb-3">{app.title}</h3>
                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs font-bold">
                                        <Download size={14} strokeWidth={3} />
                                        <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-xs font-bold">
                                        <Star size={14} fill="currentColor" />
                                        <span>{app.ratingAvg}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- SHOW ALL BUTTON --- */}
                <div className="mt-16 text-center">
                    <Link
                        to="/all-apps"
                        className="btn btn-primary btn-lg px-10 rounded-full hover:shadow-lg transition-all gap-2 normal-case font-bold"
                    >
                        Show All
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;