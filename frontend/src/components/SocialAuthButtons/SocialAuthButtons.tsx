import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

interface SocialAuthButtonsProps {
    onGoogleClick?: () => void;
    onFacebookClick?: () => void;
}

export default function SocialAuthButtons({
    onGoogleClick,
    onFacebookClick,
}: SocialAuthButtonsProps) {
    const btnClass = `flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3
    text-xs sm:text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer`;

    return (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button type="button" className={btnClass} onClick={onGoogleClick}>
                <FcGoogle size={20} />
                <span className="text-slate-700 font-medium hidden sm:inline">Google</span>
            </button>
            <button type="button" className={btnClass} onClick={onFacebookClick}>
                <FaFacebook size={20} color="#1877F2" />
                <span className="text-slate-700 font-medium hidden sm:inline">Facebook</span>
            </button>
        </div>
    );
}
