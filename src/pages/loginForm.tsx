import { useSignIn, useUser } from "@clerk/clerk-react";
import { useState, useCallback, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/toast/toast";


const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { signIn, setActive } = useSignIn();
  const { isSignedIn } = useUser();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      setError("");
      setLoading(true);

      try {
        const signInResource = await signIn?.create({
          identifier: emailAddress,
          password,
        });


        await setActive?.({ session: signInResource?.createdSessionId });

      } catch (error: any) {
        if (error?.errors?.[0]?.code === "session_exists") {
        } else {
          setError(JSON.stringify(error?.errors));

        }
      } finally {
        setLoading(false);
      }
    },
    [signIn, emailAddress, navigate, setActive, password]
  );

  useEffect(() => {
    if (isSignedIn) {
      navigate("/products");
    }
  }, [isSignedIn, navigate]);

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
            Sign Up
          </h1>
          <p className="font-inter text-[#64748B] font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="emailAddress" className="block text-gray-700">E-mail:</label>
              <input 
                type="email"
                id="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
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
            <button disabled={loading} type="submit" className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer">Login</button>
            {error && <div>{error}</div>}
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
