import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { IFormDataPayload } from "../../interfaces/CreatePlantInterface";
import Card from "../commom/cards/card";

const HighlightProductsBanner = () => {
  const [product, setProduct] = useState<IFormDataPayload[]>([]);
  const [actualSlide, setActualSlide] = useState(0);

  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (actualSlide < product.length - 3) {
      sliderRef.current?.slickNext();
    }
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
    afterChange: (index: number) => {
      setActualSlide(index + 2);
    },
  };

  return (
    <div className="mt-12 md:mt-[164px] mb-[96px]">
      <div className="max-w-[90%] md:flex md:justify-between mb-8 mx-[5%] md:mx-[112px]">
        <div className="md:w-[548px]">
          <h1 className="max-w-[90%] md:w-[455px] text-emerald-900 font-secondary font-bold text-3xl md:text-[40px] mb-4">
            This weeks Most Popular and best selling
          </h1>
          <p className="md:w-[500px] font-primary text-[16px] text-slate-500">
            Lorem ipsum dolor sit amet consectetur. Amet a egestas mauris
            faucibus dolor volutpat adipiscing amet ipsum. In.
          </p>
        </div>
        <div className="hidden md:flex mt-auto justify-items-end justify-between w-[104px]">
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
      <div className="overflow-hidden gap-[30px] md:ml-[112px]">
        <Slider ref={sliderRef} {...settings}>
          {product.map(
            (produto) =>
              produto.highlighted && (
                <div className="max-w-[389px] relative md:h-[462px] border-2 border-transparent" key={produto.id}>
                  <div className="w-full h-[200px] md:h-[388px]">
                    <img
                      src={produto.img}
                      className="w-full h-[150px] md:h-[388px] object-cover"
                      alt="Plant image"
                    />
                    <p className="md:absolute right-2 top-2 rounded-full md:w-fit justify-self-end bg-emerald-100 py-[6.48px] px-[12.95px] w-full text-center text-sm  md:text-[16px] border-[1.62px] border-emerald-50 text-emerald-900 font-primary">
                      {produto.category}
                    </p>
                  </div>
                  <div className="mt-[14px] w-[323px]">
                    <h2 className="font-primary font-semibold md:text-2xl text-slate-600">
                      {produto.name}
                    </h2>
                    <div className="md:flex font-primary text-sm md:text[16px] text-slate-500 gap-4">
                      R$
                      {(
                        Number(produto.price) -
                        (Number(produto.price) *
                          Number(produto.discountPercentage)) /
                          100
                      ).toFixed(2)}
                      {Number(produto.discountPercentage) !== 0 && (
                        <p className="text-slate-400 line-through">
                          R${Number(produto.price).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default HighlightProductsBanner;
