import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Backdrop Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <span className="text-lg sm:text-xl font-bold text-slate-900">
                                DStore
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link
                                to="/"
                                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm lg:text-base"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to="/products"
                                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm lg:text-base"
                            >
                                Sản phẩm
                            </Link>
                            <Link
                                to="/about"
                                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm lg:text-base"
                            >
                                Về chúng tôi
                            </Link>
                            <Link
                                to="/contact"
                                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm lg:text-base"
                            >
                                Liên hệ
                            </Link>
                        </nav>

                        {/* Auth Links - Desktop */}
                        <div className="hidden md:flex items-center gap-2 md:gap-3">
                            <Link
                                to="/login"
                                className="px-3 sm:px-4 py-2 text-slate-900 font-medium hover:bg-slate-50 rounded-lg transition-colors text-xs sm:text-sm"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                to="/register"
                                className="px-3 sm:px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-xs sm:text-sm"
                            >
                                Đăng ký
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex md:hidden p-2 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-slate-900"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* 
                Mobile Navigation
            */}
            <div
                className={`
                    fixed top-16 left-0 right-0 z-40
                    bg-white border-b border-slate-200
                    md:hidden
                    transition-all duration-300 ease-in-out
                    ${
                        isMobileMenuOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                    }
                `}
            >
                <nav className="px-4 py-3 space-y-1">
                    <Link
                        to="/"
                        className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Trang chủ
                    </Link>
                    <Link
                        to="/products"
                        className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sản phẩm
                    </Link>
                    <Link
                        to="/about"
                        className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Về chúng tôi
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Liên hệ
                    </Link>

                    <div className="my-1 border-t border-slate-200" />

                    <Link
                        to="/login"
                        className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/register"
                        className="block px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Đăng ký
                    </Link>
                </nav>
            </div>
        </>
    );
}
