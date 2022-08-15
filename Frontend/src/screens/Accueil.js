import React from "react";
import Header from "../components/Header";
import Carousel from "../components/pageAccueil/Carousel";
import CategoriesList from "../components/pageAccueil/CategoriesList";
import BrandsList from "../components/pageAccueil/BrandsList";

const Accueil = () => {
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{zIndex:1000000000000}}>
        <Header />
      </div>

      <main>
        <Carousel />
        <CategoriesList />
        <BrandsList />
        <div className="container mx-auto bg-yellow-400/10 mt-5 h-[150vh] border-2 border-solid border-stale-900"></div>  
      </main>
    </section>
  );
};

export default Accueil;
