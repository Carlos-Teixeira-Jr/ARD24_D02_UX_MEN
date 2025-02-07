import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductDetails } from "../components/products/productsDetails/productDetails";
import { IFormData } from "../interfaces/CreatePlantInterface";
import { useParams } from "react-router-dom";

export function ProductDetailsPage() {

  const [product, setProduct] = useState<IFormData>({
    name: "",
    subtitle: "",
    category: "",
    price: "",
    discountPercentage: "",
    description: "",
    img: "",
    highlighted: false
  });

  const urlParams = useParams();
  console.log("🚀 ~ ProductDetailsPage ~ product:", product)

  useEffect(() => {
    // const urlParams = useParams();
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${urlParams.id}`, {
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
      <ProductDetails product={product}/>
      <Footer/>
    </>
  );
}
