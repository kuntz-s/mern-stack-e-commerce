import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const logo = require("../assets/logo.png");

const InscriptionScreen = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-yellow-400/30">
      <div className=" shadow-md shadow-slate-900/30 w-[80%] md:w-[75%] lg:w-[60%]  flex flex-col md:flex-row">
        <div className="basis-1/2 bg-loginImage bg-center bg-no-repeat bg-cover  "></div>
        <div className="basis-1/2 px-2 py-[10px] bg-white">
          <div className="flex  justify-center">
            <img
              src={logo}
              alt="logo"
              className="scale-[0.6] hover:cursor-pointer shrink"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <p className=" flex justify-center">Inscrivez vous</p>
          <div className="flex items-center flex-col">
            <form className="px-8 w-full">
            <div>
                <label className="lastName">
                  <span className="lastName text-sm font-bold text-slate-700">
                    Nom
                  </span>
                  <input
                    type="text"
                    name = "lastName"
                    className=" peer w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Entrez votre nom"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="pt-2">
                <label className="firstName">
                  <span className="firstName text-sm font-bold text-slate-700">
                    Prenom
                  </span>
                  <input
                    type="text"
                    name = "firstName"
                    className=" peer w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Entrez votre prenom"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="pt-2">
                <label className="mail">
                  <span className="mail text-sm font-bold text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name = "email"
                    className=" peer w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="aaa@gmail.com"
                    onChange={handleChange}
                  />
                  <p className="mt-1 hidden peer-invalid:block text-pink-600 text-[12px]">
                    Veuillez fournir une adresse email valide.
                  </p>
                </label>
              </div>
              <div className="pt-2">
                <label className="password relative ">
                  <span className="password text-sm font-bold text-slate-700">
                    Mot de passe
                  </span>
                  <input
                    type={loginInfo.showPassword ? "text" : "password"}
                    name= "password"
                    className="peer  w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Entrez votre mot de passe"
                    onChange={handleChange}
                  />
                  <BsEye
                    className={`absolute top-[65%] right-[5%] cursor-pointer ${
                      !loginInfo.showPassword  ? "hidden" : "block"
                    }`}
                    onClick={() =>
                      setLoginInfo({
                        ...loginInfo,
                        showPassword: !loginInfo.showPassword,
                      })
                    }
                  />
                  <BsEyeSlash
                    className={`absolute top-[65%] right-[5%] cursor-pointer ${
                      loginInfo.showPassword ? "hidden" : "block"
                    }`}
                    onClick={() =>
                      setLoginInfo({
                        ...loginInfo,
                        showPassword: !loginInfo.showPassword,
                      })
                    }
                  />
                </label>
              </div>
              <div className="pt-2">
                <label className="confirmPassword relative ">
                  <span className="confirmPassword text-sm font-bold text-slate-700">
                    Confirmer votre mot de passe
                  </span>
                  <input
                    type={"password"}
                    name= "confirmPassword"
                    className="peer  w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Confirmez votre mot de passe"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <button
                type="button"
                className="px-2 py-[6px] mt-2 w-full bg-primary hover:bg-primary/70 font-medium text-white text-center text-md rounded-md  cursor-pointer"
                onClick = {() => console.log(loginInfo)}
              >
                {" "}
                S'inscrire
              </button>
              <div className="flex flex-row justify-end my-2">
                <p className="password text-sm font-bold text-primary cursor-pointer hover:underline hover:underline-offset-1">
                  Vous possédez déjà un compte ?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InscriptionScreen;

