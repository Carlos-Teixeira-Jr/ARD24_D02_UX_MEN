import { useSignIn, useUser } from "@clerk/clerk-react";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/toast/toast";
import { validateEmail } from "../utils/validators/validateEmail";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { signIn, setActive } = useSignIn();
  const { isSignedIn } = useUser();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actualPassword =
      e.target.value.length > password.length
        ? password + e.target.value.slice(-1)
        : password.slice(0, -1);

    setPassword(actualPassword);
    setHiddenPassword("*".repeat(actualPassword.length));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoading(true);

    if (!validateEmail(emailAddress).isValid) {
      setEmailError(validateEmail(emailAddress).errorMsg);
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    let input = "";
    let message = "";

    if (emailError === "" && passwordError === "") {
      try {
        const signInResource = await signIn?.create({
          identifier: emailAddress,
          password,
        });

        await setActive?.({ session: signInResource?.createdSessionId });

        setLoading(false);
      } catch (error: any) {
        input = error.errors[0].meta.paramName;
        message = error.errors[0].longMessage;

        if (input === "identifier") {
          setEmailError(message);
        } else if (input === "password") {
          setPasswordError(message);
        }

        setLoading(false);

        setShowToast({
          show: true,
          message: message,
          type: "error",
        })
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false)
      setShowToast({
        show: true,
        message: "There's an empty field",
        type: "error",
      })
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate("/products");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="md:flex min-h-screen">
      <div className="flex place-items-center justify-between mx-auto px-[40px] h-[83px]">
        <a href="/">
          <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
        </a>
      </div>
      <div className="w-[90%] justify-self-center md:w-1/2 md:flex items-center">
        <div>
          <h1 className="md:w-120 font-secondary text-titles font-bold text-4xl">
            Sign Up
          </h1>
          <p className="font-inter font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="emailAddress" className="block text-gray-700">
                E-mail:
              </label>
              <input
                id="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-gray-600"
                placeholder="email@example.com"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                id="password"
                value={hiddenPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 text-gray-600"
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={stayConnected}
                  onChange={(e) => setStayConnected(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2">Stay connected</span>
              </label>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer"
            >
              Login
            </button>
            {showToast.show && (
              <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
            )}
          </form>
        </div>
      </div>
      <div
        className="fixed bottom-0 md:static w-full h-[350px] md:w-1/2 bg-cover bg-center md:p-92"
        style={{ backgroundImage: "url(src/assets/images/plant.png)" }}
      ></div>

      {showToast.show && (
        <Toast toastProps={showToast} handleRemoveToast={setShowToast} />
      )}
    </div>
  );
};

export default LoginForm;
