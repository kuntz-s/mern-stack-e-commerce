import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductsPagination from "../reusable/ProductsPagination";

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
    <div>
      <ProductsPagination  data ={productsList} count = {!productsList ? 10 : Math.ceil(productsList.length /5)}/>
    </div>
  );
};

export default ProductsPerCategories;
