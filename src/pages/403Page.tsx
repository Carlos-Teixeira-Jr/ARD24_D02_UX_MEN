import { ForbiddenPageContainer } from "../components/403/403PageContainer";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";


export function ForbiddenPage() {
  return (
    <>
    <Header/>
    <MobileMenu/>
    <ForbiddenPageContainer/>
    <Footer/>
    </>

  )
}