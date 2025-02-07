import { Link } from "react-router-dom"
const TopBannerContainer = () => {


  return (
    <div className="grid grid-cols-2 justify-items-end">
      <div className="col-span-1 mr-[89px] w-[524px] ml-[112px] mt-[117px] gap-6">
        <h1 className="text-emerald-900 font-secondary font-bold text-[64px]">Discover Your Green Side</h1>
        <p className="my-6 font-primary text-slate-500 w-[487px]">We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. </p>
        <Link to="/catalogo">
        <button className="cursor-pointer px-10 py-3 bg-emerald-900 hover:bg-emerald-700 text-white rounded-[8px]">Shop now</button>
        </Link>
      </div>
      <div className="col-span-1 bg-[url('./assets/images/plant.jpg')] bg-center bg-cover h-[636px] w-[720px] "></div>
    </div>
  )
}

export default TopBannerContainer
