import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductsList } from "../components/listProducts/productsList";
import { SideMenu } from "../components/listProducts/sideMenu";

export function ListProductsPage() {

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
