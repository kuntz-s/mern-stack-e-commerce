import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
import Breadcrumb from "../reusable/Breadcrumb";
import { BsCart, BsHeart, BsHeartFill } from "react-icons/bs";
import { calculate } from "../../Constants";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const ProductInfo = () => {
  const params = useParams();
  const [productData, setProductData] = useState(null);
  const [displayImg, setDisplayImg] = useState(0);
  const [productParams, setProductParams] = useState({
    favorite: false,
    quantity: 1,
  });

  useEffect(() => {
    const getProduct = async () => {
      const productInfo = await axios.get(
        `${process.env.REACT_APP_PROXY_URL}/api/products/${params.productId}`
      );
      setProductData(productInfo.data);
    };

    getProduct();
  }, [params]);

  if (!productData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <section className="mx-4 mt-4">
        {/***displaying breadcrumb */}
        <div>
          <Breadcrumb
            breadcrumbData={[
              {
                href: `/categories/${productData.category._id}`,
                name: productData.category.name,
              },
              {
                href: "none",
                name: productData.name,
              },
            ]}
          />
        </div>

        {/**displaying image and image info */}
        <div className="flex flex-col md:flex-row my-8">
          <div className="w-full md:w-[50%] flex md:pr-2">
            <div className="flex flex-col pr-4">
              {productData.image.slice(0, 5).map((img, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setDisplayImg(index)}
                  >
                    <img
                      src={img}
                      alt="imgButton"
                      className={`h-[55px] w-[50px] border hover:border-slate-700 my-1 px-1 py-1 ${
                        displayImg === index
                          ? "shadow shadow-md border-primary shadow-primary"
                          : "border-slate-300"
                      } `}
                    />
                  </button>
                );
              })}
            </div>
            <div className="w-full mt-1  flex justify-center ">
              <img
                src={productData.image[displayImg]}
                className="min-w-[80%] h-auto max-h-[68vh] "
                alt="productImg"
              />
            </div>
          </div>

          <div className="w-full md:w-[50%] md:pl-2 flex flex-col flex-wrap md:pl-2 pt-4 md:pt-[0px]">
            {/*product title*/}
            <h2 className="font-bold text-[25px]">{productData.name}</h2>{" "}
            {/*product rating*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-12%",
                transform: "scale(0.8)",
              }}
            >
              <Rating name="read-only" value={productData.rating} readOnly />{" "}
              <span className="pl-1 text-slate-400 text-xl ">
                {productData.numReviews} commentaires
              </span>
            </Box>
            {/**product price and discount info */}
            <div className="my-2">
              <div className={`${productData.discount !== 0 ? "hidden" : ""}`}>
                <p className="text-[25px] font-bold">${productData.price}</p>
              </div>
              <div className={`${productData.discount === 0 ? "hidden" : ""}`}>
                <div>
                  <div className="flex items-center">
                    <p className="text-primary text-[20px] font-bold">
                      - {calculate(productData.price, productData.discount)}%
                    </p>
                    <p className="text-[25px] font-bold ml-2">
                      ${productData.discount}
                    </p>
                  </div>
                  <p className="text-sm mr-2">
                    <span className="text-slate-400 ">Prix original : </span>
                    <span className="line-through text-slate-400">
                      ${productData.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/**description */}
            <p>
              <span className="font-bold">
                Description :<br />{" "}
              </span>
              <span>{productData.description}</span>
            </p>
            {/*product category, name , count in stock infos*/}
            <div className="my-2">
              <p className="font-bold">Infos supplémentaires:</p>
              <ul className="list-none">
                <li>
                  <span className="text-slate-500">Type :</span>{" "}
                  <span className="">{productData.category.name}</span>
                </li>
                <li>
                  <span className="text-slate-500">Marque :</span>{" "}
                  <span>{productData.brand.name}</span>
                </li>
                <li>
                  <span className="text-slate-500">En stock :</span>{" "}
                  <span>{productData.countInStock}</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              {/**quantity, cart, favorites */}
              <div className="flex justify-start items-center flex-wrap">
                <div>
                  <label htmlFor="quantity">Qté : </label>
                  <input
                    type="number"
                    min="1"
                    max={productData.countInStock}
                    name="quantity"
                    defaultValue={productParams.quantity}
                    onChange={(e) => {
                      if (!isNaN(e.target.value)) {
                        setProductParams({
                          ...productParams,
                          quantity: e.target.value,
                        });
                      }
                    }}
                    className="border border-slate-400 rounded-full py-2 pr-2 pl-3 lg:pr-3 lg:pl-4 text-center text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <Tooltip title="ajouter au panier" arrow>
                  <button
                    type="button "
                    className="border border-primary rounded-full py-2 px-4 lg:px-6 bg-primary text-md text-center text-white flex items-center mx-2 hover:shadow hover:shadow-slate-900 hover:shadow-md "
                  >
                    <BsCart className="mr-2" /> Ajouter Au Panier
                  </button>
                </Tooltip>

                <Tooltip title={!productParams.favorite ? "ajouter comme favoris" : "retirer comme favoris"} arrow>
                  <div
                    className={`border  py-2 px-2 rounded-full hover:shadow hover:shadow-md hover:shadow-slate-900 hover:cursor-pointer ${
                      !productParams.favorite
                        ? "border-slate-900"
                        : "text-primary border-primary"
                    }`}
                    onClick={(e) =>
                      setProductParams({
                        ...productParams,
                        favorite: !productParams.favorite,
                      })
                    }
                  >
                    <BsHeart className={`${!productParams.favorite ? "text-[25px] ": "hidden"}`} />
                    <BsHeartFill className={`${productParams.favorite ? "text-[25px] ": "hidden"}`} />
                  </div>
                </Tooltip>
              </div>

              {/*buy it now */}
              <div className="flex pt-4">
                <Tooltip title="acheter maintenant" arrow>
                  <Link to="/">
                    <button
                      type="button"
                      className=" py-2 px-[100px] text-sm md:text-[18px] md:px-[110px] rounded-full border-2 border-slate-900 text-center font-bold hover:bg-slate-900 hover:text-white"
                    >
                      Acheter maintenant
                    </button>
                  </Link>
                </Tooltip>
              </div>
            </div>
            {/**total */}
            <p className="my-4 font-bold text-xl text-center">
              <span>Total : </span>
              <span>
                {Math.round(
                  parseInt(productParams.quantity) *
                    (productData.discount === 0
                      ? productData.price
                      : productData.discount) *
                    100
                ) / 100}{" "}
                $
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductInfo;
/***
 * <div className="flex items-center justify-center" >
                  <img src={productData.image[displayImg]} className="min-w-[60%] max-h-[50%] border border-primary" alt="productImg"/>
              </div>
 */
