import React from "react";
import bitmap4 from "../Images/Bitmap-4.png";
import bitmap3 from "../Images/Bitmap-3.png";
import bitmap2 from "../Images/Bitmap-2.png";
import bitmap1 from "../Images/Bitmap-1.png";
import bitmap from "../Images/Bitmap.png";

const SecondSection = () => {
  return (
    <div>
      <div className="flex justify-between  px-[200px] mt-[95px]   ">
        <h1 className="text-[30px]   ">
          Pilih Ruang Kerja <br /> Sesuai Keinginanmu
        </h1>
        <div className=" ">
          <p className="mb-[4px]   ">
            Kami yakin kamu akan menemukan ruang kerja yang sesuai dengan <br />
            keinginan dan seleramu. Kami memastikan kamu akan nyaman.
          </p>
          <p className="text-[#1EA59A]">Lihat semua jenis ruang kerja</p>
        </div>

      </div>
        <div className="flex gap-3 mt-10 px-6 ">
          <img className="w-[350px] h-[400px]  " src={bitmap4} alt="" />
          <img className="w-[350px] h-[400px]  " src={bitmap3} alt="" />
          <img className="w-[350px] h-[400px]  " src={bitmap2} alt="" />
          <img className="w-[350px] h-[400px]  " src={bitmap1} alt="" />
          <img className="w-[350px] h-[400px]  " src={bitmap} alt="" />
        </div>
    </div>
  );
};

export default SecondSection;
