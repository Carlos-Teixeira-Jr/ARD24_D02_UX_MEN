import carlosPicture from "../../assets/images/devs/carlos-dev.jpeg";
import bernardoPicture from "../../assets/images/devs/bernardo-dev.png";
import gianPicture from "../../assets/images/devs/gian-dev.png";
import { useState } from "react";

export function AboutUsDevsBanner() {
  const [devCardText, setDevCardText] = useState({
    key: "",
    text: "",
  });

  const devsCards = [
    {
      key: "carlos",
      name: "Carlos Teixeira",
      role: "Frontend Developer",
      img: carlosPicture,
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
    },
    {
      key: "gian",
      name: "Gian Vieceli",
      role: "Frontend Developer",
      img: gianPicture,
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
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
      img: "../../assets/devs/Carlos.png",
      info: "lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun ",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center my-36 px-28">
      <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
        Know our web developers
      </h1>

      <p className="font-inter text-[#64748B] font-normal px-64 mt-4">
        Temos uma equipe de desenvolvedores frontend criativos e dedicados,
        sempre em busca de soluções inovadoras para enfrentar cada desafio que
        surge.
      </p>

      <div className="flex justify-center items-center mt-20 gap-10">
        {devsCards.map((dev) => (
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={dev.img}
              alt={dev.name}
              className="w-40 h-40 rounded-full object-cover cursor-pointer"
            />
            <p className="font-secondary text-primary text-titles font-bold text-xl cursor-pointer transform hover:scale-110 ease-in-out duration-100">
              {dev.name}
            </p>
            <p className="font-inter text-[#64748B] font-semibold">
              {dev.role}
            </p>
          </div>
        ))}

        <p
          className={`font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${
            devCardText.text ? "opacity-100" : "opacity-0"
          }`}
        >
          {devCardText.text}
        </p>
      </div>
    </section>
  );
}
