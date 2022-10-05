import React from "react";
import bitmap from "../Images/Bitmap (1).svg";
import bitmap1 from "../Images/Bitmap (2).svg";
import path from "../Images/Path.svg";

const FirstSection = () => {
  return (
    <div className="">
      <div className="lg:flex lg:ml-[250px]  gap-2">
        <img
          className="lg:w-[827px] lg:h-[626px] rounded-[10px] lg:mt-[55.5px] mt-[20px] "
          src={bitmap}
          alt=""
        />
        <img
          className="lg:h-[626px] hidden lg:block  mt-[55.5px] rounded-l-lg       "
          src={bitmap1}
          alt=""
        />
      </div>
      <h1 className="lg:absolute lg:top-[230px] font-body font-extrabold  lg:ml-[100px] lg:text-[55px] text-[40px] text-center ">
        Temukan Ruang <br /> Kerja Dimanapun
      </h1>
      <div className="lg:flex  ">
        <div className="lg:w-[491px] w-[310px] md:w-[491px] lg:h-[123px] h-[107px] lg:px-[28px] px-[10px] gap-[94px]  rounded-[10px] item-center  lg:absolute top-[430px] lg:ml-[100px]   bg-white flex shadow-lg shadow-[#404852] mt-[20px]  ">
          <div className="  ">
            <p className="text-[13px] pt-[32px] pb-[8px] font-body font-semibold  ">
              Temukan ruang Kerja di
            </p>
            <div className="flex gap-[31.13px]">
              <h1 className=" font-body font-semibold">Jakarta </h1>
              <img className="" src={path} alt="" />
            </div>
          </div>
          <div className="pt-[28px]">
            <button className="bg-[#FE753E] rounded-[10px] lg:h-[67px] h-[50px] lg:w-[190px] w-[120px] font-body font-extrabold  text-white ">
              Cari Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
