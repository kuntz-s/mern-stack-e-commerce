import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductStructure from "./ProductStructure";

const ProductsPagination = (props) => {
  const productsList = props.data;
  console.log(productsList);
  const [data, setData] = useState(productsList);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const end = 5 * pageNumber;
    if (productsList) {
      setData(productsList.slice(end-5, end));
    }
  }, [pageNumber, productsList]);

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
      <section>
        
        {/* we will display here the products lists slice into a specified number of items */}
        <div className="grid grid-cols-5 gap-4">
          {data.map((product) => {
            return (
              <div className="border border-primary w-full " key={product._id}>
                <ProductStructure
                  product={[product]}
                  tag={"none"}
                />
              </div>
            );
          })}
        </div>

        <Stack spacing={2}>
          <Pagination
            count={props.count}
            page={pageNumber}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              setPageNumber(parseInt(value));
            }}
          />
        </Stack>
      </section>
    );
  }
};

export default ProductsPagination;
