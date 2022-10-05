import React from "react";
import bitmap4 from "../Images/Bitmap-4.png";
import bitmap3 from "../Images/Bitmap-3.png";
import bitmap2 from "../Images/Bitmap-2.png";
import bitmap1 from "../Images/Bitmap-1.png";
import bitmap from "../Images/Bitmap.png";

const SecondSection = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between text-center  lg:px-[200px] lg:mt-[95px] mt-[50px]  ">
        <h1 className="text-[30px] font-body font-bold   ">
          Pilih Ruang Kerja <br /> Sesuai Keinginanmu
        </h1>
        <div className=" ">
          <p className="mb-[4px] font-body font-normal   ">
            Kami yakin kamu akan menemukan ruang kerja yang sesuai dengan <br />
            keinginan dan seleramu. Kami memastikan kamu akan nyaman.
          </p>
          <p className="text-[#1EA59A] font-body font-bold ">Lihat semua jenis ruang kerja</p>
        </div>

      </div>
        <div className="lg:flex md:grid grid-cols-3 gap-3 mt-10 lg:px-6 ">
          <img className="lg:w-[350px] w-full px-[10px] h-[400px] mb-[]  " src={bitmap4} alt="" />
          <img className="lg:w-[350px] w-full px-[10px] h-[400px] mb-[]  " src={bitmap3} alt="" />
          <img className="lg:w-[350px] w-full px-[10px] h-[400px] mb-[]  " src={bitmap2} alt="" />
          <img className="lg:w-[350px] w-full px-[10px] h-[400px] mb-[]  " src={bitmap1} alt="" />
          <img className="lg:w-[350px] w-full px-[10px] h-[400px] mb-[]  " src={bitmap} alt="" />
        </div>
    </div>
  );
};

export default SecondSection;
