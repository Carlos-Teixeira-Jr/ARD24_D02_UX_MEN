import { useState } from "react";
import { ProductForm } from "../components/registerProduct/productForm";
import { IFormDataPayload } from "../interfaces/CreatePlantInterface";

export function EditProductPage() {
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleEditProduct = async (formData: IFormDataPayload) => {
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
        })
      } else {
        console.error("Error on editing product", response.statusText);
        setShowToast({
          show: true,
          message: "Error on editing product",
          type: "error",
        })
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <ProductForm onSubmit={handleEditProduct} mode={"edit"} />;
}
