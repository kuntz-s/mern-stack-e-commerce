import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductInfo from "../components/pageInfoProduit/ProductInfo";

const Product = () => {
  return (
    <section>
      <div className="sticky top-0 bg-white " style={{ zIndex: 1000000000000 }}>
        <Header />
      </div>
      <div className="min-h-[60vh]">
      <ProductInfo />
      </div>
      <Footer />
    </section>
  );
};

export default Product;
