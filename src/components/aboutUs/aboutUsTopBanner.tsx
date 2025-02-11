import { useState } from "react";
import plantImage from "../../assets/images/plant.svg";
import JavascriptIcon from "../../assets/icons/javascriptIcon";
import ReactIcon from "../../assets/icons/reactIcon";
import TailwindIcon from "../../assets/icons/tailwindIcon";
import TypescriptIcon from "../../assets/icons/typescriptIcon";

export function AboutUsTopBanner() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [techStachText, setTechStackText] = useState({
    key: "",
    text: "",
  });

  const icons = [
    {
      key: "react",
      iconComponent: <ReactIcon />,
      label: "React.js",
      text: "React helps build optimized frontend applications that enhance business performance by providing a component-based architecture that promotes reusability and scalability, reducing development time and maintenance costs. Its Virtual DOM improves rendering efficiency, leading to faster load times and a better user experience. With effective state management, React ensures seamless updates and interactions, keeping the UI responsive. Additionally, it supports SEO-friendly rendering through Server-Side Rendering (SSR) and hydration, improving search engine rankings. Its rich ecosystem integrates well with libraries like Redux, Next.js, and Tailwind, enabling enhanced functionality. By leveraging React, businesses can create fast, scalable, and maintainable applications, improving customer engagement and overall success.",
    },
    {
      key: "javascript",
      iconComponent: <JavascriptIcon />,
      label: "JavaScript",
      text: "JavaScript helps build optimized frontend applications that enhance business performance by enabling dynamic and interactive user experiences. As a versatile and widely supported language, it allows for seamless client-side scripting, reducing server load and improving application speed. With asynchronous programming and features like AJAX and Fetch API, JavaScript enhances responsiveness by enabling real-time updates without reloading the page. Its vast ecosystem, including frameworks like React, Vue, and Angular, accelerates development and ensures scalability. Additionally, JavaScript supports cross-browser compatibility and progressive web applications (PWAs), making it a powerful tool for creating fast, engaging, and maintainable solutions that drive business growth.",
    },
    {
      key: "typescript",
      iconComponent: <TypescriptIcon />,
      label: "TypeScript",
      text: "TypeScript helps build optimized frontend applications that enhance business performance by adding static typing to JavaScript, reducing bugs and improving code maintainability. With features like type inference, interfaces, and strong tooling support, it enables developers to write cleaner, more reliable code, leading to fewer runtime errors. Its compatibility with JavaScript and seamless integration with frameworks like React, Angular, and Vue make it highly scalable for large applications. TypeScript also enhances developer productivity by providing intelligent code completion, refactoring capabilities, and better documentation. By leveraging TypeScript, businesses can create robust, maintainable, and high-performance applications that improve user experience and operational efficiency.",
    },
    {
      key: "tailwind",
      iconComponent: <TailwindIcon />,
      label: "Tailwind",
      text: "Tailwind CSS helps build optimized frontend applications that enhance business performance by providing a utility-first approach to styling, enabling rapid development and a highly customizable design system. By eliminating the need for writing custom CSS files and reducing unused styles, Tailwind improves performance and maintainability. Its responsive design utilities make it easy to create mobile-friendly interfaces without complex media queries. With built-in dark mode support and a consistent design framework, it ensures a polished user experience across different devices. By leveraging Tailwind CSS, businesses can accelerate development, maintain design consistency, and deliver fast, visually appealing applications that improve user engagement and satisfaction.",
    },
  ];

  const handleIconClick = (key: string) => {
    if (techStachText.key === key) {
      setTechStackText({
        key: "",
        text: "",
      });
    } else {
      setTechStackText({
        key: key,
        text: icons.find((icon) => icon.key === key)?.text || "",
      });
    }
  };

  return (
    <main className="flex md:flex-row flex-col gap-5 md:gap-14">
      <div className="flex-1 flex flex-col md:flex-row gap-5">
        <div className="gap-6 flex flex-col flex-1 px-5 md:px-16 py-5 md:py-9">
          <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
            About Us
          </h1>

          <p className="font-inter text-[#64748B] font-normal">
            The <strong>UX-MEN</strong> team specializes in React, TypeScript,
            and Tailwind CSS, crafting modern and scalable user interfaces. We
            focus on clean architecture, reusable components, and performance
            optimization, ensuring seamless user experiences. Our expertise
            includes state management, API integration, and UI/UX best
            practices, delivering high-quality and maintainable code across
            diverse projects.
          </p>

          <h2 className="font-secondary text-primary text-titles font-bold text-4xl md:mt-20">
            Tech Stack
          </h2>

          <div className="flex justify-between min-h-29">
            {icons.map((icon) => (
              <div
                key={icon.key}
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredIcon(icon.key)}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleIconClick(icon.key)}
              >
                {icon.iconComponent}
                {hoveredIcon === icon.key && (
                  <span
                    className={`text-sm text-gray-500 ${
                      icon.key !== "typescript" && "mt-6"
                    }`}
                  >
                    <strong>{icon.label}</strong>
                  </span>
                )}
              </div>
            ))}
          </div>

          <p
            className={`font-inter text-[#64748B] font-normal transition-opacity duration-500 ease-in-out ${
              techStachText.text ? "opacity-100" : "opacity-0"
            }`}
          >
            {techStachText.text}
          </p>
        </div>
        <div className="flex-1">
          <img src={plantImage} className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
}
