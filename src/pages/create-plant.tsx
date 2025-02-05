import { useMemo, useState } from "react";
import plantImage from "../assets/images/plant.svg";
import { validateName } from "../utils/validators/validateName";
import { PlantCategory } from "../interfaces/CreatePlantInterface";
import { formatPrice } from "../utils/masks/formatPrice";
import { formatDiscount } from "../utils/masks/formatDiscount";
import { validatePrice } from "../utils/validators/validatePrice";
import { validateDiscount } from "../utils/validators/validateDiscount";
// import { SignIn } from "@clerk/clerk-react";

export function CreatePlant() {
  const [formData, setFormData] = useState({
    name: "",
    plantSubtitle: "",
    category: "",
    price: "",
    discountPercentage: "",
    description: "",
    img: "",
    highlighted: false,
  });

  const [formDataErrors, setFormDataErrors] = useState({
    name: "",
    plantSubtitle: "",
    category: "",
    price: "",
    discountPercentage: "",
    description: "",
    img: "",
  });
  console.log("🚀 ~ CreatePlant ~ formDataErrors:", formDataErrors)

  const inputs = [
    {
      key: "name",
      value: formData.name,
      placeholder: "Echinocereus Cactus",
      label: "Name",
      errorMsg: formDataErrors.name,
    },
    {
      key: "plantSubtitle",
      value: formData.plantSubtitle,
      placeholder: "A majestic addition to your plant collection",
      label: "Plant subtitle",
      errorMsg: formDataErrors.plantSubtitle,
    },
    {
      key: "category",
      value: formData.category,
      placeholder: "Cactus",
      label: "Category",
      errorMsg: formDataErrors.category,
    },
    {
      key: "price",
      value: formData.price,
      placeholder: "$",
      label: "Price",
      errorMsg: formDataErrors.price,
    },
    {
      key: "discountPercentage",
      value: formData.discountPercentage,
      placeholder: "%",
      label: "Discount percentage",
      errorMsg: formDataErrors.discountPercentage,
    },
    {
      key: "description",
      value: formData.description,
      placeholder: "Ladyfinger cactus...",
      label: "Description",
      errorMsg: formDataErrors.description,
    },
    {
      key: "img",
      value: formData.img,
      placeholder: "Echinocereus Cactus",
      label: "Image URL",
      errorMsg: formDataErrors.img,
    },
  ];

  const categorySelectOptions = useMemo(
    () =>
      Object.values(PlantCategory).map((category) => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        value: category,
      })),
    []
  );

  const handleSubmit = () => {
    setFormDataErrors({
      name: "",
      plantSubtitle: "",
      category: "",
      price: "",
      discountPercentage: "",
      description: "",
      img: "",
    });

    let newFormDataErrors = {
      name: "",
      plantSubtitle: "",
      category: "",
      price: "",
      discountPercentage: "",
      description: "",
      img: "",
    };

    if (!validateName(formData.name).isValid) {
      newFormDataErrors.name = validateName(formData.name).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        name: validateName(formData.name).errorMsg,
      });
    }
    if (!validateName(formData.plantSubtitle).isValid) {
      newFormDataErrors.plantSubtitle = validateName(
        formData.plantSubtitle
      ).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        plantSubtitle: validateName(formData.plantSubtitle).errorMsg,
      });
    }
    if (formData.category === "") {
      newFormDataErrors.category = "Select category";
      setFormDataErrors({
        ...newFormDataErrors,
        category: "Select category",
      });
    }
    if (!validatePrice(formData.price).isValid) {
      console.log("entrou no erro de preço")
      newFormDataErrors.price = validatePrice(formData.price).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        price: validatePrice(formData.price).errorMsg,
      });
    }
    if (!validateDiscount(formData.discountPercentage).isValid) {
      if (!validateDiscount(formData.discountPercentage).isValid) {
        newFormDataErrors.discountPercentage = validateDiscount(
          formData.discountPercentage
        ).errorMsg;
        setFormDataErrors({
          ...newFormDataErrors,
          discountPercentage: validateDiscount(formData.discountPercentage)
            .errorMsg,
        });
      }
    }
    if (formData.description === "") {
      newFormDataErrors.description = "Enter description";
      setFormDataErrors({
        ...newFormDataErrors,
        description: "Enter description",
      });
    }
    if (formData.img === "") {
      newFormDataErrors.img = "Enter image URL";
      setFormDataErrors({
        ...newFormDataErrors,
        img: "Enter image URL",
      });
    }

    if(Object.values(newFormDataErrors).some(error => error !== "")) {
      const formDataPayload = {
        name: formData.name,
        subtitle: formData.plantSubtitle,
        category: formData.category,
        price: formData.price,
        discountPercentage: formData.discountPercentage,
        description: formData.description,
        img: formData.img,
        highlighted: formData.highlighted,
      };
    }
  };

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
              {input.key !== "description" &&
              input.key !== "img" &&
              input.key !== "category" ? (
                <>
                  <input
                    value={
                      input.value === ""
                        ? input.placeholder
                        : input.value.toString()
                    }
                    placeholder={input.placeholder}
                    className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B]"
                    onChange={(e) => {
                      if (input.key === "price") {
                        setFormData({
                          ...formData,
                          [input.key]: formatPrice(e.target.value),
                        });
                      } else if (input.key === "discountPercentage") {
                        console.log("test")
                        setFormData({
                          ...formData,
                          [input.key]: formatDiscount(e.target.value),
                        });
                      } else {
                        setFormData({
                          ...formData,
                          [input.key]: e.target.value,
                        });
                      }
                    }}
                  />
                  {input.errorMsg !== "" && (
                    <span className="text-red-500 text-sm">
                      {input.errorMsg}
                    </span>
                  )}
                </>
              ) : input.key === "description" ? (
                <>
                  <textarea
                    value={input.value.toString()}
                    placeholder={input.placeholder}
                    className="border p-3 rounded-lg border-[#E2E8F0] h-48.5 bg-[#F1F5F9]"
                    onChange={(e) =>
                      setFormData({ ...formData, [input.key]: e.target.value })
                    }
                  />
                  {input.errorMsg !== "" && (
                    <span className="text-red-500 text-sm">
                      {input.errorMsg}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <select
                    value={input.value}
                    className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B] cursor-pointer"
                    onChange={(e) =>
                      setFormData({ ...formData, [input.key]: e.target.value })
                    }
                  >
                    <option
                      value={formData.category}
                      className="cursor-pointer"
                      disabled
                    >
                      Select category
                    </option>
                    {categorySelectOptions.map((category) => (
                      <option
                        key={category.label}
                        value={category.value}
                        onClick={() =>
                          setFormData({ ...formData, category: category.value })
                        }
                      >
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {input.errorMsg !== "" && (
                    <span className="text-red-500 text-sm">
                      {input.errorMsg}
                    </span>
                  )}
                </>
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

          <button
            className="bg-primary text-[#FCFCFC] p-3 rounded-lg mt-3 mb-4 font-inter font-semibold cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
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
