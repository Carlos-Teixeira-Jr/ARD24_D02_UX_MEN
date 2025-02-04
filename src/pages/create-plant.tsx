import { useState } from "react";
import plantImage from "../assets/images/plant.svg";

export function CreatePlant() {
  const [formData, setFormData] = useState({
    name: "",
    plantSubtitle: "",
    category: "",
    price: 0.0,
    discountPercentage: 0,
    description: "",
    img: "",
    highlighted: false,
  });

  const inputs = [
    {
      key: "name",
      value: formData.name,
      placeholder: "Echinocereus Cactus",
      label: "Name",
    },
    {
      key: "plantSubtitle",
      value: formData.plantSubtitle,
      placeholder: "A majestic addition to your plant collection",
      label: "Plant subtitle",
    },
    {
      key: "category",
      value: formData.category,
      placeholder: "Cactus",
      label: "Category",
    },
    {
      key: "price",
      value: formData.price,
      placeholder: "$139.99",
      label: "Price",
    },
    {
      key: "discountPercentage",
      value: formData.discountPercentage,
      placeholder: "20%",
      label: "Discount percentage",
    },
    {
      key: "description",
      value: formData.description,
      placeholder: "Ladyfinger cactus...",
      label: "Description",
    },
    {
      key: "img",
      value: formData.img,
      placeholder: "Echinocereus Cactus",
      label: "Image URL",
    },
  ];

  return (
    <main className="flex gap-14">
      <div className="flex-1 pt-8.5 pl-16 flex flex-col gap-5">
        <div className="gap-1 flex flex-col w-2/3">
          <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
            Register your plant
          </h1>
          <p className="font-inter text-[#64748B] font-normal">
            Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
            neque.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          {inputs.map((input) => (
            <div key={input.key} className="flex flex-col gap-2">
              <label className="text-[#334155] font-inter font-medium">
                {input.label}
              </label>
              {input.key !== "description" ? (
                <input
                  value={
                    input.value === 0 || input.value === 0.0
                      ? input.placeholder
                      : input.value.toString()
                  }
                  placeholder={input.placeholder}
                  className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B]"
                  onChange={(e) =>
                    setFormData({ ...formData, [input.key]: e.target.value })
                  }
                />
              ) : (
                <textarea
                  value={input.value.toString()}
                  placeholder={input.placeholder}
                  className="border p-3 rounded-lg border-[#E2E8F0] h-48.5 bg-[#F1F5F9]"
                  onChange={(e) =>
                    setFormData({ ...formData, [input.key]: e.target.value })
                  }
                />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="highlighted"
              className="w-6 h-6"
              checked={formData.highlighted}
              onChange={() =>
                setFormData({ ...formData, highlighted: !formData.highlighted })
              }
            />
            <p className="text-[#334155] font-inter font-normal">
              highlight product
            </p>
          </div>

          <button className="bg-primary text-[#FCFCFC] p-3 rounded-lg mt-3 mb-4 font-inter font-semibold">
            Register plant
          </button>
        </form>
      </div>
      <div className="flex-1 bg-gradient-to-b from-black/0 to-black/40">
        <img src={plantImage} className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
