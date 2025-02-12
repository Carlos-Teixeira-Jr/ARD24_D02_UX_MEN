import plantNorFoundImg from "../../assets/images/plantNotFound.png";

export function PageNotFoundContainer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pb-20">
      <div className="flex items-center text-[10rem] font-primary text-emerald-900">
        <h1 className="drop-shadow-xl">4</h1>
        <img className="w-50 motion-safe:animate-bounce drop-shadow-xl" src={plantNorFoundImg}/>
        <h1 className="drop-shadow-xl">4</h1>
      </div>
      <div className="text-[4rem] font-semibold leading-15">
        <h1 className="text-emerald-900">SORRY, THERE'S</h1>
        <h1 className="text-gray-400">NOTHING HERE!</h1>
      </div>

      <button onClick={() => window.location.href = "/"} className="px-10 py-3 bg-emerald-900 hover:bg-emerald-700 text-white rounded-[8px] cursor-pointer my-5 transition-colors duration-00 ease-in-out">Home</button>
    </section>
  );
}