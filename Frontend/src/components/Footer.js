import React from "react";
import { GoMail } from "react-icons/go";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="py-6 bg-primary text-slate-900">
        <div className="flex flex-col items-center text-center ">
          <div className="flex items-center ">
            <GoMail className="mr-2 text-[25px]" />
            <p className="text-[22px]  font-[500] ">NEWSLETTER</p>
          </div>
          <p className="text-sm pt-2">
            Tendances, nouveautés, bons plans, abonnez-vous à la newsletter pour
            ètre informé des prochaines offres <br className="hidden md:block"/> dès qu'elles seront
            disponibles!
          </p>
          <div className="flex my-4">
            <input
              className="appearance-none bg-transparent border-none min-w-60 md:w-80 h-[40px] text-gray-700 text-sm py-1 px-2 leading-tight focus:outline-none"
              type="text"
              aria-label="Full name"
              placeholder="Adresse mail"
            />
            <button
              className="flex items-center flex-shrink-0 bg-slate-900 hover:bg-slate-700 border-slate-900 hover:border-slate-700 text-sm border-[3px] text-white py-1 px-2"
              type="button"
              onClick={() => alert("search")}
            >
              OK
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center text-center ">
          <p className="pb-2">SUIVEZ NOUS:</p>
          <div className="flex [&>*]:mx-2 [&>*]:text-[25px] ">
            <a href="https://www.facebook.com">
              <BsFacebook />
            </a>
            <a href="https://www.facebook.com">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com">
              <BsGithub />
            </a>
            <a href="https://www.facebook.com">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <hr/>
      <div className="py-2 text-center">
        <div className="flex flex-col sm:block md:divide-x md:divide-solid md:divide-gray-400 [&>*]:px-2 [&>*]:text-sm hover:[&>*]:underline hover:[&>*]:underline-offset-1">
          <a href="https://google.com">Terms of use</a>
          <a href="https://google.com">Privacy Policy</a>
          <a href="https://google.com">Cookies Policy</a>
          <a href="https://google.com">Terms and conditions</a>
          <a href="https://google.com">Sitemap</a>
        </div>
        <p className="font-bold text-sm py-2">&#169; BANANA MOON</p>
      </div>
    </footer>
  );
};

export default Footer;
