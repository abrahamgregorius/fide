import { useState, useEffect } from 'react';
import { 
    BookOpen, 
    Globe, 
    Sparkles, 
    Trophy, 
    TrendingUp, 
    HelpCircle,
    Menu,
    X,
    Flame,
    Heart,
    GraduationCap,
    Crown,
    Award,
    Map,
    PenTool,
    Star,
    ChevronDown,
    Cross,
    BookMarked
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }, []);

    const features = [
        {
            icon: BookOpen,
            title: "Belajar Mudah",
            description: "Baca penjelasan singkat tentang iman Katolik dengan kata-kata sederhana."
        },
        {
            icon: Globe,
            title: "Dunia Seru",
            description: "Jelajahi dunia-dunia seru, setiap dunia punya cerita dan tantangan sendiri!"
        },
        {
            icon: Sparkles,
            title: "Kumpulkan Poin Grace",
            description: "Jawab pertanyaan dengan benar untuk dapat poin Grace. Yuk, kumpulkan sebanyak-banyaknya!"
        },
        {
            icon: Trophy,
            title: "Lawan Bos!",
            description: "Setelah belajar, ayo uji dirimu dengan soal bos. Siap jadi pemenang?"
        },
        {
            icon: TrendingUp,
            title: "Naik Level",
            description: "Semakin banyak belajar, levelmu akan naik! Mulai dari pemula sampai jadi jagoan iman."
        },
        {
            icon: HelpCircle,
            title: "Kuis Seru",
            description: "Setiap selesai belajar, ada kuis seru untuk menguji pengetahuanmu."
        }
    ];

    const levels = [
        { name: "Katekumen", description: "Langkah pertama jadi teman Yesus", icon: Flame, color: "from-stone-400 to-stone-500" },
        { name: "Fidelis", description: "Semakin kenal dan sayang sama Tuhan", icon: Heart, color: "from-rose-400 to-rose-500" },
        { name: "Discipulus", description: "Belajar jadi murid Yesus yang baik", icon: GraduationCap, color: "from-rose-500 to-rose-600" },
        { name: "Theologus", description: "Sudah pintar dan suka berbagi cerita iman", icon: Award, color: "from-rose-600 to-rose-700" },
        { name: "Doctor Ecclesiae", description: "Jagoan iman, siap menolong teman!", icon: Crown, color: "from-amber-500 to-amber-600" }
    ];

    const howItWorks = [
        { step: "01", title: "Pilih Dunia", desc: "Pilih dunia yang kamu suka. Setiap dunia punya cerita seru!", icon: Map },
        { step: "02", title: "Baca Cerita", desc: "Baca penjelasan singkat dan mudah dipahami. Ada banyak hal menarik!", icon: BookMarked },
        { step: "03", title: "Jawab Kuis", desc: "Jawab pertanyaan seru setelah belajar. Jangan takut salah, semua bisa belajar!", icon: PenTool },
        { step: "04", title: "Dapat Hadiah", desc: "Kumpulkan poin Grace dan naik level. Semakin rajin, semakin banyak hadiah!", icon: Sparkles }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Fide" className="h-10 w-10 object-contain" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                                Fide
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-gray-600 hover:text-rose-600 transition-colors duration-300 font-medium">Fitur</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-rose-600 transition-colors duration-300 font-medium">Cara Kerja</a>
                            <a href="#levels" className="text-gray-600 hover:text-rose-600 transition-colors duration-300 font-medium">Tingkatan</a>
                            <button className="px-6 py-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-semibold hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/25">
                                Mulai Belajar
                            </button>
                        </div>
                        <button 
                            className="md:hidden text-gray-600"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
                        <a href="#features" className="block text-gray-600 hover:text-rose-600 font-medium transition-colors duration-300">Fitur</a>
                        <a href="#how-it-works" className="block text-gray-600 hover:text-rose-600 font-medium transition-colors duration-300">Cara Kerja</a>
                        <a href="#levels" className="block text-gray-600 hover:text-rose-600 font-medium transition-colors duration-300">Tingkatan</a>
                        <button className="w-full px-6 py-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-semibold transition-all duration-300">
                            Mulai Belajar
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section - Redesigned */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-8 bg-gradient-to-b from-rose-50 via-white to-white">
                {/* Playful background shapes */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 right-0 w-60 h-60 bg-amber-100 rounded-full blur-2xl opacity-40"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose-50 rounded-t-full blur-2xl opacity-70"></div>

                <div className="relative z-10 flex flex-col items-center w-full px-4">
                    <img src={logo} alt="Fide" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-3 object-contain drop-shadow-lg" />
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-500 bg-clip-text text-transparent leading-tight">
                        Selamat Datang di Fide!
                    </h1>
                    <p className="text-base xs:text-lg sm:text-xl text-gray-700 text-center max-w-md sm:max-w-2xl mb-5">
                        Belajar iman Katolik jadi seru, mudah, dan penuh petualangan.<br className="hidden xs:inline"/> Yuk, mulai perjalananmu bersama teman-teman baru!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-semibold text-base sm:text-lg hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-rose-500/30">
                            Mulai Petualangan
                        </button>
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-gray-200 rounded-full font-semibold text-base sm:text-lg text-gray-700 hover:border-rose-300 hover:text-rose-600 transition-all duration-300">
                            Lihat Fitur
                        </button>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-4 sm:mt-8">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600">500+</div>
                            <div className="text-gray-500 text-xs sm:text-sm md:text-base">Definisi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600">50+</div>
                            <div className="text-gray-500 text-xs sm:text-sm md:text-base">Tahapan</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600">10</div>
                            <div className="text-gray-500 text-xs sm:text-sm md:text-base">Dunia</div>
                        </div>
                    </div>
                    {/* Scroll indicator - always centered */}
                    <div className="flex justify-center mt-8 mb-2 sm:mt-10">
                        <div className="animate-bounce">
                            <ChevronDown className="w-8 h-8 text-rose-400 drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 relative bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                                Fitur Seru di Fide
                            </span>
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Semua dibuat supaya kamu bisa belajar iman Katolik dengan gembira dan tidak membosankan!
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100 hover:transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl flex items-center justify-center group-hover:from-rose-200 group-hover:to-rose-100 transition-colors duration-300">
                                    <feature.icon className="w-7 h-7 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                                Cara Mainnya
                            </span>
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Ikuti langkah-langkah seru ini untuk mulai petualanganmu di Fide!
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {howItWorks.map((item, index) => (
                            <div 
                                key={index} 
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="relative text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-lg shadow-rose-200">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-rose-400 text-sm font-mono mb-2">{item.step}</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-rose-300 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Levels Section */}
            <section id="levels" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                                Level Seru di Fide
                            </span>
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Setiap level punya tantangan dan hadiah. Semakin tinggi levelmu, semakin seru petualangannya!
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        {levels.map((level, index) => (
                            <div 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                    <level.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg text-gray-900">{level.name}</h3>
                                    <p className="text-gray-500 text-sm">{level.description}</p>
                                </div>
                                <div className="hidden sm:block text-gray-300 font-mono text-sm">
                                    Level {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-white to-rose-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div data-aos="fade-up" className="mb-6">
                        <img src={logo} alt="Fide" className="h-16 w-16 mx-auto opacity-30" />
                    </div>
                    <blockquote data-aos="fade-up" data-aos-delay="100" className="text-2xl sm:text-3xl font-light italic text-gray-600 mb-6 leading-relaxed">
                        "Ayo jadi teman Yesus dan belajar bersama! Tuhan sayang semua anak-anak yang mau belajar dan berbagi."
                    </blockquote>
                    <cite data-aos="fade-up" data-aos-delay="200" className="text-rose-600 font-semibold">— Fide</cite>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-rose-50">
                <div className="max-w-4xl mx-auto">
                    <div 
                        data-aos="zoom-in"
                        className="relative p-8 sm:p-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-3xl text-center overflow-hidden shadow-2xl shadow-rose-300"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                                Siap Petualangan Baru?
                            </h2>
                            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
                                Yuk, mulai petualangan seru bersama Fide! Belajar, bermain, dan jadi sahabat Yesus setiap hari.
                            </p>
                            <button className="px-10 py-4 bg-white text-rose-600 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all transform hover:scale-105 shadow-xl">
                                Mulai Petualangan
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Fide" className="h-8 w-8 object-contain" />
                            <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                                Fide
                            </span>
                        </div>
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                            <a href="#" className="hover:text-rose-600 transition-colors duration-300">Tentang Fide</a>
                            <a href="#" className="hover:text-rose-600 transition-colors duration-300">Panduan Orang Tua</a>
                            <a href="#" className="hover:text-rose-600 transition-colors duration-300">Syarat & Ketentuan</a>
                            <a href="#" className="hover:text-rose-600 transition-colors duration-300">Hubungi Kami</a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2026 Fide. Belajar Iman, Hati Senang!
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}