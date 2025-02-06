const HighlightProductsBanner = () => {
  return (
    <div className="mt-[164px] mb-[96px] mx-[112px]">
      <div className="flex justify-between mb-8">
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
          <button className="cursor-pointer w-10 h-10 bg-[url('./assets/images/left.svg')] bg-center bg-no-repeat"></button>
          <button className="cursor-pointer w-10 h-10 bg-[url('./assets/images/right.svg')] bg-center bg-no-repeat"></button>
        </div>
      </div>
      <div>carrocel de lagrimas</div>
    </div>
  );
};

export default HighlightProductsBanner;
