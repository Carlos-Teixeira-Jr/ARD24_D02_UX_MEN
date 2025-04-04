import { Link } from "react-router-dom";

const AboutBannerContainer = () => {
  return (
    <div className="inline-block md:grid grid-cols-2 md:gap-[106px] md:mx-[112px] mt-12 md:mt-[104px]">
      <div className="grid grid-cols-2 md:col-span-1 gap-10">
        <div className="hidden md:grid w-[237.5px] h-[697px] bg-[url('./assets/images/about1.png')]"></div>
        <div className="hidden md:grid w-[227.5px] h-[697px] bg-[url('./assets/images/about2.png')]"></div>
      </div>
      <div className="md:col-span-1 justify-items-center md:justify-items-normal">
        <div className="w-full md:w-[555px] h-[172px] bg-[url('./assets/images/about3.png')]"></div>
        <p className="my-8 md:text-left w-[90%] font-primary">
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. But we don't stop there! We believe that knowledge is the key
          to a thriving garden, so we offer a wealth of information and
          resources on gardening techniques, plant care tips, and landscaping
          ideas. Whether you're a seasoned gardener or just starting your green
          journey, our goal is to inspire and support you every step of the way.
          Get ready to explore our virtual garden and discover the joys of
          gardening with us!
        </p>
        <Link to="/products">
          <button className="px-30 md:px-10 py-3 rounded-[8px] text-white bg-emerald-900 hover:bg-emerald-700 font-semibold cursor-pointer">
            See more photos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutBannerContainer;
