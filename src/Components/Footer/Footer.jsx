import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded flex items-center justify-center">
                                <img src="/src/assets/logo.png" alt="" />
                            </div>
                            <span className="text-lg font-bold text-purple-600 tracking-tight">HERO.IO</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Crafting innovative apps to make digital experiences truly impactful.
                        </p>
                    </div>

                    {/* Links - Column 1 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Apps</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Installation</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Release Notes</a></li>
                        </ul>
                    </div>

                    {/* Links - Column 2 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-600 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                    {/* Links - Column 3 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100  text-xs font-medium uppercase text-gray-400">
                    <p>© 2026 HERO.IO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;