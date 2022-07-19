import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {BiHelpCircle} from "react-icons/bi"
import { currencies, languages } from "../Constants";
import { Link } from "react-router-dom";
const logo = require("../assets/logo.png");


const Header = () => {
  //lanCur equals to language currency
  const [langCur, setLangCur] = useState({
    language: languages[0].name,
    currency: currencies[0].abr,
    hover: false,
  });

  //store temporary user preferences (currency , language) while waiting for submission
  const [temp,setTemp] = useState({
    language: languages[0].name,
    currency: currencies[0].abr,
  })

  const handleChange = (e) => {
    const name= e.target.name;
    const value = e.target.value;
    setTemp({...temp, [name]:value})
  }

  const handleSubmit = () => {
    if(temp.language.trim() !== "" && temp.currency.trim() !== ""){
      setLangCur({...langCur,language:temp.language, currency:temp.currency,hover:false})
    }
    else{
      setLangCur({...langCur, hover:false})
    }
  }

  return (
    <header className="mx-4 ">
      <section className="hidden mt-2 md:flex md:flex-row  min-w-full">
        <div className="flex items-center bg-blue-500/10 basis-1/5 divide-x divide-solid divide-gray-400">
          <div
            className="relative pr-2"
            onMouseEnter={() => setLangCur({ ...langCur, hover: true })}
            onMouseLeave={() => setLangCur({ ...langCur, hover: false })}
          >
            <p
              className={`flex items-center ${
                langCur.hover ? "text-primary" : ""
              } hover:cursor-pointer `}
            >
              <span className="mr-1">
                {langCur.language}-{langCur.currency}
              </span>
              {!langCur.hover ? (
                <span className="text-slate-600 text-xl">
                  <IoIosArrowDown />{" "}
                </span>
              ) : (
                <IoIosArrowUp className="text-primary text-xl" />
              )}
            </p>

            <div
              className={`${
                !langCur.hover
                  ? "hidden"
                  : "block shadow-md shadow-slate-900/30 absolute top-[22px] min-w-[220px] px-2 py-2 "
              }`}
            >
              <p className="font-bold">Paramètres</p>
              {/*selecting language preference*/}
              <div>
                <p className="text-gray-400 text-sm mt-2 mb-1"> Languages</p>
                <select
                  className="form-select form-select-sm
                          appearance-none 
                          w-full
                          px-2
                          py-1
                          text-sm
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none"
                  aria-label=".form-select-sm example"
                  onChange={handleChange}
                  name="language"
                >
                  {
                    languages.map((language, index) => {
                      return(
                        <option value={language.name} key={index}>{language.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              {/*for selecting currency preference*/}
              <div>
                <p className="text-gray-400 text-sm mt-2 mb-1"> Devises</p>
                <select
                  class="form-select form-select-sm
                          appearance-none 
                          w-full
                          px-2
                          py-1
                          text-sm
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none
                          relative"
                  aria-label=".form-select-sm example"
                  onChange={handleChange}
                  name="currency"
                >
                  {
                    currencies.map((currency, index) => {
                      return(
                        <option value={currency.abr} key={index}>{currency.abr}</option>
                      )
                    })
                  }
                </select>
              </div>
             <div className="flex justify-end w-full ">
             <button type="button" className="bg-primary text-white px-2 py-1 mt-2 font-bold hover:bg-primary/70" onClick={handleSubmit}>Enregistrer</button>
             </div>
            </div>
          </div>
          <div className="pl-2">
            <Link to="/aide">
              <p className="flex items-center hover:text-primary cursor-pointer">
                <BiHelpCircle className="text-xl mr-1"/>
                <span>Aide</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-indigo-500/10 basis-3/5  shrink-0 flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="scale-75" alt="logo"/>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
