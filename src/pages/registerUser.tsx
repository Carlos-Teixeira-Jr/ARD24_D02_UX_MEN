import { useState } from "react";
import { useNavigate } from "react-router";
import { useSignUp } from "@clerk/clerk-react";
import { validateEmail } from "../utils/validators/validateEmail";
import { validateName } from "../utils/validators/validateName";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";

const RegisterUser: React.FC = () => {
  const navigate = useNavigate();
  const { signUp } = useSignUp();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState("");
  const [hiddenPasswordConfirmation, setHiddenPasswordConfirmation] =
    useState("");

  const [formDataErrors, setFormDataErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const inputs = [
    {
      key: "name",
      value: formData.name,
      placeholder: "Insert your name",
      label: "Name",
      errorMsg: formDataErrors.name,
    },
    {
      key: "email",
      value: formData.email,
      placeholder: "example@example.com",
      label: "Email",
      errorMsg: formDataErrors.email,
    },
    {
      key: "password",
      value: hiddenPassword,
      placeholder: "",
      label: "Password",
      errorMsg: formDataErrors.password,
    },
    {
      key: "passwordConfirmation",
      value: hiddenPasswordConfirmation,
      placeholder: "",
      label: "Confirm password",
      errorMsg: formDataErrors.passwordConfirmation,
    },
  ];

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actualPassword =
      e.target.value.length > formData.password.length
        ? formData.password + e.target.value.slice(-1)
        : formData.password.slice(0, -1);

    setFormData({ ...formData, password: actualPassword });
    setHiddenPassword("*".repeat(actualPassword.length));
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const actualPassword =
      e.target.value.length > formData.passwordConfirmation.length
        ? formData.passwordConfirmation + e.target.value.slice(-1)
        : formData.passwordConfirmation.slice(0, -1);

    setFormData({ ...formData, passwordConfirmation: actualPassword });
    setHiddenPasswordConfirmation("*".repeat(actualPassword.length));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newFormDataErrors = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };

    if (!validateName(formData.name).isValid) {
      newFormDataErrors.name = validateName(formData.name).errorMsg;
    }

    if (!validateEmail(formData.email).isValid) {
      newFormDataErrors.email = validateEmail(formData.email).errorMsg;
    }

    if (!validatePassword(formData.password).isValid) {
      newFormDataErrors.password = validatePassword(formData.password).errorMsg;
    }

    if (formData.passwordConfirmation !== formData.password) {
      newFormDataErrors.passwordConfirmation = "Passwords do not match";
    }

    setFormDataErrors(newFormDataErrors);

    if (!Object.values(newFormDataErrors).some((error) => error !== "")) {
      const { name, email, password } = formData;
      if (signUp) {
        try {
          await signUp.create({
            firstName: name.split(" ")[0] || "teste",
            lastName: name.split(" ")[1] || "teste2",
            emailAddress: email,
            password,
          });
        } catch (error: any) {
          setShowToast({
            show: true,
            message: "Error on login!",
            type: "error",
          });
        }

        try {
          await signUp.prepareVerification({
            redirectUrl: "http://localhost:5173/verify",
            strategy: "email_link",
          });

          setShowToast({
            show: true,
            message: "Success on login!",
            type: "success",
          });

          navigate("/verify");
        } catch (error: any) {
          console.error("erro", error.errors);
          setShowToast({
            show: true,
            message: "Error on login!",
            type: "error",
          });
        }
      } else {
        setShowToast({
          show: true,
          message: "Error on login!",
          type: "error",
        });
      }
    }
  };

  return (
    <div className="md:flex max-w-full md:min-h-screen ">
      <div className="flex place-items-center md:justify-between mx-auto px-[40px] h-[83px]">
        <a href="/">
          <div className="bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
        </a>
      </div>
      <div className="justify-self-center md:w-1/2 md:flex justify-items-center md:items-center">
        <div>
          <h1 className="md:w-120 font-secondary text-titles font-bold text-4xl">
            Register
          </h1>
          <p className="font-inter font-normal mb-5 md:mb-0">
            Lorem ipsum dolor sit amet consectetur.
          </p>

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
                  className="border p-3 rounded-lg border-[#E2E8F0] h-11.5 "
                  onChange={(e) => {
                    if (input.key === "password") {
                      handlePasswordChange(e);
                    } else if (input.key === "passwordConfirmation") {
                      handlePasswordConfirmationChange(e);
                    } else {
                      setFormData((prev) => ({
                        ...prev,
                        [input.key]: e.target.value,
                      }));
                    }
                  }}
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
              Signup
            </button>
          </form>
        </div>
      </div>
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center p-92"
        style={{ backgroundImage: "url(src/assets/images/plant.png)" }}
      ></div>
      <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
    </div>
  );
};

export default RegisterUser;
