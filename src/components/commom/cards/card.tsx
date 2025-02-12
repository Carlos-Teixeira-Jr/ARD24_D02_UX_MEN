interface ICard {
  produto: {
    id?: string;
    name: string;
    subtitle: string;
    category: string;
    price: string;
    discountPercentage: string;
    description: string;
    img: string;
    highlighted: boolean;
  };
}

export default function Card({ produto }: ICard) {
  return (
    <div className="w-[318px] relative h-[387px]">
      <div className="w-full h-[388px]">
        <a href={`/products/${produto.id}`}>
          <img
            src={produto.img}
            className="w-[318px] h-[388px] object-cover"
            alt="Plant image"
          />
        </a>
        <p className="absolute right-2 top-2 rounded-full w-fit justify-self-end bg-emerald-100 py-[6.48px] px-[12.95px] border-[1.62px] border-emerald-50 text-emerald-900 font-primary">
          {produto.category}
        </p>
      </div>
      <div className="mt-[14px] w-[323px]">
        <h2 className="font-primary font-semibold text-2xl text-slate-600 hover:underline hover:cursor-pointer">
          {produto.name}
        </h2>
        <p className="flex font-primary text-sm md:text[16px] text-slate-500 gap-4">
          R$
          {(
            Number(produto.price) -
            (Number(produto.price) * Number(produto.discountPercentage)) / 100
          ).toFixed(2)}
          {Number(produto.discountPercentage) !== 0 && (
            <p className="text-slate-400 line-through">
              R${Number(produto.price).toFixed(2)}
            </p>
          )}
        </p>
      </div>
    </div>
  );
}
