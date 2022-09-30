import React from "react";
import bitmap from "../Images/Bitmap (1).svg";
import bitmap1 from "../Images/Bitmap (2).svg";
import path from "../Images/Path.svg";

const FirstSection = () => {
  return (
    <div>
      <div className="flex mt-[55px] gap-5 ml-[230px]">
        <img src={bitmap} alt="" />
        <img src={bitmap1} alt="" />
      </div>
      <h1 className="absolute top-[230px] ml-[200px] text-[55px]  ">
        Temukan Ruang <br /> Kerja Dimanapun
      </h1>

      <div className="w-[491px] h-[123px] px-[28px] gap-[94px]  rounded-[10px] absolute top-[430px] ml-[200px] bg-white flex shadow-lg shadow-[#404852]  ">
        <div className="  ">
          <p className="text-[13px] pt-[32px] pb-[8px]  ">
            Temukan ruang Kerja di
          </p>
          <div className="flex gap-[31.13px]">
            <h1 className="">Jakarta </h1>
            <img className="" src={path} alt="" />
          </div>
        </div>
        <div className="pt-[28px]">
          <button className="bg-[#FE753E] rounded-[10px] h-[67px] w-[190px]  text-white ">
            Cari Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
