import { motion } from "framer-motion";

export default function PlantNotFound() {
  return (
    <html>
      <head>
        <title>Página Não Encontrada</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div
          className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?plants')",
          }}
        >
          <motion.h1
            className="text-6xl font-bold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-xl text-white mt-4 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Plant Not Found
          </motion.p>
          <motion.a
            href="/"
            className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Voltar para a Home
          </motion.a>
        </div>
      </body>
    </html>
  );
}
