import { useState, useEffect } from "react";
import { currencies, languages, categories, marques } from "../Constants";
import { useNavigate, Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ReactCountryFlag from "react-country-flag";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import {
  BsPerson,
  BsHeart,
  BsCart3,
  BsSearch,
  BsX,
  BsPersonPlusFill,
  BsPersonFill,
  BsFillTelephoneFill,
  BsApple,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdDashboard, MdHome, MdMoneyOff, MdHelp } from "react-icons/md";

const logo = require("../assets/logo.png");

const Header = () => {
  const navigate = useNavigate();
  //store scroll position
  const [offset, setOffset] = useState(null);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

  //get page scroll position
  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

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
    marquesHover: false,
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

  //show slide when clicking on the burger icon (display only in mobile view)
  const [showSlide, setShowSlide] = useState(false);

  //handle brands, categories cascader on mobile view
  const [mobileCascader, setMobileCascader] = useState(null);

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

  const IconLinks = (props) => {
    return (
      <div
        className={`${
          offset <= 0 && props.hide ? "hidden" : ""
        }  basis-1/5 shrink-0 flex justify-end items-center divide-x divide-solid divide-gray-400 [&>*]:text-xl [&>*]:px-2 hover:[&>*]:text-primary`}
      >
        <div className={`shrink-0`}>
          <ReactCountryFlag
            countryCode={location.country_code}
            svg
            style={
              offset > 0
                ? { display: "none" }
                : { height: "1.5em", width: "1.5em" }
            }
          />
          <BsSearch
            className={`${
              offset <= 0 ? "hidden" : "font-[15px] cursor-pointer"
            } `}
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
          <BsPerson className="cursor-pointer "/>

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
            <button
              className="rounded-full w-full bg-primary hover:bg-primary/80 hover:border-primary/80 text-white border border-solid border-primary"
              onClick={() => navigate("/inscription")}
            >
              S'inscrire
            </button>
            {/*horizontal line with text center on it*/}
            <div className="relative">
              <hr />
              <p className="absolute top-[-16px] left-[82px] bg-white m-0 px-1 text-gray-400">
                ou
              </p>
            </div>
            <button
              className="rounded-full w-full bg-transparent text-primary hover:bg-gray-200/50 border border-solid border-primary "
              onClick={() => navigate("/connexion")}
            >
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
            <ReactTooltip id="panier" place="bottom" effect="float">
              Vous avez 0 élements dans votre panier
            </ReactTooltip>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <header className=" mx-4 ">
      {/*top header section*/}
      <section
        className={` ${
          offset > 0 ? "md:hidden" : ""
        } hidden md:flex md:flex-row  min-w-full `}
      >
        <div
          className={`flex items-center basis-1/5 divide-x  divide-gray-400 divide-gray-400`}
        >
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
                  : "block shadow-md  shadow-slate-900/30 absolute rounded-md bg-white md:top-[3.5rem] lg:top-[2rem] min-w-[220px] px-2 py-2 "
              }`}
            >
              <p className="font-bold">Paramètres</p>
              {/*selecting language preference*/}
              <div>
                <p className="text-gray-400 text-sm mt-2 mb-1"> Langage</p>
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
                <p className="text-gray-400 text-sm mt-2 mb-1"> Devise</p>
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
                  className="bg-primary text-white px-2 py-1 mt-2 font-bold hover:bg-primary/70"
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
        <IconLinks hide={false} />
      </section>
      <section className="hidden md:flex md:flex-row  min-w-full py-1">
        {/*insert logo to top left when position sticky */}
        <div className={`${offset > 0 ? "basis-1/5 shrink-0" : "hidden"}`}>
          <img src={logo} alt="logo" className="h-10 w-[150px]" />
        </div>

        <div
          className={`flex basis-3/5 items-center ${
            offset > 0 ? "justify-between" : "justify-around"
          } font-bold [&>*]:cursor-pointer [&>*]:border-b-2 [&>*]:border-transparent hover:[&>*]:border-primary`}
        >
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
                  ? `absolute p-4 columns-3 top-10  ${
                      offset > 0
                        ? "lg:left-[-4em] md:left-[-8em]"
                        : "left-[-2em]"
                    } shadow-md shadow-slate-900/30 bg-gray-100 lg:w-[50vw] md:w-[75vw]`
                  : "hidden"
              }`}
            >
              {categories.map((categorie) => {
                return (
                  <p
                    key={categorie.id}
                    className="hover:text-primary cursor-pointer py-2 italic"
                  >
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
                  ? `absolute py-4 columns-3 top-10 ${
                      offset > 0
                        ? "lg:left-[-16em] md:left-[-22em]"
                        : "lg:left-[-8em] md:left-[-8em]"
                    }  shadow-md shadow-slate-900/30 bg-gray-100 lg:w-[50vw] md:w-[75vw]`
                  : "hidden"
              }`}
            >
              {marques.map((marque) => {
                return (
                  <p
                    key={marque.id}
                    className="hover:text-primary cursor-pointer py-2 italic text-center"
                  >
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
        <div
          className={`hidden ${
            offset > 0 ? "md:hidden" : ""
          } w-full md:flex basis-2/5 flex items-center border-2 border-solid rounded-full border-slate-900 `}
        >
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

        {/*insert icon links to top right when position sticky */}
        <IconLinks hide={true} />
      </section>
      {/**
       * Section which will be displayed when in small screen
       */}
      <section className="flex items-center  md:hidden min-w-full ">
        <div className=" basis-1/5 cursor-pointer hover:text-primary">
          <GiHamburgerMenu
            className="text-[23px]"
            onClick={() => setShowSlide(true)}
          />
        </div>
        <div className="shrink-0 flex justify-center items-center basis-2/5 ">
          <img
            src={logo}
            className="scale-[0.8] ml-[15%] cursor-pointer"
            onClick={() => navigate("/")}
            alt="logo"
          />
        </div>
        <div className="flex justify-end basis-2/5 divide-x divide-solid divide-gray-400 [&>*]:text-[35px] [&>*]:px-2 hover:[&>*]:cursor-pointer hover:[&>*]:text-primary">
          <BsSearch />
          <BsHeart />
          <BsCart3 />
        </div>

        {/**
         * slide that will render when clicking on burger icon
         */}
        <div
          className={`${
            showSlide ? "" : "hidden"
          } fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-slate-900/40`}
        >
          {/*icon which will close the slide when clicking on it*/}
          <BsX
            className="absolute top-0 right-[12%] bg-white text-[40px] hover:cursor-pointer hover:text-primary"
            onClick={() => setShowSlide(false)}
          />

          {/*slide content*/}
          <div className="min-h-[100vh] w-[80%] bg-white">
            {/**top part in which we will display the flag , the language choice and the currency choice */}
            <div className="bg-primary text-white divide-x divide-solid divide-white flex justify-center items-center py-1">
              <ReactCountryFlag
                className="mx-2"
                countryCode={location.country_code}
                svg
                style={{ height: "1.7em", width: "1.7em" }}
              />
              {/*for selecting language preference */}
              <div className="flex items-center">
                <select
                  className="form-select form-select-sm
                          appearance-none 
                         cursor-pointer
                          pl-2
                          text-md
                          text-white
                          bg-primary bg-clip-padding bg-no-repeat
                          transition
                          ease-in-out
                          m-0
                          focus:text-white focus:bg-primary/50 focus:border-gray-300 focus:outline-none"
                  aria-label=".form-select-sm example"
                  onChange={(e) =>
                    setLangCur({ ...langCur, language: e.target.value })
                  }
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
                <MdKeyboardArrowDown className="text-white mr-2" />
              </div>

              {/*for selecting currency preference */}
              <div className="flex items-center">
                <select
                  className="form-select form-select-sm
                  appearance-none 
                 cursor-pointer
                  pl-2
                  text-md
                  text-white
                  bg-primary bg-clip-padding bg-no-repeat
                  transition
                  ease-in-out
                  m-0
                  focus:text-white focus:bg-primary/50 focus:border-gray-300 focus:outline-none"
                  aria-label=".form-select-sm example"
                  onChange={(e) =>
                    setLangCur({ ...langCur, currency: e.target.value })
                  }
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
                <MdKeyboardArrowDown className="text-white" />
              </div>
            </div>

            {/*second part where we will display login and register icon*/}
            <div className="bg-primary/60 flex justify-around text-white px-[10%] py-2 ">
              <div
                className="flex flex-col items-center hover:bg-primary hover:bg-primary hover:shadow-md hover:shadow-slate-900/30 p-2 hover:cursor-pointer"
                onClick={() => navigate("/connexion")}
              >
                <div className="border border-white rounded-full p-2 ">
                  <BsPersonFill className="text-[150%]" />
                </div>
                <p className="text-md text-white ">Connexion</p>
              </div>
              <div
                className="flex flex-col items-center hover:bg-primary hover:shadow-md hover:shadow-slate-900/30 p-2 hover:cursor-pointer"
                onClick={() => navigate("/inscription")}
              >
                <div className="border border-white rounded-full p-2 ">
                  <BsPersonPlusFill className="text-[150%]" />
                </div>
                <p className="text-md text-white">Inscription</p>
              </div>
            </div>

            {/**third part where we will display links (home, categories , brands etc ...) */}
            <div className=" m-2  [&>*]:text-slate-500 [&>*]:text-md">
              {/**for accueil */}
              <div className="p-2 border border-slate-300 hover:cursor-pointer hover:bg-primary hover:text-white">
                <Link to="/" className="flex items-center"><MdHome className="mr-1"/>Accueil</Link>
              </div>
              {/**for categories */}
              <div>
                <div
                  className="relative border border-slate-300 hover:cursor-pointer"
                  onClick={() => {
                    mobileCascader !== "cat"
                      ? setMobileCascader("cat")
                      : setMobileCascader(null);
                  }}
                >
                  <p className="p-2 flex items-center"><MdDashboard className="mr-1"/>Catégories</p>
                  <div className="absolute top-0 right-0  text-xl bg-primary h-full flex justify-center items-center p-1">
                    <MdKeyboardArrowDown
                      className={`${mobileCascader === "cat" ? "hidden" : ""}`}
                    />
                    <MdKeyboardArrowUp
                      className={`${mobileCascader !== "cat" ? "hidden" : ""}`}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    mobileCascader !== "cat" ? "hidden" : ""
                  } shadow-md shadow-slate-900/30 py-1 mb-1`}
                >
                  {categories.map((categorie) => {
                    return (
                      <p
                        key={categorie.id}
                        className="hover:bg-primary pl-4 hover:text-white cursor-pointer "
                      >
                        {" "}
                        <Link to={"/" + categorie.name}>{categorie.name} </Link>
                      </p>
                    );
                  })}
                </div>
              </div>
              {/**for soldes */}
              <div className="p-2 border border-slate-300 hover:cursor-pointer hover:bg-primary hover:text-white">
                <Link to="/soldes" className="flex items-center"><MdMoneyOff className="mr-1"/> Soldes</Link>
              </div>
              {/**for brands */}
              <div>
                <div
                  className="relative border border-slate-300 hover:cursor-pointer"
                  onClick={() => {
                    mobileCascader !== "brand"
                      ? setMobileCascader("brand")
                      : setMobileCascader(null);
                  }}
                >
                  <p className="p-2 flex items-center"><BsApple className="mr-1"/>  Marques</p>
                  <div className="absolute top-0 right-0  text-xl bg-primary h-full flex justify-center items-center p-1">
                    <MdKeyboardArrowDown
                      className={`${mobileCascader === "brand" ? "hidden" : ""}`}
                    />
                    <MdKeyboardArrowUp
                      className={`${mobileCascader !== "brand" ? "hidden" : ""}`}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    mobileCascader !== "brand" ? "hidden" : ""
                  } shadow-md shadow-slate-900/30 py-1`}
                >
                  {marques.map((marque) => {
                    return (
                      <p
                        key={marque.id}
                        className="hover:bg-primary  pl-4 hover:text-white cursor-pointer "
                      >
                        {" "}
                        <Link to={"/" + marque.name}>{marque.name} </Link>
                      </p>
                    );
                  })}
                </div>
              </div>
              {/**for contacts */}
              <div className="p-2 border border-slate-300 hover:cursor-pointer hover:bg-primary hover:text-white">
                <Link to="/contacts" className="flex items-center"><BsFillTelephoneFill className="mr-1"/> Contacts</Link>
              </div>
              {/**for aides */}
              <div className="p-2 border border-slate-300 hover:cursor-pointer hover:bg-primary hover:text-white">
                <Link to="/aide" className="flex items-center"><MdHelp className="mr-1"/> Aide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </header>
  );
};

export default Header;
