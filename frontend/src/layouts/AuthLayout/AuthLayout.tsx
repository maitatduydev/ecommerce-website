import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
            <Outlet />
        </div>
    );
}
