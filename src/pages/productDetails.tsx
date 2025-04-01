import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductDetails } from "../components/products/productsDetails/productDetails";
import { IFormData } from "../interfaces/CreatePlantInterface";
import { useParams } from "react-router-dom";
import { MobileMenu } from "../components/header/MobileMenu";
import { API_URL } from "@/api/api";

export function ProductDetailsPage() {

  const [product, setProduct] = useState<IFormData>({
    name: "",
    subtitle: "",
    category: "",
    price: 0.0,
    discountPercentage: 0,
    description: "",
    img: "",
    highlighted: false
  });

  const urlParams = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/products/${urlParams.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          response
            .json()
            .then((data) => {
              setProduct(data);
            })
            .catch((error) => {
              console.error(error);
            })
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MobileMenu/>
      <ProductDetails product={product}/>
      <Footer/>
    </>
  );
}
