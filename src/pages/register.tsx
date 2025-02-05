import { IFormDataPayload } from "../interfaces/CreatePlantInterface";
import { ProductForm } from "../components/productForm";

export function RegisterProductPage() {
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

      console.log("entrou");

      if (response.ok) {
        // Mensagem de sucesso;
        console.log("Success on creating product!");
      } else {
        // Mensagem de erro
        console.error("Error on creating product", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <ProductForm onSubmit={handleRegisterProduct} mode={"create"} />;
}
