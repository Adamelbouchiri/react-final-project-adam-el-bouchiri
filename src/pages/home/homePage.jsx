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
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner1}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Dresses
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item3}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              watches
            </button>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item3}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Watches
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner2}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Footerwear
            </button>
          </div>
        </div>
        <div>
        <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner1}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Dresses
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item2}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Shoes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
