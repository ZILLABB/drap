import React from "react";
import path from "../Images/Path.png";

const ThirdSection = () => {
  return (
    <div className="flex pt-[83px] justify-between  ">
      <div className="pt-[210px] pl-[200px]  ">
        <h1 className="text-[30px] pb-[10px]   ">Kenepa Ruang Kerja?</h1>
        <p className="mb-[64px] ">
          Kami telah berpengalaman melayani ratusan ribu orang dalam menemukan
          ruang kerja idaman mereka
        </p>
        <h1 className="text-[80px] text-[#1EA59A] ">600+</h1>
        <p className="mb-[64px]">Ruang Kerja di seluruh Indonesia</p>
        <h1 className="text-[80px] text-[#1EA59A] ">135+</h1>
        <p>Staff yang siap membantu Anda</p>
      </div>

      <div className="bg-[#F6FAFA] w-[700px] h-[799px] pt-[210px]    gap-[30px]   ">
        <div className="flex gap-[30px] mb-[79px] text center justify-center   ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full  ">
            <div>
              <img className=" m-auto   pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px]">Reservasi Mudah</h1>
            <p className="text-[15px]   ">
              Proses pemesanan ruang kerja hanya <br /> membutuhkan waktu kurang
              dari 2 menit.
            </p>
          </div>
        </div>
        <div className="flex gap-[30px] mb-[79px] text center justify-center  ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full    ">
            <div>
              <img className="flex m-auto pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px]">Reservasi Mudah</h1>
            <p className="text-[15px]">
              Proses pemesanan ruang kerja hanya <br /> membutuhkan waktu kurang
              dari 2 menit.
            </p>
          </div>
        </div>
        <div className="flex gap-[30px] text center justify-center ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full    ">
            <div>
              <img className="flex m-auto pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px]">Reservasi Mudah</h1>
            <p className="text-[15px]">
              Proses pemesanan ruang kerja hanya <br /> membutuhkan waktu kurang
              dari 2 menit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
