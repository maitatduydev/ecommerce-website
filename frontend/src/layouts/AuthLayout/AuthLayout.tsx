import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function AuthLayout() {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            <Header />

            <div className="flex-1 w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-slate-50 rounded-full opacity-30 blur-3xl -mr-24 sm:-mr-32 lg:-mr-48 -mt-24 sm:-mt-32 lg:-mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-slate-50 rounded-full opacity-30 blur-3xl -ml-24 sm:-ml-32 lg:-ml-48 -mb-24 sm:-mb-32 lg:-mb-48"></div>
                </div>

                <div className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
}
