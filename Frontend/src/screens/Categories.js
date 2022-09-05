import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsPerCategories from "../components/listeProduits/ProductsPerCategories";

const Categories = () => {
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{ zIndex: 1000000000000 }}>
        <Header />
      </div>
      <div className="min-h-[60vh]">
        <ProductsPerCategories />
      </div>
      <Footer />
    </section>
  );
};

export default Categories;
