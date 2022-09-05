import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductsPagination from "../reusable/ProductsPagination";
import Breadcrumb from "../reusable/Breadcrumb";

const ProductsPerBrands = () => {
  const params = useParams();
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const getProductsByBrand = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_PROXY_URL}/api/products/brand/${params.brandId}`
      );
      setProductsList(result.data);
    };

    getProductsByBrand();
  }, [params.brandId]);

  return (
    <section className = "px-4 py-4 bg-gray-100 ">
       {/***displaying breadcrumb */}
       <div>
          <Breadcrumb
            breadcrumbData={[
              {
                href:"none",
                name: !productsList ? 'aucun' : productsList[0].brand.name,
              }
            ]}
          />
        </div>
      <ProductsPagination  data ={productsList} name={!productsList ? 'aucun' : productsList[0].brand.name} count = {!productsList ? 10 : Math.ceil(productsList.length /5)} numElts = {5}/>
    </section>
  );
};

export default ProductsPerBrands;
