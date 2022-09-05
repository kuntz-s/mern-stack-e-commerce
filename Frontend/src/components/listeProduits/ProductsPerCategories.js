import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductsPagination from "../reusable/ProductsPagination";
import Breadcrumb from "../reusable/Breadcrumb";

const ProductsPerCategories = () => {
  const params = useParams();
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const getProductsByCategory = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_PROXY_URL}/api/products/category/${params.categoryId}`
      );
      setProductsList(result.data);
    };

    getProductsByCategory();
  }, [params.categoryId]);

  return (
    <section className = "px-4 py-4 bg-gray-100 ">
       {/***displaying breadcrumb */}
       <div>
          <Breadcrumb
            breadcrumbData={[
              {
                href:"none",
                name: !productsList ? 'aucun' : productsList[0].category.name,
              }
            ]}
          />
        </div>
      <ProductsPagination  data ={productsList} name={!productsList ? 'aucun' : productsList[0].category.name} count = {!productsList ? 10 : Math.ceil(productsList.length /5)} numElts = {5}/>
    </section>
  );
};

export default ProductsPerCategories;
