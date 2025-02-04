// import { Routes ,Route, Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-emerald-950 bg-[url(./assets/images/fundo-footer.svg)] w-full h-[422px] pt-[80px] px-[83px]">
      <div className="flex flex-wrap">
        <div>
          <h2>Stay Fresh</h2>
          <p>compassinhos@gmail.com</p>
          <p>+55 41 99999-9999</p>
        </div>
        <div>
          <div>
            <h4>Links</h4>
            <a href="#">About us</a>
            {/* <Link to="/aboult-us"></Link> */}
          </div>
          <div>
            <h4>Community</h4>
            <p>LinkedIn</p>
            <p>Instagran</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-amber-200 bg-[url('../assets/images/GroupPlant.png')] w-[49px] h-[54px]"></div>
        <div>
          <p>Compassinhos ®. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
