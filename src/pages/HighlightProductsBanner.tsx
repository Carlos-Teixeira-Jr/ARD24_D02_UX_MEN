import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { IFormDataPayload } from "../interfaces/CreatePlantInterface";

const HighlightProductsBanner = () => {
  const [product, setProduct] = useState<IFormDataPayload[]>([]);

  let sliderRef = useRef<Slider | null>(null);
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
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
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

  return (
    <div className="mt-[164px] mb-[96px] ml-[112px]">
      <div className="flex justify-between mb-8 mr-[112px]">
        <div className="w-[548px]">
          <h1 className="w-[455px] text-emerald-900 font-secondary font-bold text-[40px] mb-4">
            This weeks Most Popular and best selling
          </h1>
          <p className="w-[500px] font-primary text-[16px] text-slate-500">
            Lorem ipsum dolor sit amet consectetur. Amet a egestas mauris
            faucibus dolor volutpat adipiscing amet ipsum. In.
          </p>
        </div>
        <div className="flex mt-auto justify-between w-[104px]">
          <button
            className="cursor-pointer w-10 h-10 bg-[url('./assets/images/left.svg')] bg-center bg-no-repeat"
            onClick={previous}
          ></button>
          <button
            className="cursor-pointer w-10 h-10 bg-[url('./assets/images/right.svg')] bg-center bg-no-repeat"
            onClick={next}
          ></button>
        </div>
      </div>
      <div className="overflow-hidden gap-[30px]">
        <Slider ref={sliderRef} {...settings}>
          {product.map((produto) => (
            <div className="max-w-[389px] relative min-w-[389px] h-[462px]">
              <div className={`w-full h-[388px] bg-center bg-cover`}>
                <img
                  src={produto.img}
                  className="w-full h-[388px]"
                  alt="Plant image"
                />
                <p className="absolute right-2 top-2 rounded-full w-fit justify-self-end bg-emerald-100 py-[6.48px] px-[12.95px] border-[1.62px] border-emerald-50 text-emerald-900 font-primary">
                  {produto.category}
                </p>
              </div>
              <div className="mt-[14px] w-[323px]">
                <h2 className="font-primary font-semibold text-2xl text-slate-600">
                  {produto.name}
                </h2>
                <p className="flex font-primary text-slate-500 gap-4">
                  R$
                  {(
                    produto.price -
                    (produto.price * produto.discountPercentage) / 100
                  ).toFixed(2)}
                  {produto.discountPercentage !== 0 && (
                    <p className="text-slate-400 line-through">
                      R${produto.price}
                    </p>
                  )}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HighlightProductsBanner;
