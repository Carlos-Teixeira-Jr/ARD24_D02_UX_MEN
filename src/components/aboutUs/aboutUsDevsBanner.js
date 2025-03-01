import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import carlosPicture from "../../assets/images/devs/carlos-dev.jpeg";
import bernardoPicture from "../../assets/images/devs/bernardo-dev.png";
import gianPicture from "../../assets/images/devs/gian-dev.png";
import mariaPicture from "../../assets/images/devs/maria-dev.jpg";
import gabrielPicture from "../../assets/images/devs/gabriel-dev.jpg";
import { useEffect, useState } from "react";
export function AboutUsDevsBanner() {
    const [devCardText, setDevCardText] = useState({
        key: "",
        text: "",
        name: ""
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const devsCards = [
        {
            key: "carlos",
            name: "Carlos Teixeira",
            role: "Frontend Developer",
            img: carlosPicture,
            info: "I am a motivated fullstack developer with experience in JavaScript and its frameworks. I build scalable, high-performance web applications using React, Node.js, TypeScript, and databases. I’m eager to take on challenging projects and grow professionally.",
        },
        {
            key: "gian",
            name: "Gian Vieceli",
            role: "Frontend Developer",
            img: gianPicture,
            info: "Front-end Developer passionate about building efficient and elegant solutions. With experience in JavaScript, TypeScript, React, and Node.js, focused on writing clean and scalable code. Enjoys tackling challenges and solving problems creatively, always aiming to improve skills and deliver value through technology.",
        },
        {
            key: "maria",
            name: "Maria Bernardes",
            role: "Frontend Developer",
            img: mariaPicture,
            info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
        },
        {
            key: "bernardo",
            name: "Bernardo Pioner",
            role: "Frontend Developer",
            img: bernardoPicture,
            info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
        },
        {
            key: "grabriel",
            name: "Gabriel Barela",
            role: "Frontend Developer",
            img: gabrielPicture,
            info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
        },
    ];
    const handleIconClick = (key) => {
        if (devCardText.key === key) {
            setDevCardText({
                key: "",
                text: "",
                name: "",
            });
        }
        else {
            setDevCardText({
                key: key,
                text: devsCards.find((card) => card.key === key)?.info || "",
                name: devsCards.find((card) => card.key === key)?.name || "",
            });
        }
    };
    return (_jsxs("section", { className: "flex flex-col justify-center items-center md:my-36 my-5 px-5 md:px-28", children: [_jsx("h1", { className: "font-secondary text-primary text-titles font-bold text-4xl", children: "Know our web developers" }), _jsx("p", { className: "font-inter text-[#64748B] font-normal md:px-64 mt-4", children: "Temos uma equipe de desenvolvedores frontend criativos e dedicados, sempre em busca de solu\u00E7\u00F5es inovadoras para enfrentar cada desafio que surge." }), _jsx("div", { className: "flex md:flex-row flex-col justify-center items-center mt-5 md:mt-20 md:gap-10", children: devsCards.map((dev) => (_jsxs("div", { className: "flex flex-col justify-center items-center gap-2 cursor-pointer hover:shadow-2xl ease-in-out duration-200 p-4 rounded-lg", onClick: () => handleIconClick(dev.key), children: [_jsx("img", { src: dev.img, alt: dev.name, className: "w-40 h-40 rounded-full object-cover cursor-pointer shrink-0" }), _jsx("p", { className: "font-secondary text-primary text-titles font-bold text-xl cursor-pointer transform hover:scale-110 ease-in-out duration-100", children: dev.name }), _jsx("p", { className: "font-inter text-[#64748B] font-semibold", children: dev.role }), isMobile && dev.key === devCardText.key ? (_jsxs("div", { className: "flex flex-col gap-2 justify-center items-center md:w-1/2 my-5 md:my-8 min-h-32", children: [_jsx("label", { className: "text-gray-700 font-bold text-2xl", children: devCardText.name }), _jsx("p", { className: `font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${devCardText.text ? "opacity-100" : "opacity-0"}`, children: devCardText.text })] })) : null] }))) }), !isMobile && (_jsxs("div", { className: "flex flex-col gap-2 justify-center items-center w-1/2 my-8 min-h-32", children: [_jsx("label", { className: "text-gray-700 font-bold text-2xl", children: devCardText.name }), _jsx("p", { className: `font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${devCardText.text ? "opacity-100" : "opacity-0"}`, children: devCardText.text })] }))] }));
}
