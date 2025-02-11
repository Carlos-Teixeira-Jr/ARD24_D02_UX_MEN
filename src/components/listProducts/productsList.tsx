import { useEffect, useState } from "react";
import Card from "../commom/cards/card";
import { IFormData, IFormDataPayload } from "../../interfaces/CreatePlantInterface";
import { useNavigate } from "react-router-dom";

interface ICard {
  filters: string[];
}

export function ProductsList({filters}: ICard) {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState<IFormDataPayload[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFormDataPayload[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/products`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          console.log(data);
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (input) {
      filtered.filter((produto) => produto.name.toLowerCase().includes(input.toLowerCase()));
      filtered = products.filter((produto: IFormDataPayload) => {
        return produto.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    if (filters.length > 0) {
      filtered = filtered.filter((produto: IFormDataPayload) => {
        return filters.includes(produto.category);
      });
    }

    setFilteredProducts(filtered);
  }, [input, products, filters]);

  const handleFilterInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <section className="pt-8 pb-26 px-7 w-full">
      <div className="flex justify-center align-items-center items-center gap-7 mb-7">
        <input
          className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B] w-full"
          value={input}
          placeholder="search by name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFilterInputChange(e.target.value)
          }
        />
        <button className="my-[12px] cursor-pointer text-white  bg-emerald-900 hover:bg-emerald-700 p-3 rounded-lg text-nowrap px-10 py-3" onClick={() => navigate('/products/new')}>
          Add plant
        </button>
      </div>

      <div className="flex flex-wrap gap-17">
        {filteredProducts.map((produto: IFormDataPayload) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}
