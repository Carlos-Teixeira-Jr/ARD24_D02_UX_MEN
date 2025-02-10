import { validateEmail } from "../utils/validators/validateEmail";
import { validatePassword } from "../utils/validators/validatePassword";
import { Toast } from "../components/toast/toast";
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

// import { SignIn } from "@clerk/clerk-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, setActive } = useSignIn();
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [stayConnected, setStayConnected] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let newEmailError = "";
    let newPasswordError = "";

    if (!validateEmail(email)) {
      newEmailError = validateEmail(email).errorMsg;
    }

    if (!validatePassword(password)) {
      newPasswordError = validatePassword(password).errorMsg;
    }

    setEmailError(newEmailError);
    setPasswordError(newPasswordError);

    if (newEmailError === "" && newPasswordError === "") {
      try {
        const signResource = await signIn?.create({
          identifier: email,
          password,
        });

        await setActive?.({ session: signResource?.createdSessionId });
        navigate("/");

        setShowToast({
          show: true,
          message: "Error on login!",
          type: "error",
        });
      } catch (error) {
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
        <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
      </div>
      <div className="w-1/2 flex items-center  bg-white">
        <div>
          <h1 className="w-120 font-secondary text-primary text-titles font-bold text-4xl">
            Sign Up
          </h1>
          <p className="font-inter text-[#64748B] font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center p-92"
        style={{ backgroundImage: "url(src/assets/images/plant.png)" }}
      ></div>

      {showToast.show && (
        <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
      )}
    </div>
  );
};

export default LoginForm;
