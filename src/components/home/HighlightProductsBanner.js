import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const HighlightProductsBanner = () => {
    const [product, setProduct] = useState([]);
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                }
                else {
                    console.error("Error fetching data:", response.statusText);
                }
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3.1,
        slidesToScroll: 1,
    };
    return (_jsxs("div", { className: "mt-12 md:mt-[164px] mb-[96px]", children: [_jsxs("div", { className: "max-w-[90%] md:flex md:justify-between mb-8 mx-[5%] md:mx-[112px]", children: [_jsxs("div", { className: "md:w-[548px]", children: [_jsx("h1", { className: "md:w-[455px] font-secondary font-bold text-3xl md:text-[40px] mb-4", children: "This weeks Most Popular and best selling" }), _jsx("p", { className: "md:w-[500px] font-primary text-[16px]", children: "Lorem ipsum dolor sit amet consectetur. Amet a egestas mauris faucibus dolor volutpat adipiscing amet ipsum. In." })] }), _jsxs("div", { className: "hidden md:flex mt-auto justify-items-end justify-between w-[104px]", children: [_jsx("button", { className: "cursor-pointer w-10 h-10 bg-[url('./assets/images/left.svg')] bg-center bg-no-repeat", onClick: previous }), _jsx("button", { className: "cursor-pointer w-10 h-10 bg-[url('./assets/images/right.svg')] bg-center bg-no-repeat", onClick: next })] })] }), _jsx("div", { className: "overflow-hidden gap-[30px] md:ml-[112px]", children: _jsx(Slider, { ref: sliderRef, ...settings, children: product.map((produto) => produto.highlighted && (_jsxs("div", { className: "max-w-[389px] relative md:h-[462px] border-2 border-transparent ", children: [_jsxs("div", { className: "w-full md:h-[388px]", children: [_jsx("img", { src: produto.img, className: "w-full h-[150px] md:h-[388px] object-cover", alt: "Plant image" }), _jsx("p", { className: "md:absolute mt-2 md:mt-0 right-2 top-2 rounded-full md:w-fit justify-self-end bg-emerald-100 py-[6.48px] md:px-[12.95px] w-full text-center text-sm  md:text-[16px] border-[1.62px] border-emerald-50 text-emerald-900 font-primary", children: produto.category })] }), _jsxs("div", { className: "mt-[14px] w-[323px]", children: [_jsx(Link, { to: `/products/${produto.id}`, children: _jsx("h2", { className: "font-primary hover:underline font-semibold md:text-2xl text-slate-600", children: produto.name }) }), _jsxs("p", { className: "md:flex font-primary text-sm md:text[16px] text-slate-500 gap-4", children: ["R$", (Number(produto.price) -
                                                (Number(produto.price) *
                                                    Number(produto.discountPercentage)) /
                                                    100).toFixed(2), Number(produto.discountPercentage) !== 0 && (_jsxs("p", { className: "text-slate-400 line-through", children: ["R$", Number(produto.price).toFixed(2)] }))] })] })] }))) }) })] }));
};
export default HighlightProductsBanner;
