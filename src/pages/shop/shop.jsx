import React from "react";

export const Shop = () => {
  return (
    <div>
      <div className="flex blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50">
        <div>Products</div>
      </div>

      <div className="p-20 flex">
        <div>
          <div className="pb-10">
            <h1 className="text-2xl font-bold pb-4">Categories</h1>
            <span className="block tracking-wider text-gray-400 cursor-pointer pb-2">
              Best seller(8 Items)
            </span>
            <span className="block tracking-wider text-gray-400 cursor-pointer pb-2">
              Featured(8 Items)
            </span>
            <span className="block tracking-wider text-gray-400 cursor-pointer pb-2">
              Man(8 Items)
            </span>
            <span className="block tracking-wider text-gray-400 cursor-pointer pb-2">
              Women(8 Items)
            </span>
          </div>

          <div className="pb-10">
            <h1 className="text-2xl font-bold pb-4">Color</h1>
            <div className="mb-3">
              <input type="checkbox" name="" id="black" />
              <label className="ps-2 text-xl" htmlFor="black">
                Black
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" name="" id="white" />
              <label className="ps-2 text-xl" htmlFor="white">
                White
              </label>
            </div>
            <div>
              <input type="checkbox" name="" id="grey" />
              <label className="ps-2 text-xl" htmlFor="grey">
                Grey
              </label>
            </div>
          </div>

          <div className="">
          <h1 className="text-2xl font-bold pb-4">Price</h1>
            <div className="mb-3">
              <input type="checkbox" name="" id="0-20" />
              <label className="ps-2 text-l" htmlFor="0-20">
                $0-$20
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" name="" id="20-40" />
              <label className="ps-2 text-l" htmlFor="20-40">
                $20-$40
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
