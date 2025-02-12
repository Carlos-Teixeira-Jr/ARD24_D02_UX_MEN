import { PageNotFoundContainer } from "../components/404/pageNotFoundContainer";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";

export function PageNotFoundPage() {
  return (
    <>
      <Header />
      <MobileMenu/>
      <PageNotFoundContainer/>
      <Footer />
    </>
  );
}
