import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IFormDataPayload } from "../../interfaces/CreatePlantInterface";
import { API_URL } from "@/api/api";

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
        const response = await fetch(`${API_URL}/products`, {
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
    <div className="mt-12 md:mt-[164px] mb-[96px]">
      <div className="max-w-[90%] md:flex md:justify-between mb-8 mx-[5%] md:mx-[112px]">
        <div className="md:w-[548px]">
          <h1 className="md:w-[455px] font-secondary font-bold text-3xl md:text-[40px] mb-4">
            This weeks Most Popular and best selling
          </h1>
          <p className="md:w-[500px] font-primary text-[16px]">
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
                <div className="max-w-[389px] relative md:h-[462px] border-2 border-transparent ">
                  <div className="w-full md:h-[388px]">
                    <img
                      src={produto.img}
                      className="w-full h-[150px] md:h-[388px] object-cover"
                      alt="Plant image"
                    />
                    <p className="md:absolute mt-2 md:mt-0 right-2 top-2 rounded-full md:w-fit justify-self-end bg-emerald-100 py-[6.48px] md:px-[12.95px] w-full text-center text-sm  md:text-[16px] border-[1.62px] border-emerald-50 text-emerald-900 font-primary">
                      {produto.category}
                    </p>
                  </div>
                  <div className="mt-[14px] w-[323px]">
                    <Link to={`/products/${produto.id}`}>
                      <h2 className="font-primary hover:underline font-semibold md:text-2xl text-slate-600">
                        {produto.name}
                      </h2>
                    </Link>
                    <p className="md:flex font-primary text-sm md:text[16px] text-slate-500 gap-4">
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
                    </p>
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
