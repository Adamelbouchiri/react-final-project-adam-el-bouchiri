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
      <h1 className="text-4xl font-bold text-center py-5">FEATURED PRODUCTS</h1>
      <div className="py-5">
        <Swiper
          spaceBetween={0}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-7 px-32">
              <div className="">
                <img
                  className="relative duration-300 before:absolute before:content-[''] before:top-0 before:left-0 before:w-0 before:h-0 hover:before:w-full hover:before:h-full  hover:before:bg-black/30 w-[700px] pb-4"
                  src={Images.carouselImg2}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg3}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg1}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img className="w-[700px] pb-4" src={Images.item6} alt="" />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-7 px-32">
              <div className="">
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg4}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg5}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg6}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img className="w-[700px] pb-4" src={Images.carouselImg7} alt="" />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
