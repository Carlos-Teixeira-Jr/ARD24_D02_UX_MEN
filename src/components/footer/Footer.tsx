const Footer = () => {
  return (
    <div className={`bg-emerald-950 bg-[url(/src/assets/images/fundo-footer.svg)] w-full md:h-[422px] pt-5 md:pt-[80px] md:py-[48px] py-5 px-5 md:px-[83px] font-primary text-white`}>
      <div className="flex md:flex-row flex-col justify-between gap-5 md:gap-0">
        <div>
          <h2 className="font-secondary text-[40px] font-bold">Stay Fresh</h2>
          <p className="font-normal text-[16px] mt-4">compassinhos@gmail.com</p>
          <p className="font-normal text-[16px] mt-4">+55 41 99999-9999</p>
        </div>
        <div className="flex gap-[95px] justify-between ">
          <div>
            <h3 className="font-bold text-2xl mb-8">Links</h3>
            <ul>
              <li>
                <a href="/about-us">About us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-8">Community</h3>
            <ul>
              <li className="pb-4 font-normal">
                <a href="https://www.linkedin.com/login/pt" target="_blank">LinkedIn</a>
              </li>
              <li className="pb-4 font-normal">
                <a href="https://www.instagram.com/" target="_blank">Instagran</a>
              </li>
              <li className="font-normal">
                <a href="https://pt-br.facebook.com/" target="_blank">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[48px] place-items-center flex justify-between border-t-emerald-950 border-t-1 pt-[28px]">
        <div className=" bg-[url('./assets/images/GroupPlant.png')] w-[49px] h-[54px]"></div>
        <div className="font-primary">
          <p>Compassinhos ®. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
