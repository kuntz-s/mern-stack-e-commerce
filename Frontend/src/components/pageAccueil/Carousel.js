import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const carousel1 = require("../../assets/Electronics.png")

const Carousel = () => {
  return (
    <section className="-z-1000">
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
      // autoplay={{
        //  delay: 2500,
       //   disableOnInteraction: false,
       // }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide >
          <div className="bg-gray-200 relative h-[50vh] md:h-[75vh]">
            <div className="absolute left-[3%] lg:left-[6%] top-[25%] text-center ">
              <p className="text-xl lg:text-2xl">Bienvenue sur </p>
                <h1 className="text-4xl lg:text-5xl font-bold mt-2">PROSHOP</h1>
                <p className='hidden md:block font-medium my-3 text-md lg:text-xl'>Votre magasin de vente de produits electroniques en ligne</p>
                <p className=' md:hidden font-medium my-3 text-sm'>Votre magasin de vente <br/>de produits electroniques en ligne</p>
                <button
                  type="button"
                  className="bg-primary text-md lg:text-xl text-white border border-solid border-primary px-3 py-2 mt-2 hover:bg-gray-200 hover:border-1 hover:border-solid hover:border-primary hover:text-primary"
                >
                  &#8594; Parcourir
                </button>
            </div>
            <img src={carousel1} alt="carousel " className=" block absolute top-[0] right-[-80px]  md:right-[-100px] lg:right-0 md:top-0 drop-shadow-2xl scale-50 md:scale-60 lg:scale-90" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel; 