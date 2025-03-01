import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSearchParams } from "react-router";
import { VerifiedEmailPage } from "./verifiedEmail";
export function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const __clerk_status = searchParams.get("__clerk_status");
    if (__clerk_status === "verified") {
        return (_jsx(VerifiedEmailPage, {}));
    }
    if (__clerk_status === "expired") {
        return _jsx("h2", { children: "The verification link has expired" });
    }
    if (__clerk_status === "failed") {
        return _jsx("h2", { children: "There was an error verifying your email" });
    }
    if (__clerk_status) {
        return _jsx("h2", { children: "There was an error verifying your email" });
    }
    return (_jsxs("main", { className: "flex flex-col justify-center items-center h-screen gap-5", children: [_jsx("h1", { className: "text-xl font-primary font-normal text-gray-500 px-5 md:px-0 md:w-1/3", children: "An email verification link has been sent to your email. Please check your inbox and click on the verification button to access your account." }), _jsx("h2", { className: "font-primary text-primary text-2xl font-semibold", children: "Aguardando" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "animate-bounce rounded-full h-5 w-5 border-2 border-emerald-900 bg-emerald-900" }), _jsx("div", { className: "animate-bounce rounded-full h-5 w-5 border-2 border-emerald-900 bg-emerald-900 motion-safe:[animation-delay:200ms]" }), _jsx("div", { className: "animate-bounce rounded-full h-5 w-5 border-2 border-emerald-900 bg-emerald-900 motion-safe:[animation-delay:400ms]" })] })] }));
}
