import { useEffect, useState } from "react";
import { ProductForm } from "../components/registerProduct/productForm";
import {
  IFormData,
  IFormDataPayload,
} from "../interfaces/CreatePlantInterface";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Toast } from "../components/toast/toast";

export function EditProductPage() {
  const [productData, setProductData] = useState<IFormDataPayload>({
    name: "",
    subtitle: "",
    category: "",
    price: "",
    discountPercentage: "",
    description: "",
    img: "",
    highlighted: false,
  });

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    const productId = window.location.pathname.split("/")[2];
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/products/${productId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Error fetching data:", response.statusText);
          setShowToast({
            show: true,
            message: "Error fetching data",
            type: "error",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleEditProduct = async (formData: IFormData) => {
    const formDataPayload: IFormData = {
      name: formData.name,
      subtitle: formData.subtitle,
      category: formData.category,
      price: Number(formData.price),
      discountPercentage: Number(formData.discountPercentage),
      description: formData.description,
      img: formData.img,
      highlighted: formData.highlighted,
    };

    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataPayload),
      });

      if (response.ok) {
        console.log("Success on editing product!");
        setShowToast({
          show: true,
          message: "Success on editing product!",
          type: "success",
        });
      } else {
        console.error("Error on editing product", response.statusText);
        setShowToast({
          show: true,
          message: "Error on editing product",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <ProductForm
        productData={productData}
        onSubmit={handleEditProduct}
        mode={"edit"}
      />
      {showToast.show && (
        <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
      )}
      <Footer />
    </div>
  );
}
