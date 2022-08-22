import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/pageAccueil/Carousel";
import CategoriesList from "../components/pageAccueil/CategoriesList";
import BrandsList from "../components/pageAccueil/BrandsList";
import ProductsDisplay from "../components/pageAccueil/ProductsDisplay";

const Accueil = () => {
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{zIndex:1000000000000}}>
        <Header />
      </div>

      <main>
        <Carousel />
        <CategoriesList />  
        <ProductsDisplay />
        <BrandsList />
      </main>
      <Footer/>
    </section>
  );
};

export default Accueil;
