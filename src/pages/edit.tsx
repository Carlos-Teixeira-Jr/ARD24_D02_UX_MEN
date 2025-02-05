import { ProductForm } from "../components/productForm";
import { IFormDataPayload } from "../interfaces/CreatePlantInterface";


export function EditProductPage() {

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

      console.log("entrou");

      if (response.ok) {
        // Mensagem de sucesso;
        console.log("Success on editing product!");
      } else {
        // Mensagem de erro
        console.error("Error on editing product", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return <ProductForm onSubmit={handleEditProduct} mode={"edit"}/>
}