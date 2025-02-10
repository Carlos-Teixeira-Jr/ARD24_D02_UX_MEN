//incompleto, só visual.

import { useSignIn, useUser } from "@clerk/clerk-react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const LoginForm: React.FC = () => {

    //REGISTER AINDA NÃO FUNCIONAL
  const navigate = useNavigate();

  const { signIn, setActive } = useSignIn();
  const { isSignedIn } = useUser();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

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
        navigate("/");

      } catch (error: any) {
        if (error?.errors?.[0]?.code === "session_exists") {
          navigate("/");
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
      navigate("/");
    }
  })

  return (
    <div className="flex min-h-screen">
      <div className="flex place-items-center justify-between mx-auto px-[40px] h-[83px]">
        <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
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
              <label htmlFor="name" className="block text-gray-700">Name:</label>
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
              <label htmlFor="password" className="block text-gray-700">Password:</label>
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
              <label htmlFor="confirm" className="block text-gray-700">Confirm Password:</label>
              <input
                type="confirm"
                id="confirm"
                value={password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                placeholder="••••••••"
                required
              />
            </div>
            <button disabled={loading} type="submit" className="w-full bg-primary text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer">Login
                {loading ? "loading..." : "Sign in"}
            </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center p-92" style={{ backgroundImage: 'url(src/assets/images/plant.png)' }}>
      </div>
    </div>
  );
};    

export default LoginForm;
