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
    }
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
            <Card produto={produto} key={produto.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HighlightProductsBanner;
