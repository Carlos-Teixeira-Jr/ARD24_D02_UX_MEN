import { AboutUsDevsBanner } from "../components/aboutUs/aboutUsDevsBanner";
import { AboutUsTopBanner } from "../components/aboutUs/aboutUsTopBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export function AboutUsPage() {
  return (
    <>
      <Header />

      <AboutUsTopBanner />

      <AboutUsDevsBanner />

      <Footer />
    </>
  );
}
