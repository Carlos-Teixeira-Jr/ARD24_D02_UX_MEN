import carlosPicture from "../../assets/images/devs/carlos-dev.jpeg";
import bernardoPicture from "../../assets/images/devs/bernardo-dev.png";
import gianPicture from "../../assets/images/devs/gian-dev.png";
import gabrielPicture from "../../assets/images/devs/gabriel-dev.jpg";
import { useEffect, useState } from "react";

export function AboutUsDevsBanner() {
  const [devCardText, setDevCardText] = useState({
    key: "",
    text: "",
    name: ""
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const devsCards = [
    {
      key: "carlos",
      name: "Carlos Teixeira",
      role: "Frontend Developer",
      img: carlosPicture,
      info: "I am a motivated fullstack developer with experience in JavaScript and its frameworks. I build scalable, high-performance web applications using React, Node.js, TypeScript, and databases. I’m eager to take on challenging projects and grow professionally.",
    },
    {
      key: "gian",
      name: "Gian Vieceli",
      role: "Frontend Developer",
      img: gianPicture,
      info: "dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada dada dadadada ",
    },
    {
      key: "maria",
      name: "Maria Bernardes",
      role: "Frontend Developer",
      img: "../../assets/devs/Carlos.png",
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
    },
    {
      key: "bernardo",
      name: "Bernardo Pioner",
      role: "Frontend Developer",
      img: bernardoPicture,
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
    },
    {
      key: "grabriel",
      name: "Gabriel Barela",
      role: "Frontend Developer",
      img: gabrielPicture,
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
    },
  ];

  const handleIconClick = (key: string) => {
    if (devCardText.key === key) {
      setDevCardText({
        key: "",
        text: "",
        name: "",
      });
    } else {
      setDevCardText({
        key: key,
        text: devsCards.find((card) => card.key === key)?.info || "",
        name: devsCards.find((card) => card.key === key)?.name || "",
      });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center md:my-36 my-5 px-5 md:px-28">
      <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
        Know our web developers
      </h1>

      <p className="font-inter text-[#64748B] font-normal md:px-64 mt-4">
        Temos uma equipe de desenvolvedores frontend criativos e dedicados,
        sempre em busca de soluções inovadoras para enfrentar cada desafio que
        surge.
      </p>

      <div className="flex md:flex-row flex-col justify-center items-center mt-5 md:mt-20 md:gap-10">
        {devsCards.map((dev) => (
          <div
            className="flex flex-col justify-center items-center gap-2 cursor-pointer hover:shadow-2xl ease-in-out duration-200 p-4 rounded-lg"
            onClick={() => handleIconClick(dev.key)}
          >
            <img
              src={dev.img}
              alt={dev.name}
              className="w-40 h-40 rounded-full object-cover cursor-pointer shrink-0"
            />
            <p className="font-secondary text-primary text-titles font-bold text-xl cursor-pointer transform hover:scale-110 ease-in-out duration-100">
              {dev.name}
            </p>
            <p className="font-inter text-[#64748B] font-semibold">
              {dev.role}
            </p>

            {isMobile && dev.key === devCardText.key ? (
              <div className="flex flex-col gap-2 justify-center items-center md:w-1/2 my-5 md:my-8 min-h-32">
              <label className="text-gray-700 font-bold text-2xl">{devCardText.name}</label>
              <p
                className={`font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${
                  devCardText.text ? "opacity-100" : "opacity-0"
                }`}
              >
                {devCardText.text}
              </p>
            </div>
            ): null}
          </div>
        ))}
      </div>

      {!isMobile && (
        <div className="flex flex-col gap-2 justify-center items-center w-1/2 my-8 min-h-32">
        <label className="text-gray-700 font-bold text-2xl">{devCardText.name}</label>
        <p
          className={`font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${
            devCardText.text ? "opacity-100" : "opacity-0"
          }`}
        >
          {devCardText.text}
        </p>
      </div>
      )}
    </section>
  );
}
