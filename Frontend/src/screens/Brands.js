import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsPerBrands from "../components/listeProduits/ProductsPerBrands";

const Categories = () => {
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{ zIndex: 1000000000000 }}>
        <Header />
      </div>
      <div className="min-h-[60vh]">
        <ProductsPerBrands />
      </div>
      <Footer />
    </section>
  );
};

export default Categories;
