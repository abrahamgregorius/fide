import logo from '../assets/logo.png';
import { BookOpen, Globe, Sparkles, Trophy, TrendingUp, HelpCircle, Menu, Star } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <aside className="w-20 flex flex-col items-center py-6 bg-white border-r border-gray-100 shadow-sm min-h-screen z-10">
            <img src={logo} alt="Fide" className="h-12 w-12 mb-8" />
            <nav className="flex flex-col gap-4 items-center w-full">
                {sidebarNav.map((item, idx) => {
                    const isActive = location.pathname === item.path || (item.path === '/learn' && location.pathname === '/');
                    return (
                        <div className="relative flex items-center justify-center">
                            <button
                                key={item.label}
                                className={`flex items-center justify-center w-12 h-12 rounded-lg transition group ${isActive ? 'bg-rose-100 text-rose-700 font-bold shadow' : 'hover:bg-rose-50'}`}
                                onClick={() => navigate(item.path)}
                                tabIndex={0}
                                aria-label={item.label}
                            >
                                <item.icon className={`transition ${isActive ? 'text-rose-700' : 'text-rose-600'} group-hover:scale-110`} size={28} />
                                <span className="sr-only">{item.label}</span>
                            </button>
                            <span className="absolute left-14 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 z-50" style={{top: '50%', transform: 'translateY(-50%)'}}>{item.label}</span>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
