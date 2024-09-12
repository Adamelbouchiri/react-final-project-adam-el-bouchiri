import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Images } from "../../constant";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomePage = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel1} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel2} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel3} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-6 bg-white p-16">
        <div>
          <img className="pb-5 w-96" src={Images.banner1} alt="" />
          <img className="w-96" src={Images.item3} alt="" />
        </div>
        <div>
          <img className="w-96" src={Images.item3} alt="" />
          <img className="pt-5 w-96" src={Images.banner2} alt="" />
        </div>
        <div>
          <img className="pb-5 w-96" src={Images.banner1} alt="" />
          <img className="w-96" src={Images.item2} alt="" />
        </div>
      </div>
    </div>
  );
};
