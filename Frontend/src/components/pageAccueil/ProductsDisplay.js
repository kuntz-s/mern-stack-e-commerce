import React, { useEffect, useState } from "react";
import ProductsCarouselDisplay from "../reusable/ProductsCarouselDisplay";
import axios from "axios";
import { Link } from "react-router-dom";

const popularProductsUrl = "/api/products/popular";
const newProductsUrl = "/api/products/new";
const categoriesUrl = "/api/categories";

const ProductsDisplay = () => {
  const [products, setProducts] = useState({
    newProducts: null,
    popularProducts: null,
    selectedProduct: null,
  });
  const [categories, setCategories] = useState({
    categoriesList: [],
    selectedId: null,
  });

  useEffect(() => {
    if (!categories.selectedId) {
      Promise.all([
        axios.get(newProductsUrl),
        axios.get(popularProductsUrl),
        axios.get(categoriesUrl),
      ])
        .then(
          axios.spread((...responses) => {
            setProducts((prev) => ({
              ...prev,
              newProducts: responses[0].data,
              popularProducts: responses[1].data,
            }));
            setCategories((prev) => ({
              ...prev,
              categoriesList: responses[2].data,
              selectedId:
                responses[2].data.length > 0 ? responses[2].data[0]._id : null,
            }));
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    } else {
      axios
        .get(`/api/products/category/${categories.selectedId}`)
        .then((response) => {
          setProducts((prev) => ({ ...prev, selectedProduct: response.data.length > 5 ?response.data.slice(0,5) : response.data }));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [ categories.selectedId]);
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
        <ProductsCarouselDisplay data={products.newProducts} tag="new" />
      </section>

      {/**this section will be used to display informations about popular products */}
      <section>
        <div className="relative pt-6 pb-2 mx-2 mb-8 ">
          <hr className="border border-slate-900" />
          <div className="absolute top-3 left-[30%] md:left-[35%] lg:left-[40%]">
            <h5 className=" px-6 bg-white text-md md:text-xl lg:text-[22px] font-bold ">
              PRODUITS POPULAIRES
            </h5>
            <Link to="products/popular">
              <p className="text-center text-sm hover:underline hover:underline-offset-1 font-bold">
                {" "}
                Voir plus{" "}
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <ProductsCarouselDisplay
            data={products.popularProducts}
            tag="popular"
          />
        </div>
      </section>

      {/**this section will be used to display informations about selected products for each categories */}
      <section>
        <div className="relative pt-6 pb-2 mx-2 mb-4 ">
          <hr className="border border-slate-900" />
          <h5 className="absolute top-3 left-[30%] md:left-[35%] lg:left-[40%] px-6 bg-white text-md md:text-xl lg:text-[22px] font-bold ">
            PARCOURIR LES PRODUITS
          </h5>
        </div>
        <div className="flex justify-around flex-wrap mb-4">
          {categories.categoriesList.map((category) => {
            return (
              <div key={category._id}>
                <button
                  type="button"
                  className={`px-2 py-2 text-sm md:text-[17px] my-1 rounded-full  ${
                    category._id !== categories.selectedId
                      ? "bg-slate-900 text-white border border-slate-900 hover:bg-slate-300 hover:text-slate-900"
                      : "bg-white border border-slate-900 text-slate-900"
                  }`}
                  onClick={() =>
                    setCategories({ ...categories, selectedId: category._id })
                  }
                >
                  {category.name}
                </button>
              </div>
            );
          })}
        </div>
        <ProductsCarouselDisplay data={products.selectedProduct} tag="none" />
      </section>
    </>
  );
};

export default ProductsDisplay;
