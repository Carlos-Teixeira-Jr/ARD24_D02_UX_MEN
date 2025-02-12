import { AboutUsDevsBanner } from "../components/aboutUs/aboutUsDevsBanner";
import { AboutUsTopBanner } from "../components/aboutUs/aboutUsTopBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";

export function AboutUsPage() {
  return (
    <>
      <Header />

      <MobileMenu/>

      <AboutUsTopBanner />

      <AboutUsDevsBanner />

      <Footer />
    </>
  );
}
