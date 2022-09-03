import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CategoriesList = () => {
  const [categories, setCategories] = useState(null);

  const { categoriesList } = useSelector(selectData);

  useEffect(() => {
    if (categoriesList) {
      setCategories(categoriesList);
    }
  }, [categoriesList]);

  if (!categories) {
    return (
      <>
        <h5 className="text-center pt-6 pb-2 text-md md:text-xl lg:text-[22px] font-bold ">
          {" "}
          Sélectionnez une catégorie de votre choix{" "}
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
          Sélectionnez une catégorie de votre choix{" "}
        </h5>

        {/** Categories list render for medium and superior screens */}
        <div className="hidden md:flex justify-center flex-wrap">
          {categories.map((category) => {
            return (
              <div
                key={category._id}
                className="text-center flex flex-col items-center text-break w-[20%] my-4"
              >
                <Link to={`/category/${category._id}`}>
                  <img
                    src={category.url}
                    className="rounded-full shrink-0 h-[125px] w-[125px] lg:h-[150px] lg:w-[150px] hover:scale-[1.1]"
                    alt="category"
                  />
                  <p className="text-slate-700 hover:text-primary pt-2">
                    {category.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        {/** Categories list render for small screens */}
        <div className="md:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
          >
            {categories.map((category) => {
              return (
                <SwiperSlide key={category._id}>
                  <div className="text-center flex flex-col items-center text-break my-4 ">
                    <Link to={`/categories/${category._id}`}>
                      <img
                        src={category.url}
                        className="rounded-full shrink-0 h-[125px] w-[125px] lg:h-[150px] lg:w-[150px] hover:scale-[1.2]"
                        alt="category"
                      />
                      <p className="text-slate-700 hover:text-primary pt-2 text-sm pb-4">
                        {category.name}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    );
  }
};

export default CategoriesList;
