import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductStructure from "./ProductStructure";

const sortList = [
  "Popularité",
  "Ordre Alphabétique",
  "Plus récent ",
  "Plus ancien",
];

const ProductsPagination = (props) => {
  const productsList = props.data,
    numElts = props.numElts;
  const [data, setData] = useState(productsList);
  const [sortParams, setSortParams] = useState({
    clicked: false,
    name: sortList[0],
  });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const end = numElts * pageNumber;
    if (productsList) {
      setData(productsList.slice(end - numElts, end));
    }
  }, [pageNumber, productsList, numElts]);

  if (!data) {
    return (
      <>
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
      <section className="overflow-hidden">
        <div className="md:grid md:grid-cols-5 md:gap-4 py-2">
          <div className="border-2 md:col-span-1 bg-white shadow-md shadow-slate-900/20 rounded-md"></div>

          {/* we will display here the products lists slice into a specified number of items */}
          <div className="md:col-span-4 bg-white shadow-md shadow-slate-900/20 rounded-md">
            {/**display category name, number of items and filter options */}
            <div className="flex justify-between items-center py-1 px-2 md:px-4 border-b">
              <p>
                <span className="font-bold uppercase">{props.name}</span>{" "}
                <span className="text-slate-400">
                  {" "}
                  ({productsList.length} élements trouvés )
                </span>
              </p>
              <div className="relative text-sm md:text-[16px]">
                <p
                  className={`p-2 ${
                    sortParams.clicked
                      ? "bg-gray-200 rounded-md"
                      : "hover:cursor-pointer hover:text-primary"
                  }`}
                  onClick={() => {
                    setSortParams({
                      ...sortParams,
                      clicked: !sortParams.clicked,
                    });
                  }}
                >
                  <span className="font-bold">Trier par : </span>
                  <span> {sortParams.name}</span>
                </p>
                <div
                  className={`${
                    sortParams.clicked
                      ? "absolute top-[90%] right-0 rounded-md bg-white shadow-md shadow-slate-900/60 min-w-[13vw] p-4 text-md"
                      : "hidden"
                  }`}
                  style={{ zIndex: 10 }}
                >
                  {sortList.map((elt, index) => {
                    return (
                      <p
                        className={`${
                          elt !== sortParams.name
                            ? "hover:text-primary hover:cursor-pointer font-light "
                            : " font-bold"
                        } py-1 `}
                        key={index}
                        onClick={() => {
                          setSortParams({
                            ...sortParams,
                            name: elt,
                            clicked: false,
                          });
                        }}
                      >
                        {elt}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/**displaying products list */}
            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-4 px-2 md:px-4 ">
              {data.map((product) => {
                return (
                  <div className="w-full " key={product._id}>
                    <ProductStructure product={[product]} tag={"none"} />
                  </div>
                );
              })}
            </div>

            {/**pagination display */}
            <div className="flex justify-center">
              <Stack spacing={2} sx={{padding:2}}>
                <Pagination
                  count={props.count}
                  page={pageNumber}
                  variant="outlined"
                  color="primary"
                  shape="rounded"
                  onChange={(e, value) => {
                    setPageNumber(parseInt(value));
                  }}
                />
              </Stack>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductsPagination;
