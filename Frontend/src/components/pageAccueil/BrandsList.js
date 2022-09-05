import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";

const BrandsList = () => {
  const [brands, setBrands] = useState(null);

  const { brandsList } = useSelector(selectData);

  useEffect(() => {
    if (brandsList) {
      setBrands(brandsList);
    }
  }, [brandsList]);

  if (!brands) {
    return (
      <>
        <h5 className="text-center pt-6 pb-2 text-md md:text-xl lg:text-[22px] font-bold ">
          {" "}
          Faites des achats selon vos marques preférées{" "}
        </h5>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  } else {
    return (
      <section className="bg-white">
        <h5 className="text-center pt-6 pb-2 text-md md:text-xl lg:text-[22px] font-bold ">
          {" "}
          Faites des achats selon vos marques preférées{" "}
        </h5>
        <div className="flex items-center justify-center ">
          {brands.slice(0, 8).map((brand) => {
            return (
              <div
                key={brand._id}
                className=" w-[20%] my-2 flex justify-center w-[12%] md:w-[10%] "
              >
                <Link to={`/brand/${brand._id}`}>
                  <img
                    src={brand.url}
                    className="shrink-0 max-h-20 scale-[0.9] md:scale-[0.8] hover:scale-[1] md:hover:scale-[0.9]"
                    alt="brand"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default BrandsList;
