import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSignIn, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/toast/toast";
import { validateEmail } from "../utils/validators/validateEmail";
const LoginForm = () => {
    const navigate = useNavigate();
    const { signIn, setActive } = useSignIn();
    const { isSignedIn } = useUser();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState("");
    const [stayConnected, setStayConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState({
        show: false,
        message: "",
        type: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handlePasswordChange = (e) => {
        const actualPassword = e.target.value.length > password.length
            ? password + e.target.value.slice(-1)
            : password.slice(0, -1);
        setPassword(actualPassword);
        setHiddenPassword("*".repeat(actualPassword.length));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");
        setLoading(true);
        if (!validateEmail(emailAddress).isValid) {
            setEmailError(validateEmail(emailAddress).errorMsg);
        }
        if (!password) {
            setPasswordError("Password is required");
        }
        let input = "";
        let message = "";
        if (emailError === "" && passwordError === "") {
            try {
                const signInResource = await signIn?.create({
                    identifier: emailAddress,
                    password,
                });
                await setActive?.({ session: signInResource?.createdSessionId });
                setLoading(false);
            }
            catch (error) {
                input = error.errors[0].meta.paramName;
                message = error.errors[0].longMessage;
                if (input === "identifier") {
                    setEmailError(message);
                }
                else if (input === "password") {
                    setPasswordError(message);
                }
                setLoading(false);
                setShowToast({
                    show: true,
                    message: message,
                    type: "error",
                });
            }
            finally {
                setLoading(false);
            }
        }
        else {
            setLoading(false);
            setShowToast({
                show: true,
                message: "There's an empty field",
                type: "error",
            });
        }
    };
    useEffect(() => {
        if (isSignedIn) {
            navigate("/products");
        }
    }, [isSignedIn, navigate]);
    return (_jsxs("div", { className: "md:flex min-h-screen", children: [_jsx("div", { className: "flex place-items-center justify-between mx-auto px-[40px] h-[83px]", children: _jsx("a", { href: "/", children: _jsx("div", { className: " bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]" }) }) }), _jsx("div", { className: "w-[90%] justify-self-center md:w-1/2 md:flex items-center", children: _jsxs("div", { children: [_jsx("h1", { className: "md:w-120 font-secondary text-titles font-bold text-4xl", children: "Sign Up" }), _jsx("p", { className: "font-inter font-normal", children: "Lorem ipsum dolor sit amet consectetur." }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "emailAddress", className: "block text-gray-700", children: "E-mail:" }), _jsx("input", { id: "emailAddress", value: emailAddress, onChange: (e) => setEmailAddress(e.target.value), className: "w-full p-2 border border-gray-300 rounded-lg mt-1 text-gray-600", placeholder: "email@example.com" }), emailError && _jsx("p", { className: "text-red-500", children: emailError })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "block", children: "Password:" }), _jsx("input", { id: "password", value: hiddenPassword, onChange: handlePasswordChange, className: "w-full p-2 border border-gray-300 rounded-lg mt-1 text-gray-600" }), passwordError && _jsx("p", { className: "text-red-500", children: passwordError })] }), _jsx("div", { className: "mb-4", children: _jsxs("label", { className: "inline-flex items-center", children: [_jsx("input", { type: "checkbox", checked: stayConnected, onChange: (e) => setStayConnected(e.target.checked), className: "form-checkbox" }), _jsx("span", { className: "ml-2", children: "Stay connected" })] }) }), _jsx("button", { disabled: loading, type: "submit", className: "w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer", children: "Login" }), showToast.show && (_jsx(Toast, { toastProps: showToast, handleRemoveToast: setShowToast }))] })] }) }), _jsx("div", { className: "fixed bottom-0 md:static w-full h-[350px] md:w-1/2 bg-cover bg-center md:p-92", style: { backgroundImage: "url(src/assets/images/plant.png)" } }), showToast.show && (_jsx(Toast, { toastProps: showToast, handleRemoveToast: setShowToast }))] }));
};
export default LoginForm;
