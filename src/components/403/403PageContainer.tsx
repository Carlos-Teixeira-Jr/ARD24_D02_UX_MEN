export function ForbiddenPageContainer() {
  return (
    <section className="min-h-screen flex md:flex-row flex-col-reverse items-center justify-center pb-20">
      <div className="flex flex-col px-5">
        <h1 className="font-primary text-emerald-900 text-[5rem] font-semibold drop-shadow-2xl">403</h1>
        <h2 className="font-primary text-gray-600 text-[2rem] font-semibold">Acces forbidden</h2>
        <p className="font-inter text-gray-500 text-2xl">
          You've tried access a page you did not have prior authorization for
        </p>
        <button className="px-24 py-3 w-full md:w-fit bg-emerald-900 hover:bg-emerald-700 text-white rounded-[8px] cursor-pointer my-5 transition-colors duration-00 ease-in-out" onClick={() => window.location.href = "/"}>Home</button>
      </div>
      <div className="relative">
        <img src="/src/assets/images/403-page.png"/>
        <img className="absolute top-10 md:top-15 md:right-15 right-12 md:w-sm w-xs animate-pulse" src="/src/assets/images/lock.png"/>
      </div>
    </section>
  );
}
