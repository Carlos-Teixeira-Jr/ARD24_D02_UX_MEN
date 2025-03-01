import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import plantImage from "../assets/images/plant.svg";
import { validateName } from "../utils/validators/validateName";
import { validateEmail } from "../utils/validators/validateEmail";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useUser } from "@clerk/clerk-react";
import { MobileMenu } from "../components/header/MobileMenu";
export function UserConfigPage() {
    const { user } = useUser();
    const [formData, setFormData] = useState({
        name: user?.firstName + " " + user?.lastName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        currentPassword: "",
        newPassword: "",
    });
    const [formDataErrors, setFormDataErrors] = useState({
        name: "",
        email: "",
        currentPassword: "",
        newPassword: "",
    });
    const [hiddenPassword, setHiddenPassword] = useState("");
    const [hiddenNewPassword, setHiddenNewPassword] = useState("");
    const [showToast, setShowToast] = useState({
        show: false,
        message: "",
        type: "",
    });
    const inputs = [
        {
            key: "name",
            value: formData.name,
            placeholder: "Echinocereus Cactus",
            label: "Name",
            errorMsg: formDataErrors.name,
        },
        {
            key: "email",
            value: formData.email,
            placeholder: "Echinocereus Cactus",
            label: "Email",
            errorMsg: formDataErrors.email,
        },
        {
            key: "currentPassword",
            value: hiddenPassword,
            placeholder: "",
            label: "Current password",
            errorMsg: formDataErrors.currentPassword,
        },
        {
            key: "newPassword",
            value: hiddenNewPassword,
            placeholder: "",
            label: "New password",
            errorMsg: formDataErrors.newPassword,
        },
    ];
    const handlePasswordChange = (e) => {
        const actualPassword = e.target.value.length > formData.currentPassword.length
            ? formData.currentPassword + e.target.value.slice(-1)
            : formData.currentPassword.slice(0, -1);
        setFormData({ ...formData, currentPassword: actualPassword });
        setHiddenPassword("*".repeat(actualPassword.length));
    };
    const handleNewPasswordChange = (e) => {
        const actualPassword = e.target.value.length > formData.newPassword.length
            ? formData.newPassword + e.target.value.slice(-1)
            : formData.newPassword.slice(0, -1);
        setFormData({ ...formData, newPassword: actualPassword });
        setHiddenNewPassword("*".repeat(actualPassword.length));
    };
    useEffect(() => {
        if (showToast.show) {
            const timer = setTimeout(() => {
                setShowToast((prev) => ({
                    ...prev,
                    show: false,
                }));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast.show]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormDataErrors({
            name: "",
            email: "",
            currentPassword: "",
            newPassword: "",
        });
        let newFormDataErrors = {
            name: "",
            email: "",
            currentPassword: "",
            newPassword: "",
        };
        if (!validateName(formData.name).isValid) {
            newFormDataErrors.name = validateName(formData.name).errorMsg;
            setFormDataErrors({
                ...newFormDataErrors,
                name: validateName(formData.name).errorMsg,
            });
        }
        if (!validateEmail(formData.email).isValid) {
            newFormDataErrors.email = validateEmail(formData.email).errorMsg;
            setFormDataErrors({
                ...newFormDataErrors,
                email: validateEmail(formData.email).errorMsg,
            });
        }
        if (!formData.newPassword && !formData.currentPassword) {
            if (!validatePassword(formData.currentPassword).isValid) {
                newFormDataErrors.currentPassword = validatePassword(formData.currentPassword).errorMsg;
                setFormDataErrors({
                    ...newFormDataErrors,
                    currentPassword: validatePassword(formData.currentPassword).errorMsg,
                });
            }
        }
        if (Object.values(newFormDataErrors).some((error) => error !== "")) {
            setFormDataErrors(newFormDataErrors);
            return;
        }
        try {
            await user?.update({
                firstName: formData.name.split(" ")[0],
                lastName: formData.name.split(" ")[1],
            });
            if (formData.currentPassword && formData.newPassword) {
                await user?.updatePassword({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                });
            }
            if (user?.primaryEmailAddress?.emailAddress) {
                const newEmail = await user?.createEmailAddress({
                    email: formData.email,
                });
                await newEmail?.prepareVerification({
                    strategy: "email_link",
                    redirectUrl: "/",
                });
                user?.update({
                    primaryEmailAddressId: newEmail?.id,
                });
                setShowToast({
                    show: true,
                    message: "Success on editing user. An verification link has been sent to your email",
                    type: "success",
                });
            }
            else {
                setShowToast({
                    show: true,
                    message: "Success on editing user",
                    type: "success",
                });
            }
        }
        catch (error) {
            console.error(error);
            setShowToast({
                show: true,
                message: "Error on editing user",
                type: "error",
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(MobileMenu, {}), _jsxs("main", { className: "flex md:flex-row flex-col gap-5 md:gap-14", children: [_jsxs("div", { className: "flex-1 md:pt-8.5 md:pl-16 p-5 flex flex-col gap-5", children: [_jsxs("div", { className: "gap-1 flex flex-col w-2/3", children: [_jsx("h1", { className: "font-secondary text-primary text-titles font-bold text-4xl", children: "User config" }), _jsx("p", { className: "font-inter text-[#64748B] font-normal", children: "Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa neque." })] }), _jsxs("form", { className: "flex flex-col gap-5", onSubmit: (e) => handleSubmit(e), children: [inputs.map((input) => (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { htmlFor: input.key, className: "font-inter text-[#475569] font-semibold", children: input.label }), _jsx("input", { type: "text", placeholder: input.placeholder, value: input.value, className: "border p-3 rounded-lg border-[#E2E8F0] h-11.5 text-[#64748B]", onChange: input.key === "currentPassword"
                                                    ? handlePasswordChange
                                                    : input.key === "newPassword"
                                                        ? handleNewPasswordChange
                                                        : (e) => setFormData({
                                                            ...formData,
                                                            [input.key]: e.target.value,
                                                        }) }), input.errorMsg && (_jsx("p", { className: "font-inter text-[#DC2626] font-semibold", children: input.errorMsg }))] }, input.key))), _jsx("button", { type: "submit", className: "bg-primary hover:bg-emerald-700 cursor-pointer text-white font-inter font-semibold py-2.5 rounded-md", children: "Edit account" })] })] }), _jsx("div", { className: "flex-1 bg-gradient-to-b from-black/0 to-black/40", children: _jsx("img", { src: plantImage, className: "w-full h-full object-cover" }) }), showToast.show && (_jsx(Toast, { toastProps: showToast, handleRemoveToast: setShowToast }))] }), _jsx(Footer, {})] }));
}
