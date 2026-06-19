import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-200 mt-12 sm:mt-16 lg:mt-20">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                    <div className="col-span-2 sm:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg sm:text-xl font-bold text-white">DStore</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400">
                            Địa điểm mua sắm trực tuyến đáng tin cậy của bạn cho các sản phẩm chất
                            lượng.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">
                            Công ty
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Bài viết
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">
                            Hỗ trợ
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    to="/help"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Trung tâm trợ giúp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Liên hệ chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Câu hỏi thường gặp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/status"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Trạng thái
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">
                            Pháp lý
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Chính sách bảo mật
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Điều khoản dịch vụ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/refund"
                                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Chính sách hoàn tiền
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 my-6 sm:my-8"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
                        © {currentYear} DStore. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                ></rect>
                                <path
                                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                ></path>
                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.834 0-9.766h3.554v1.381c-.009.015-.021.029-.031.042h.031v-.042c.537-.827 1.491-2.006 3.623-2.006 2.647 0 4.629 1.731 4.629 5.449v5.192zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.769-1.71 1.956-1.71 1.187 0 1.915.759 1.915 1.71 0 .951-.768 1.71-1.956 1.71zm1.582 11.597H3.635V9.541h3.284v10.911zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
