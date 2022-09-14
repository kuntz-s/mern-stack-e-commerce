import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import Loading from "../components/Loading";
const logo = require("../assets/logo.png");

const ConnexionScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, userInfo } = useSelector((state) => state.user);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  useEffect(() => {
    if(userInfo) {
      navigate('/')
    }
  },[userInfo, navigate])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log('entered here');
    if (loginInfo.email || loginInfo.password) {
      dispatch(loginUser({email:loginInfo.email, password:loginInfo.password}))
    }
  };

  
 if(loading) {
  return(
    <Loading />
  )
 } else {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center bg-yellow-400/30">
      <div className="shadow-md shadow-slate-900/30 w-[80%] md:w-[75%] lg:w-[60%]  flex flex-col md:flex-row">
        <div className="basis-1/2 bg-loginImage bg-center bg-no-repeat bg-cover  "></div>
        <div className="basis-1/2 px-2 py-[50px] bg-white">
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
          <p className="py-1 flex justify-center">Connectez vous</p>
      {error ? <p className="text-pink-500 text-sm flex items-center justify-center font-bold">Adresse mail ou mot de passe invalide <BiError className="ml-1" /></p> : <p className="hidden"></p>}

          <div className="flex items-center flex-col">
            <form className="px-8 w-full">
              <div>
                <label className="mail">
                  <span className="mail text-sm font-bold text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className=" peer w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="aaa@gmail.com"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="pt-2">
                <label className="password relative ">
                  <span className="password text-sm font-bold text-slate-700">
                    Mot de passe
                  </span>
                  <input
                    type={loginInfo.showPassword ? "text" : "password"}
                    name="password"
                    className="peer  w-full px-2 py-2 border border-slate-300 rounded-md text-md invalid:border-pink-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="mot de passe"
                    onChange={handleChange}
                  />
                  <BsEye
                    className={`absolute top-[65%] right-[5%] cursor-pointer ${
                      !loginInfo.showPassword ? "hidden" : "block"
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
              <div className="flex flex-row justify-end mt-2">
                <p className="password text-sm font-bold text-primary cursor-pointer hover:underline hover:underline-offset-1">
                  Mot de passe oublié?
                </p>
              </div>
              <button
                type="button"
                className="px-2 py-[6px] mt-2 w-full bg-primary hover:bg-primary/70 font-medium text-white text-center text-md rounded-md  cursor-pointer"
                onClick={handleSubmit}
              >
                {" "}
                Se connecter
              </button>
              <div className="flex flex-row my-2">
                <p
                  className="password text-sm font-bold text-primary cursor-pointer hover:underline hover:underline-offset-1"
                  onClick={() => navigate("/inscription")}
                >
                  vous n'avez pas de compte?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
 }
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
