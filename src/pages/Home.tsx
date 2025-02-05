import TopBannerContainer from "./TopBannerContainer";
import HintsBannerContainer from "./HintsBannerContainer";
import AboutBannerContainer from "./AboutBannerContainer";
import HighlightProductsBanner from "./HighlightProductsBanner";

const Home = () => {
  return (
    <div>
      <TopBannerContainer />
      <HintsBannerContainer />
      <AboutBannerContainer />
      <HighlightProductsBanner />
    </div>
  );
};

export default Home;
