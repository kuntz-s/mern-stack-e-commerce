import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
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

  /** price min and max for the material ui slider */
  const [sliderValue, setSliderValue] = useState([20, 37]);

  /** display filter options on small screen  */
  const [displayFilter, setDisplayFilter] = useState(false);

  /**price min distance for the material ui slider */
  const minDistance = 10;

  useEffect(() => {
    const end = numElts * pageNumber;
    if (productsList) {
      setData(productsList.slice(end - numElts, end));
    }
  }, [pageNumber, productsList, numElts]);

  /**handlechange function when modifying price slider */
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setSliderValue([
        Math.min(newValue[0], sliderValue[1] - minDistance),
        sliderValue[1],
      ]);
    } else {
      setSliderValue([
        sliderValue[0],
        Math.max(newValue[1], sliderValue[0] + minDistance),
      ]);
    }
  };

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
          <div className="border-2 md:col-span-1 bg-white shadow-md shadow-slate-900/20 rounded-md py-2 my-2 md:my-0">
            <div className="flex justify-between items-center py-1 px-2">
              <p className=" font-bold ">Filtrer par</p>
              <p className="md:hidden text-[25px] hover:text-primary" onClick={() => setDisplayFilter(!displayFilter)}>
                <MdKeyboardArrowDown className={`${displayFilter? 'hidden' : 'block'}`} /> <MdKeyboardArrowUp className={`${ !displayFilter? 'hidden' : 'block'}`}/>
              </p>
            </div>

            <div className={`${displayFilter? 'block': 'hidden'} md:block`}>
              {/**price filtering */}
              <div className="px-2 py-1 border">
                <div className="flex justify-between">
                  <p className="font-bold">Prix</p>
                  <p className="text-primary font-bold hover:cursor-pointer">
                    Appliquer
                  </p>
                </div>
                <Box>
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={sliderValue}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={(value) => {
                      return `${value}°C`;
                    }}
                    disableSwap
                  />
                </Box>
                <p className="text-center font-bold ">
                  {sliderValue[0]}$ - {sliderValue[1]}$
                </p>
              </div>

              {/**stars rating */}
              <div className="py-2  border border-b-1">
                <p className="font-bold px-2">Notation</p>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    transform: "scale(0.9)"
                  }}
                >
                  {[...Array(4)].map((e, i) => {
                    const star = (i - 4) * -1;
                    return (
                      <div
                        className="flex items-center hover:font-bold"
                        key={i}
                      >
                        <input
                          type="radio"
                          name="fav_language"
                          value={star}
                          className="scale-[1.2] mr-1"
                        />
                        <Rating name="read-only" value={star} readOnly />
                      </div>
                    );
                  })}
                </Box>
              </div>

              {/**discount */}
              <div className="py-2 px-2 border border-b-1">
                <p className="font-bold ">Solde</p>
                {[80, 60, 40, 20].map((e, i) => {
                  const star = (i - 4) * -1;
                  return (
                    <div className="flex items-center hover:font-bold" key={i}>
                      <input
                        type="radio"
                        name="fav_language"
                        value={star}
                        className="scale-[1.2] mr-2"
                      />
                      <span>{e}% et plus</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

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
                  <span className="font-bold">Classer par : </span>
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
              <Stack spacing={2} sx={{ padding: 2 }}>
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
