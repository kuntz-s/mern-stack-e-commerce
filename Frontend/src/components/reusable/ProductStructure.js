import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const newImg = require('../../assets/new.png');

const ProductStructure = (props) => {
  const product = props.product;
  const [changeImg, setChangeImg] = useState(null);

  const calculate = (original , reduced) => {
    let discount = 0;
    discount = ((original - reduced) * 100) / (original);
    return Math.ceil(discount);
  }

  return (
    <div className="flex justify-center mb-4">
      {product.map((elt, index) => {
        return (
          <div className=" w-[60%] md:w-[65%] " key={elt._id}>
            <Link
              to={`/api/product/category/${elt._id}`}
              className="relative flex justify-center items-center "
            >
              <img
                src={elt.image[changeImg === index ? 1 : 0]}
                className="h-[100px] md:h-[150px] max-w-full max-h-[150px]   "
                alt="productImg"
                onMouseOver={() => {
                  setChangeImg(index);
                }}
                onMouseOut={() => {
                  setChangeImg(null);
                }}
              />
              <img src={newImg} alt="new tag" className={`${props.tag==="new" ?'h-8 w-8 md:h-12 md:w-12 absolute top-[-2px] md:top-[-4px] left-[-4px]' : 'hidden'}`} />
              <p className={`${elt.discount ===  0 ? 'hidden' : "absolute top-[-2px] right-0 p-1 text-sm font-bold bg-primary text-white"}`}>- {calculate(elt.price, elt.discount)}%</p>
            </Link>
            <div className="py-3">
              <Link to={`/api/product/brand/${elt._id}`}>
                <p className="hover:underline hover:underline-offset-1 font-bold text-sm md:text-[16px] break-words text-ellipsis overflow-hidden ">
                  {elt.name}
                </p>
              </Link>
              <div className="text-sm font-bold text-slate-500 hover:[&>*]:underline hover:[&>*]:underline-offset-">
                <Link to={`/api/product/${elt.category._id}`}>
                  <span>{elt.category.name}</span>
                </Link>
                <span> {'>  '}</span>
                <Link to={`/api/product/${elt.brand._id}`}>
                  <span>{elt.brand.name}</span>
                </Link>
              </div>
              <Box
                sx={{display:'flex', alignItems:'center',marginLeft:"-13%", transform:'scale(0.8)'}}
              >
                <Rating name="read-only" value={elt.rating} readOnly /> <Link to = {`/api/product/${elt._id}`}> <span className="hover:underline hover:underline-offset-1 pl-1 font-bold">{elt.numReviews}</span></Link>
              </Box>
              <div className="flex items-center">
                <p className={`${elt.discount ===  0 ? 'hidden' : 'line-through text-slate-400 text-sm mr-1'}`}>${elt.discount}</p>
                <p className="text-lg font-bold">${elt.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductStructure;

