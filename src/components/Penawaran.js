import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Penawaran1 from "./../assets/Penawaran1.jpeg"
import Penawaran2 from "./../assets/Penawaran2.jpeg"
import Penawaran3 from "./../assets/Penawaran3.jpeg"

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Penawarancard from "./Penawarancard";
import Penawarancardtu from "./Penawarancard";

export default function Penawaran(props) {
  const [ setSwiperRef] = useState(null);

  

  return (
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={25}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper col-lg-12"
      >
        <SwiperSlide>
          <a href="Home.js">
            <Penawarancardtu image={Penawaran1} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="Navigation.js">
            <Penawarancardtu image={Penawaran2} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="Home.js">
            <Penawarancardtu image={Penawaran3} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="Home.js">
            <Penawarancardtu image={Penawaran1} />
          </a>
        </SwiperSlide><SwiperSlide>
        <a href="Home.js">
            <Penawarancardtu image={Penawaran2} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="Home.js">
            <Penawarancardtu image={Penawaran3} />
          </a>
        </SwiperSlide>

      </Swiper>

  );
}



