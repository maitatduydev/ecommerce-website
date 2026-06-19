import { useState } from "react";
import { Link } from "react-router-dom";
import AuthDivider from "../../components/AuthDivider/AuthDivider";
import FormInput from "../../components/FormInput/FormInput";
import SocialAuthButtons from "../../components/SocialAuthButtons/SocialAuthButtons";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

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
                    Đăng nhập vào tài khoản để tiếp tục mua sắm
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <FormInput label="Địa chỉ email" type="email" placeholder="nguyenvana@gmail.com" />
                <FormInput
                    label="Mật khẩu"
                    type="password"
                    placeholder="Nhập mật khẩu của bạn"
                    rightElement={
                        <Link
                            to="/forgot-password"
                            className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 font-medium"
                        >
                            Quên mật khẩu?
                        </Link>
                    }
                />

                <div className="flex items-center gap-2 sm:gap-3">
                    <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded border-slate-300 cursor-pointer"
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
                    className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-slate-900 text-white font-medium rounded-lg
            hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 mt-6"
                >
                    {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>

            <p className="text-xs sm:text-sm text-slate-600 text-center mt-4 sm:mt-6">
                Chưa có tài khoản?{" "}
                <Link to="/register" className="text-slate-900 font-medium hover:underline">
                    Tạo tài khoản ngay
                </Link>
            </p>

            <AuthDivider />
            <SocialAuthButtons />

            <p className="text-xs text-slate-500 text-center mt-6 sm:mt-8">
                Dữ liệu của bạn được bảo mật và mã hóa. Chúng tôi không bao giờ chia sẻ thông tin
                của bạn.
            </p>
        </div>
    );
}
