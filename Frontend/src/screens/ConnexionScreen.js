import React, { useState } from "react";
import { useNavigate } from "react-router";
const logo = require("../assets/logo.png");

const ConnexionScreen = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="h-[100vh] w-full flex justify-center items-center">
      <div className="shadow-md shadow-slate-900/30 w-[80%] md:w-[75%] lg:w-[60%] h-[70vh] flex flex-col md:flex-row">
        <div className="basis-1/2 bg-loginBackground bg-center bg-no-repeat bg-cover "></div>
        <div className="basis-1/2 p-2">
          <div className="flex  justify-center">
            <img
              src={logo}
              alt="logo"
              className="scale-[0.6] hover:cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <p className="py-1 flex justify-center">Connectez vous</p>
          <div className="flex items-center flex-col">
            <form>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  className="peer w-full px-2 py-2 border border-slate-300 rounded-md text-sm invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="aaa@gmail.com"
                />
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnexionScreen;

/*<form>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input type="email" className="peer ..." />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
            </form>*/
