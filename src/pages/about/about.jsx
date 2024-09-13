import React from "react";
import { Images } from "../../constant";

export const About = () => {
  return (
    <div>
      <div className="relative">
        <img src={Images.carousel3} alt="" />
        <h1 className="absolute text-6xl text-white font-bold top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
          About
        </h1>
      </div>

      <div className="flex p-16 gap-16 justify-center">
        <img className="w-[350px]" src={Images.carouselImg2} alt="" />
        <div className="w-[700px]">
          <h1 className="text-2xl pb-5">Our story</h1>
          <p className="leading-7 text-gray-400 pb-6">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <p className="ps-5 py-5 border-s-2 border-gray-300 text-gray-400">
            Creativity is just connecting things. When you ask creative people
            how they did something, they feel a little guilty because they
            didn't really do it, they just saw something. It seemed obvious to
            them after a while.
          </p>
        </div>
      </div>
    </div>
  );
};
