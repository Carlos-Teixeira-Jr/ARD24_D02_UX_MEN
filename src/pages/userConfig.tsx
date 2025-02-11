import { useEffect, useState } from "react";
import plantImage from "../assets/images/plant.svg";
import { validateName } from "../utils/validators/validateName";
import { validateEmail } from "../utils/validators/validateEmail";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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

  const [hiddenPassword, setHiddenPassword] = useState("");
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
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
      value: hiddenPassword,
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
          const maskedPassword = "*".repeat(data.password.length);
          setFormData({
            name: data.name,
            email: data.email,
            password: data.password,
          });
          setHiddenPassword(maskedPassword);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actualPassword =
      e.target.value.length > formData.password.length
        ? formData.password + e.target.value.slice(-1)
        : formData.password.slice(0, -1);

    setFormData({ ...formData, password: actualPassword });
    setHiddenPassword("*".repeat(actualPassword.length));
  };

  useEffect(() => {
    if (showToast.show) {
      const timer = setTimeout(() => {
        setShowToast((prev) => ({
          ...prev,
          show: false,
        }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast.show]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    if (!validateName(formData.name).isValid) {
      newFormDataErrors.name = validateName(formData.name).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        name: validateName(formData.name).errorMsg,
      });
    }
    if (!validateEmail(formData.email).isValid) {
      newFormDataErrors.email = validateEmail(formData.email).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        email: validateEmail(formData.email).errorMsg,
      });
    }
    if (!validatePassword(formData.password).isValid) {
      newFormDataErrors.password = validatePassword(formData.password).errorMsg;
      setFormDataErrors({
        ...newFormDataErrors,
        password: validatePassword(formData.password).errorMsg,
      });
    }

    if (Object.values(newFormDataErrors).some((error) => error !== "")) {
      setFormDataErrors(newFormDataErrors);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Success on editing user!");
        setShowToast({
          show: true,
          message: "Success on editing user!",
          type: "success",
        });
      } else {
        console.error("Error on editing user", response.statusText);
        setShowToast({
          show: true,
          message: "Error on editing user",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setShowToast({
        show: true,
        message: "Error on editing user",
        type: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <main className="flex md:flex-row flex-col gap-5 md:gap-14 bg-white">
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

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
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
                  onChange={
                    input.key === "password"
                      ? handlePasswordChange
                      : (e) =>
                          setFormData({
                            ...formData,
                            [input.key]: e.target.value,
                          })
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
              className="bg-primary cursor-pointer text-white font-inter font-semibold py-2.5 rounded-md"
            >
              Edit account
            </button>
          </form>
        </div>

        <div className="flex-1 bg-gradient-to-b from-black/0 to-black/40">
          <img src={plantImage} className="w-full h-full object-cover" />
        </div>

        {showToast.show && (
          <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
        )}
      </main>
      <Footer />
    </>
  );
}
