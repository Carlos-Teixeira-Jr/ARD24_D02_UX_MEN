import React, { useState } from 'react';

// import { SignIn } from "@clerk/clerk-react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex place-items-center justify-between mx-auto px-[40px] h-[83px]">
        <div className=" bg-[url('./assets/images/Logo.png')] w-[49px] h-[54px]"></div>
      </div>   
      <div className="w-1/2 flex items-center">
        <div>
          <h1 className="w-120 font-secondary text-titles font-bold text-4xl">
            Sign Up
          </h1>
          <p className="font-inter font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block">E-mail:</label>
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
              <label htmlFor="password" className="block">Password:</label>
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
                <span className="ml-2">Stay connected</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-emerald-700 text-white p-3 rounded-lg mb-4 font-inter font-semibold cursor-pointer">Login</button>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center p-92" style={{ backgroundImage: 'url(src/assets/images/plant.png)' }}>
      </div>
    </div>
  );
};

export default LoginForm;
