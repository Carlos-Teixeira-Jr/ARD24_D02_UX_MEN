export default function PlantNotFound(){
  return(
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?plants')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center shadow-lg">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-xl animate-bounce">404</h1>
        <p className="text-2xl text-white mt-4 drop-shadow-md">Plant Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
}