import { IFormData } from "../../../interfaces/CreatePlantInterface";
import plantImage from "../../../assets/images/plant.svg";

interface IProductDetails {
  product: IFormData;
}

export function ProductDetails({ product }: IProductDetails) {
  return (
    <div className="flex gap-14 justify-between">
      <div className="flex flex-col gap-5 w-1/2 pl-12 py-14">
        <div className="gap-1">
          <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
            Echinocereus Cactus
          </h1>
          <p className="text-normal font-inter text-[#64748B]">
            A majestic addition to your plant collection
          </p>
        </div>

        <img className="w-full" src={product.img} />

        <div className="flex py-5 gap-6">
          <div>
            <p className="text-normal font-inter text-[#334155]">Price</p>
            <p className="text-normal font-inter text-[#64748B]">
              {product.price}
            </p>
          </div>
          <div>
            <p className="text-normal font-inter text-[#334155]">
              Discount percentage
            </p>
            <p className="text-normal font-inter text-[#64748B]">
              {product.discountPercentage}
            </p>
          </div>
          <div>
            <p className="text-normal font-inter text-[#334155]">
              Highlight product
            </p>
            <p className="text-normal font-inter text-[#64748B]">
              {product.highlighted ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="flex py-5 gap-6">
          <div>
            <p className="text-normal font-inter text-[#334155]">Description</p>
            <p className="text-normal font-inter text-[#64748B]">
              {product.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col py-5 gap-2">
          <p className="text-normal font-inter text-[#334155]">Category</p>
          <div className="px-3 py-1.5 bg-[#D1FAE5] rounded-3xl w-fit">
            {product.category}
          </div>
        </div>

        <a className="w-full" href={`/products/${product.id}/edit`}>
          <button className="bg-primary w-full hover:bg-emerald-700 text-[#FCFCFC] p-3 rounded-lg mt-3 mb-4 font-inter font-semibold cursor-pointer">
            Edit plant
          </button>
        </a>
      </div>
      <div className="flex-1 bg-gradient-to-b from-black/0 to-black/40">
        <img src={plantImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
