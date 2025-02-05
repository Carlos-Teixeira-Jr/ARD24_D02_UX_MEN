import { useEffect, useState } from "react";
import plantImage from "../assets/images/plant.svg";


export function UserConfigPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formDataErrors, setFormDataErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const {userId} = useAuth();
  const userId = 1;

  const inputs = [
    {
      key: "name",
      value: formData.name,
      placeholder: "Echinocereus Cactus",
      label: "Name",
      errorMsg: formDataErrors.name,
    },
    {
      key: "email",
      value: formData.email,
      placeholder: "Echinocereus Cactus",
      label: "Email",
      errorMsg: formDataErrors.email,
    },
    {
      key: "password",
      value: formData.password,
      placeholder: "Echinocereus Cactus",
      label: "Password",
      errorMsg: formDataErrors.password,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("🚀 ~ fetchData ~ data:", data)
          setFormData(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormDataErrors({
      name: "",
      email: "",
      password: "",
    });

    let newFormDataErrors = {
      name: "",
      email: "",
      password: "",
    };
  };

  return (
    <main className="flex md:flex-row flex-col gap-14 bg-white">
      <div className="flex-1 md:pt-8.5 md:pl-16 p-5 flex flex-col gap-5">
        <div className="gap-1 flex flex-col w-2/3">
          <h1 className="font-secondary text-primary text-titles font-bold text-4xl">
            User config
          </h1>
          <p className="font-inter text-[#64748B] font-normal">
            Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
            neque.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
          {inputs.map((input) => (
            <div key={input.key} className="flex flex-col gap-2">
              <label
                htmlFor={input.key}
                className="font-inter text-[#475569] font-semibold"
              >
                {input.label}
              </label>
              <input
                type="text"
                placeholder={input.placeholder}
                value={input.value}
                className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B]"
                onChange={(e) =>
                  setFormData({ ...formData, [input.key]: e.target.value })
                }
              />
              {input.errorMsg && (
                <p className="font-inter text-[#DC2626] font-semibold">
                  {input.errorMsg}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-primary text-white font-inter font-semibold py-2.5 rounded-md"
          >
            Edit account
          </button>
        </form>
      </div>

      <div className="flex-1 bg-gradient-to-b from-black/0 to-black/40">
        <img src={plantImage} className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
