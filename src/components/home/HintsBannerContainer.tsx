const HintsBannerContainer = () => {
  return (
    <div className="md:mx-[112px] justify-items-center mt-12 md:mt-[148px]">
      <div className="text-center mb-20 w-[90%] md:w-auto">
        <h1 className="font-secondary font-bold text-2xl md:text-[40px] mb-4">
          Steps to take care of your plants
        </h1>
        <p className="font-normal font-primary md:w-[682px] mx-[5%] md:mx-auto">
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </div>
      <div className="grid grid-cols-1 md:flex gap-12 w-[90%] md:w-full">
        <div className="md:w-[374px] text-center my-4">
          <div className="mx-auto h-[72px] w-[72px] bg-emerald-900 rounded-full bg-[url('./assets/images/gota.svg')] bg-center bg-no-repeat"></div>
          <div>
            <h3 className="font-primary font-bold text-2xl my-6">Watering</h3>
            <p className="font-primary">
              water your plants when the top inch of soil feels dry to the
              touch. Avoid overwatering, as it can lead to root dehydration.
            </p>
          </div>
        </div>
        <div className="md:w-[374px] text-center my-4">
          <div className="mx-auto h-[72px] w-[72px] bg-emerald-900 rounded-full bg-[url('./assets/images/sun.svg')] bg-center bg-no-repeat"></div>
          <div>
            <h3 className="font-primary font-bold text-2xl my-6">Sunlight</h3>
            <p className="font-primary">
              Most plants need adequate sunlight to thrive. Place your plants in
              areas that receive the appropriate amount of light for their
              specific needs
            </p>
          </div>
        </div>
        <div className="md:w-[374px] text-center my-4">
          <div className="mx-auto h-[72px] w-[72px] bg-emerald-900 rounded-full bg-[url('./assets/images/bag.svg')] bg-center bg-no-repeat"></div>
          <div>
            <h3 className="font-primary font-bold text-2xl my-6">
              Nutrients and Fertilizing
            </h3>
            <p className="font-primary">
              Choose a suitable fertilizer based on the specific needs of your
              plants, whether it's a balanced or specialized formula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HintsBannerContainer;
