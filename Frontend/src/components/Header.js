import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { BsPerson, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
import { currencies, languages, categories, marques } from "../Constants";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ReactCountryFlag from "react-country-flag";
const logo = require("../assets/logo.png");

const Header = () => {
  //fetch users location country, country code,ip ,etc.. ... and set location to it
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((response) => {
        setLocation(response);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  //user current location
  const [location, setLocation] = useState({
    country_code: "CM",
    country_name: "",
    currency: "",
  });

  //display items when hovering on them
  const [headerHover, setHeaderHover] = useState({
    registerHover: false,
    categoriesHover: false,
    marquesHover: false
  });

  //store user's search
  const [search, setSearch] = useState("");

  //lanCur equals to language currency
  const [langCur, setLangCur] = useState({
    language: languages[0].name,
    currency: currencies[0].abr,
    hover: false,
  });

  //store temporary user preferences (currency , language) while waiting for submission
  const [temp, setTemp] = useState({
    language: languages[0].name,
    currency: currencies[0].abr,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTemp({ ...temp, [name]: value });
  };

  const handleSubmit = () => {
    if (temp.language.trim() !== "" && temp.currency.trim() !== "") {
      setLangCur({
        ...langCur,
        language: temp.language,
        currency: temp.currency,
        hover: false,
      });
    } else {
      setLangCur({ ...langCur, hover: false });
    }
  };

  return (
    <header className="mx-4 ">
      {/*top header section*/}
      <section className="hidden md:flex md:flex-row  min-w-full">
        <div className="flex items-center basis-1/5 divide-x  divide-gray-400 divide-gray-400">
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
                  : "block shadow-md shadow-slate-900/30 absolute rounded-md bg-white md:top-[3.5rem] lg:top-[2rem] min-w-[220px] px-2 py-2 "
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
                  {languages.map((language, index) => {
                    return (
                      <option value={language.name} key={index}>
                        {language.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/*used to prevent quitting of hovering when user transition from icon to language-currency*/}
              <div
                className={`${
                  !langCur.hover
                    ? "hidden"
                    : "absolute top-[-18px] left-[-2px] bg-transparent h-10 w-28"
                }`}
              ></div>

              {/*for selecting currency preference*/}
              <div>
                <p className="text-gray-400 text-sm mt-2 mb-1"> Devises</p>
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
                          focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none
                          relative"
                  aria-label=".form-select-sm example"
                  onChange={handleChange}
                  name="currency"
                >
                  {currencies.map((currency, index) => {
                    return (
                      <option value={currency.abr} key={index}>
                        {currency.abr}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-end w-full ">
                <button
                  type="button"
                  className="bg-primary rounded-lg text-white px-2 py-1 mt-2 font-bold hover:bg-primary/70"
                  onClick={handleSubmit}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
          <div className="pl-2">
            <Link to="/aide">
              <p className="flex items-center hover:text-primary cursor-pointer">
                <BiHelpCircle className="text-xl mr-1" />
                <span>Aide</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="basis-3/5  shrink-0 flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="scale-75" alt="logo" />
          </Link>
        </div>
        <div className="basis-1/5 shrink-0 flex justify-end items-center divide-x divide-solid divide-gray-400 [&>*]:text-xl [&>*]:px-2 hover:[&>*]:text-primary">
          <div className="flex items-center shrink-0">
            <ReactCountryFlag
              countryCode={location.country_code}
              svg
              style={{ height: "1.5em", width: "1.5em" }}
            />
          </div>
          <div
            className="relative"
            onMouseEnter={() =>
              setHeaderHover({ ...headerHover, registerHover: true })
            }
            onMouseLeave={() =>
              setHeaderHover({ ...headerHover, registerHover: false })
            }
          >
            <BsPerson className="cursor-pointer" />

            {/*used to prevent quitting of hovering when user transition from icon to register*/}
            <div
              className={`${
                !headerHover.registerHover
                  ? "hidden"
                  : "absolute top-[-6px] bg-transparent-300 h-10 w-6"
              }`}
            ></div>

            <div
              className={`${
                !headerHover.registerHover
                  ? "hidden"
                  : "absolute bg-white rounded-md top-8 right-[-60px] shadow-md shadow-slate-900/30 min-w-[220px] px-2 py-2 [&>*]:my-2"
              }`}
            >
              <button className="rounded-full w-full bg-primary hover:bg-primary/80 hover:border-primary/80 text-white border border-solid border-primary">
                S'inscrire
              </button>
              {/*horizontal line with text center on it*/}
              <div className="relative">
                <hr />
                <p className="absolute top-[-16px] left-[82px] bg-white m-0 px-1 text-gray-400">
                  ou
                </p>
              </div>
              <button className="rounded-full w-full bg-transparent text-primary hover:bg-gray-200/50 border border-solid border-primary ">
                Se connecter
              </button>
            </div>
          </div>
          <div>
            <Link to="/favorites">
              <span>
                {" "}
                <BsHeart data-tip data-for="favoris" />
              </span>
              <ReactTooltip id="favoris" place="bottom" effect="float">
                Vous avez 0 favoris
              </ReactTooltip>
            </Link>
          </div>

          <div>
            <Link to="/cart">
              <span>
                {" "}
                <BsCart3 data-tip data-for="panier" />{" "}
              </span>
              <ReactTooltip id="panier" place="right" effect="float">
                Vous avez 0 élements dans votre panier
              </ReactTooltip>
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden md:flex md:flex-row  min-w-full py-1">
        <div className="flex basis-3/5 items-center justify-around font-bold [&>*]:cursor-pointer [&>*]:border-b-2 [&>*]:border-white hover:[&>*]:border-primary">
          <Link to="/">
            <p>Accueil</p>
          </Link>
          <div
            className="relative"
            onMouseEnter={() =>
              setHeaderHover({ ...headerHover, categoriesHover: true })
            }
            onMouseLeave={() =>
              setHeaderHover({ ...headerHover, categoriesHover: false })
            }
          >
            <p>Categories</p>

            {/*used to prevent quitting of hovering when user transition from icon to register*/}
            <div
              className={`${
                !headerHover.categoriesHover
                  ? "hidden"
                  : "absolute top-2 bg-transparent h-8 w-20"
              }`}
            ></div>

            <div
              className={`${
                headerHover.categoriesHover
                  ? "absolute p-4 columns-3 top-10 left-[-2em] overflow-hidden shadow-md shadow-slate-900/30 bg-gray-100 lg:w-[50vw] md:w-[75vw]"
                  : "hidden"
              }`}
            >
              {categories.map((categorie) => {
                return (
                  <p className="hover:text-primary cursor-pointer py-2 italic">
                    {" "}
                    <Link to={"/" + categorie.name}>{categorie.name} </Link>
                  </p>
                );
              })}
            </div>
          </div>
          <Link to="/">
            <p>Soldes</p>
          </Link>
          <div
            className="relative"
            onMouseEnter={() =>
              setHeaderHover({ ...headerHover, marquesHover: true })
            }
            onMouseLeave={() =>
              setHeaderHover({ ...headerHover, marquesHover: false })
            }
          >
            <p>Marques</p>

            {/*used to prevent quitting of hovering when user transition from icon to register*/}
            <div
              className={`${
                !headerHover.marquesHover
                  ? "hidden"
                  : "absolute top-2 bg-transparent h-8 w-20"
              }`}
            ></div>

            <div
              className={`${
                headerHover.marquesHover
                  ? "absolute py-4 columns-3 top-10 md:left-[-8em] lg:left-[-8em] overflow-hidden shadow-md shadow-slate-900/30 bg-gray-100 lg:w-[50vw] md:w-[75vw]"
                  : "hidden"
              }`}
            >
              {marques.map((marque) => {
                return (
                  <p className="hover:text-primary cursor-pointer py-2 italic text-center">
                    {" "}
                    <Link to={"/" + marque.name}>{marque.name} </Link>
                  </p>
                );
              })}
            </div>
          </div>
          <Link to="/">
            <p>Contacts</p>
          </Link>
        </div>
        <div className="hidden w-full md:flex basis-2/5 flex items-center border-2 border-solid rounded-full border-slate-900 ">
          <input
            className="appearance-none bg-transparent border-none rounded-l-full w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            aria-label="Full name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex items-center flex-shrink-0 bg-slate-900 hover:bg-slate-700 border-slate-900 hover:border-slate-700 text-sm border-[3px] text-white py-1 px-2 rounded-r-full"
            type="button"
            onClick={() => alert(search)}
          >
            <BsSearch className="mr-1" /> Rechercher
          </button>
        </div>
      </section>
      <hr/>
    </header>
  );
};

export default Header;
