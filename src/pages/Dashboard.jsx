
import PixelPath from '../components/PixelPath';
import PixelBurst from '../components/PixelBurst';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Globe, HelpCircle, Menu, Sparkles, Star, TrendingUp, Trophy } from 'lucide-react';
import logo from "../assets/logo.png"

export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const sidebarNav = [
        { icon: BookOpen, label: 'Learn', path: '/learn' },
        { icon: Globe, label: 'Letters', path: '/letters' },
        { icon: Sparkles, label: 'Practice', path: '/practice' },
        { icon: Trophy, label: 'Leaderboards', path: '/leaderboards' },
        { icon: TrendingUp, label: 'Quests', path: '/quests' },
        { icon: HelpCircle, label: 'Shop', path: '/shop' },
        { icon: Star, label: 'Profile', path: '/profile' },
        { icon: Menu, label: 'More', path: '/more' },
    ];

    // WOW factor: pixel burst effect
    const [showBurst, setShowBurst] = useState(false);

    // Show burst on mount (demo), or call setShowBurst(true) after user completes a node
    useEffect(() => {
        setShowBurst(true);
        const timeout = setTimeout(() => setShowBurst(false), 1200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen flex bg-white text-gray-900 relative overflow-hidden">
            {/* Pixel grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
                    <defs>
                        <pattern id="pixelGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="32" height="32" fill="#fff" />
                            <rect x="0" y="0" width="2" height="32" fill="#f3f4f6" />
                            <rect x="0" y="0" width="32" height="2" fill="#f3f4f6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pixelGrid)" />
                </svg>
            </div>
            <PixelBurst show={showBurst} />
            {/* Sidebar */}
            <Sidebar />

            {/* Main Dashboard */}
            <main className="flex-1 flex flex-col md:flex-row gap-8 p-6 md:p-12 bg-transparent z-10">
                {/* Center: Progress Path */}
                <section className="flex-1 flex flex-col items-center justify-start relative">
                    {/* Section Header */}
                    <div className="w-full max-w-xl mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">SECTION 1, UNIT 1</span>
                            {/* XP Progress Bar inline */}
                            <div className="flex-1 flex flex-col min-w-[120px]">
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-500">XP</span>
                                    <span className="text-rose-600 font-bold">120 / 200</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                                    <div className="h-3 bg-gradient-to-r from-yellow-400 to-rose-500 rounded-full transition-all" style={{ width: '60%' }} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mt-2 mb-4">Name food and drinks</h2>
                    </div>
                    {/* Pixelated Zig-Zag Progress Path */}
                    <div className="mt-4 w-full flex justify-center">
                        <PixelPath />
                    </div>

                    {/* Motivational Quote */}
                    <div className="mt-4 text-center text-xs font-mono text-gray-500 bg-white/80 rounded px-3 py-2 shadow inline-block">
                        "Belajar itu petualangan, bukan perlombaan. Nikmati setiap langkahnya!"
                    </div>
                </section>

                {/* Right Sidebar: Widgets */}
                <aside className="w-full md:w-80 flex flex-col gap-6 mt-10 md:mt-0">
                    {/* Subscription Promo */}
                    <div className="bg-gradient-to-r from-rose-100 to-rose-50 rounded-xl p-5 shadow border border-rose-200">
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles className="text-rose-500" />
                            <span className="font-bold text-rose-700">Try Super for free</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">No ads, personalized practice, and unlimited Legendary!</p>
                        <button className="w-full py-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold hover:from-rose-700 hover:to-rose-800 transition">TRY 1 WEEK FREE</button>
                    </div>
                    {/* Leaderboard */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
                        <div className="flex items-center gap-2 mb-2">
                            <Trophy className="text-amber-500" />
                            <span className="font-semibold text-gray-800">Congratulations!</span>
                        </div>
                        <p className="text-sm text-gray-600">You finished #3 and advanced to the Emerald League</p>
                        <button className="mt-3 w-full py-1 rounded bg-rose-50 text-rose-700 font-medium hover:bg-rose-100 transition">Go to Leaderboards</button>
                    </div>
                    {/* Daily Quests */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
                        <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="text-rose-500" />
                            <span className="font-semibold text-gray-800">Daily Quests</span>
                        </div>
                        <div className="space-y-2">
                            <QuestBar label="Earn 10 XP" value={0} max={10} />
                            <QuestBar label="Spend 5 minutes learning" value={0} max={5} />
                            <QuestBar label="Listen to 7 exercises" value={0} max={7} />
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}

function QuestBar({ label, value, max }) {
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span>{label}</span>
                <span className="font-semibold text-rose-600">{value} / {max}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-2 bg-gradient-to-r from-rose-500 to-rose-700 rounded-full transition-all"
                    style={{ width: `${(value / max) * 100}%` }}
                />
            </div>
        </div>
    );
}
