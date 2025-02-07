import { useState } from "react";
import { ProductForm } from "../components/registerProduct/productForm";
import { IFormDataPayload } from "../interfaces/CreatePlantInterface";
import { Toast } from "../components/toast/toast";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

export function RegisterProductPage() {
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleRegisterProduct = async (formData: IFormDataPayload) => {
    const formDataPayload: IFormDataPayload = {
      name: formData.name,
      subtitle: formData.subtitle,
      category: formData.category,
      price: formData.price,
      discountPercentage: formData.discountPercentage,
      description: formData.description,
      img: formData.img,
      highlighted: formData.highlighted,
    };

    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataPayload),
      });

      if (response.ok) {
        setShowToast({
          show: true,
          message: "Success on creating product!",
          type: "success",
        });
        navigate("/products");
      } else {
        setShowToast({
          show: true,
          message: "Error on creating product",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setShowToast({
        show: true,
        message: "Error on creating product",
        type: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <ProductForm onSubmit={handleRegisterProduct} mode={"create"} />

      {showToast.show && (
        <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
      )}

      <Footer/>
    </>
  );
}
