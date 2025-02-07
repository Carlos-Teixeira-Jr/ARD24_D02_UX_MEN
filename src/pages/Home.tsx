import TopBannerContainer from "./TopBannerContainer";
import HintsBannerContainer from "./HintsBannerContainer";
import AboutBannerContainer from "./AboutBannerContainer";
import HighlightProductsBanner from "./HighlightProductsBanner";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
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
