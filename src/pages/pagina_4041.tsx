import background from "../assets/img/plantas_fundo.jpg"

export default function PlantNotFound() {
  return (
  
        <div
          className="h-screen w-full items-center justify-center"
          style={{
            backgroundImage:`url(${background})`,
        
          }}
          
        >
          <h1
            className="text-6xl text-center font-extrabold uppercase  text-green-600">
          
           404
          </h1>
          <p
            className="text-3xl text-center font-extrabold uppercase bg-green-700 "

            
            
          >
            Plant Not Found
          </p>
          <a
            href="/"
            className="mt-6 text-center px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition"
            
            
          >
            Voltar para a Home
          </a>
        </div>
  );
}
