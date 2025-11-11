import React from "react";
import BannerImage from "../../assets/banner1.jpeg";


function Banner() {
  return (
    <div className="relative w-full h-[25rem]">
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full h-full "
      />

      <div className="absolute left-0 right-0 top-20 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">

            <div className="text-5xl font-semibold text-white">
                Crypto Tracker
            </div>
            <div className="font-semibold text-center text-white tex-sm">
                Get all info regarding cryptocurrencies
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
