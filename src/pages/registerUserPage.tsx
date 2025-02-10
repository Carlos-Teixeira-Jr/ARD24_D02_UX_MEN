import { useState } from "react";
import { validateEmail } from "../utils/validators/validateEmail";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";
import { useSignUp } from "@clerk/clerk-react";
import plantImage from "../assets/images/plant.png";
import { validateName } from "../utils/validators/validateName";
import { useNavigate } from "react-router-dom";

// import { SignIn } from "@clerk/clerk-react";

const RegisterUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { signUp } = useSignUp();
  const navigate = useNavigate()

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  const [stayConnected, setStayConnected] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newNameError = "";
    let newEmailError = "";
    let newPasswordError = "";
    let newPasswordConfirmationError = "";

    if (!validateName(name)) {
      newNameError = validateName(name).errorMsg;
    }

    if (!validateEmail(email)) {
      newEmailError = validateEmail(email).errorMsg;
    }

    if (!validatePassword(password)) {
      newPasswordError = validatePassword(password).errorMsg;
    }

    if (passwordConfirmation !== password) {
      newPasswordConfirmationError = "Passwords do not match";
    }

    setNameError(newNameError);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    setPasswordConfirmationError(newPasswordConfirmationError);

    if (
      newNameError === "" &&
      newEmailError === "" &&
      newPasswordError === "" &&
      newPasswordConfirmationError === ""
    ) {
      if (signUp) {
        try {
          await signUp.create({
            firstName: name.split(" ")[0] || "teste",
            lastName: name.split(" ")[1] || "teste2",
            emailAddress: email,
            password: password,
          });
          setShowToast({
            show: true,
            message: "Success on login!",
            type: "success",
          });
          navigate("/verify")
        } catch (error: any) {
          console.error("erro", error.errors);
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
          })
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
    <div className="flex min-h-screen">
      <div className="flex flex-col w-1/2">
        <div className="flex place-items-center px-[40px] h-[83px]">
          <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
        </div>
        <div className="flex px-36 bg-white">
          <div className="w-full">
            <h1 className="w-full font-secondary text-primary text-titles font-bold text-4xl">
              Sign Up
            </h1>
            <p className="font-inter text-[#64748B] font-normal">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <form className="w-full"  onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name:
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  placeholder="Insira seu nome aqui"
                  required
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  placeholder="email@example.com"
                  required
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  placeholder="••••••••"
                  required
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-gray-700"
                >
                  Confirm password:
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  placeholder="••••••••"
                  required
                />
                {passwordConfirmationError && (
                  <p className="text-red-500">{passwordConfirmationError}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={stayConnected}
                    onChange={(e) => setStayConnected(e.target.checked)}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-gray-700">Stay connected</span>
                </label>
              </div>
            <div id="clerk-captcha"></div>
              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <img src={plantImage} />
      </div>

      {showToast.show && (
        <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
      )}
    </div>
  );
};

export default RegisterUserPage;
