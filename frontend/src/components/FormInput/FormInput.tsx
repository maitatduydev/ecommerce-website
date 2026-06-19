import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    rightElement?: React.ReactNode;
}

export default function FormInput({ label, error, rightElement, type, ...props }: FormInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <label className="block text-xs sm:text-sm font-medium text-slate-700">
                    {label}
                </label>
                {rightElement}
            </div>

            <div className="relative">
                <input
                    type={inputType}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg border bg-white text-slate-900 placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200
            ${isPassword ? "pr-10" : ""}
            ${error ? "border-red-400 focus:ring-red-500" : "border-slate-200"}
          `}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                    >
                        {showPassword ? <BiHide size={20} /> : <BiShowAlt size={20} />}
                    </button>
                )}
            </div>

            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}
