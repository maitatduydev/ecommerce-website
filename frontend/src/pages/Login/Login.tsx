import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <div className="w-full">
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Chào Mừng Quay Trở Lại
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                    Đăng nhập vào tài khoản của bạn để tiếp tục mua sắm
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2"
                    >
                        Địa chỉ email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="nguyenvana@gmail.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <label
                            htmlFor="password"
                            className="block text-xs sm:text-sm font-medium text-slate-700"
                        >
                            Mật khẩu
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu của bạn"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors shrink-0"
                        >
                            {showPassword ? (
                                <BiHide size={20} className="cursor-pointer" />
                            ) : (
                                <BiShowAlt size={20} className="cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer"
                    />
                    <label
                        htmlFor="remember"
                        className="text-xs sm:text-sm text-slate-600 cursor-pointer"
                    >
                        Ghi nhớ tài khoản
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-2.5 sm:py-3 text-sm cursor-pointer sm:text-base bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 mt-6"
                >
                    {isLoading ? <span>Đang đăng nhập</span> : <span>Đăng nhập</span>}
                </button>
            </form>

            <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-slate-600">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/register" className="text-slate-900 font-medium hover:underline">
                        Tạo tài khoản ngay
                    </Link>
                </p>
            </div>

            <div className="relative mt-6 sm:mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-2 bg-white text-slate-500">Hoặc tiếp tục với</span>
                </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-3 cursor-pointersm:px-4 py-2 sm:py-3 text-xs sm:text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                    <FcGoogle size={20} />
                    <span className="text-slate-700 font-medium hidden sm:inline">Google</span>
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-3 cursor-pointer sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                    <FaFacebook size={20} color="#1877F2" />
                    <span className="text-slate-700 font-medium hidden sm:inline">Facebook</span>
                </button>
            </div>

            <p className="text-xs text-slate-500 text-center mt-6 sm:mt-8">
                Dữ liệu của bạn được bảo mật và mã hóa. Chúng tôi không bao giờ chia sẻ thông tin
                của bạn.
            </p>
        </div>
    );
}
