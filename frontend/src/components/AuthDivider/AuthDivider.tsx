export default function AuthDivider({ text = "Hoặc tiếp tục với" }: { text?: string }) {
    return (
        <div className="relative my-6 sm:my-8">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-white text-slate-500">{text}</span>
            </div>
        </div>
    );
}
