import React, { useEffect, useState } from "react";
import ProductsCarouselDisplay from "../reusable/ProductsCarouselDisplay";
import axios from "axios";

const popularProductsUrl = "/api/products/popular";
const newProductsUrl = "/api/products/new";

const ProductsDisplay = () => {
  const [newProducts, setNewProducts] = useState(null);
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    Promise.all([axios.get(newProductsUrl), axios.get(popularProductsUrl)])
      .then(
        axios.spread((...responses) => {
          setNewProducts(responses[0].data);
          setPopularProducts(responses[1].data);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  return (
    <>
      {/**this section will be used to display informations about new products */}
      <section>
        <div className="relative pt-6 pb-2 mx-2 mb-8 ">
          <hr className="border border-slate-900" />
          <h5 className="absolute top-3 left-[30%] md:left-[35%] lg:left-[40%] px-6 bg-white text-md md:text-xl lg:text-[22px] font-bold ">
            NOUVEAUX PRODUITS
          </h5>
        </div>
        <ProductsCarouselDisplay data={newProducts} tag="new" />
      </section>

      {/**this section will be used to display informations about popular products */}
      <section>
      <div className="relative pt-6 pb-2 mx-2 mb-8 ">
          <hr className="border border-slate-900" />
          <h5 className="absolute top-3 left-[30%] md:left-[35%] lg:left-[40%] px-6 bg-white text-md md:text-xl lg:text-[22px] font-bold ">
            PRODUITS POPULAIRES
          </h5>
        </div>
        <ProductsCarouselDisplay data={popularProducts} tag="popular" />
      </section>
    </>
  );
};

export default ProductsDisplay;
