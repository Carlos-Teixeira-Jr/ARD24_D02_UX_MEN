import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductsList } from "../components/listProducts/productsList";
import { SideMenu } from "../components/listProducts/sideMenu";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export function ListProductsPage() {

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const { isSignedIn } = useUser();

  const navigate = useNavigate();


  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <Header />

      <div className="flex">
        <SideMenu handleSelectedFilters={(filters) => setSelectedFilters(filters)} />

        <ProductsList filters={selectedFilters} />
      </div>

      <Footer />
    </>
  );
}
