import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useWindowSize } from "react-use";
import ProductStructure from "./ProductStructure";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ProductsCarouselDisplay = (props) => {
  const productsList = props.data;
  const {width} = useWindowSize(); // 768, 640

  if (!productsList) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "25px 0px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div className="px-4">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={width >= 1024 ? 5 : width <1024 && width >= 768 ? 4 : width < 768 && width >= 640 ? 3 : 2}
         /* autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}*/
          navigation={false}
          pagination={{ clickable: true }}
          loop={true}
        >
            {productsList.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductStructure product={Array.isArray(product) ? product : [product]} tag={props.tag} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
};

export default ProductsCarouselDisplay;
