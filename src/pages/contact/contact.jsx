import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="flex blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50">
        <div>News</div>
      </div>

      <div className="py-20 flex justify-center gap-14">
        <div>
          <iframe
            width="500px"
            height="500px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lionsgeek%20ain%20sbaa+(lionsGeek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
        <div className="w-[500px]">
          <h1 className="text-2xl tracking-widest pb-6">
            Send us your message
          </h1>
          <input
            className="p-3 border outline-none w-full mb-6 border-gray-300"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="p-3 border outline-none w-full mb-6 border-gray-300"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="p-3 border outline-none w-full mb-6 border-gray-300"
            type="text"
            placeholder="Enter Your Phone"
          />
          <textarea
            className="p-3 border outline-none w-full h-[130px] mb-2 border-gray-300"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button className="block mt-5 py-3 px-10 text-l rounded bg-black text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
