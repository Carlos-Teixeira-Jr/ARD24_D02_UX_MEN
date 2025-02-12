import TopBannerContainer from "../components/home/TopBannerContainer";
import HintsBannerContainer from "../components/home/HintsBannerContainer";
import AboutBannerContainer from "../components/home/AboutBannerContainer";
import HighlightProductsBanner from "../components/home/HighlightProductsBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";

const Home = () => {
  return (
    <div>
      <MobileMenu />
      <Header />
      <TopBannerContainer />
      <HintsBannerContainer />
      <AboutBannerContainer />
      <HighlightProductsBanner />
      <Footer />
    </div>
  );
};

export default Home;
