import { useState } from "react";
import { useNavigate } from "react-router";
import { useSignUp } from "@clerk/clerk-react";
import { handleSaveUserOnDb } from "../utils/hooks/handleCreateUserOnDb";
import { validateEmail } from "../utils/validators/validateEmail";
import { validateName } from "../utils/validators/validateName";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";

const RegisterUser: React.FC = () => {
  const navigate = useNavigate();
  const { signUp } = useSignUp();

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  const [stayConnected, setStayConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newNameError = "";
    let newEmailError = "";
    let newPasswordError = "";
    let newPasswordConfirmationError = "";

    if (!validateName(name)) {
      newNameError = validateName(name).errorMsg;
    }

    if (!validateEmail(emailAddress)) {
      newEmailError = validateEmail(emailAddress).errorMsg;
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
            emailAddress,
            password,
          });
          setShowToast({
            show: true,
            message: "Success on login!",
            type: "success",
          });

          await handleSaveUserOnDb({
            firstName: name.split(" ")[0] || "teste",
            lastName: name.split(" ")[1] || "teste2",
            emailAddress,
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
    <div className="flex min-h-screen">
      <div className="flex place-items-center justify-between mx-auto px-[40px] h-[83px]">
        <a href="/">
          <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
        </a>      
      </div>   
      <div className="w-1/2 flex items-center  bg-white">
        <div>
          <h1 className="w-120 font-secondary text-primary text-titles font-bold text-4xl">
            Register
          </h1>
          <p className="font-inter text-[#64748B] font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                Name:
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                placeholder="name"
                required
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="emailAddress" className="block text-gray-700">
                E-mail:
              </label>
              <input
                id="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
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
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                placeholder=""
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="passwordConfirmation"
                className="block text-gray-700"
              >
                Confirm Password:
              </label>
              <input
                type="passwordConfirmation"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                placeholder=""
                required
              />
              {passwordConfirmationError && (
                <p className="text-red-500">{passwordConfirmationError}</p>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer"
            >
              Login
              {loading ? "loading..." : "Sign up"}
            </button>
            {showToast.show && (
              <Toast
                toastProps={{
                  message: "",
                  type: "",
                  show: false,
                }}
                handleRemoveToast={setShowToast}
              />
            )}
          </form>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center p-92"
        style={{ backgroundImage: "url(src/assets/images/plant.png)" }}
      ></div>
    </div>
  );
};

export default RegisterUser;
