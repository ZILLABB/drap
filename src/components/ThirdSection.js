import React from "react";
import path from "../Images/Path.png";

const ThirdSection = () => {
  return (
    <div className="lg:flex  justify-between  ">
      <div className="pt-[300px] lg:pl-[200px] justify-center text-center ">
        <h1 className="text-[30px] pb-[10px] font-body font-bold   ">
          Kenepa Ruang Kerja?
        </h1>
        <p className="mb-[40px] font-body font-normal ">
          Kami telah berpengalaman melayani <br /> ratusan ribu orang dalam
          menemukan <br />
          ruang kerja idaman mereka
        </p>
        <h1 className="text-[80px] font-body font-extrabold text-[#1EA59A] ">
          600+
        </h1>
        <p className="mb-[40px] font-body font-light ">
          Ruang Kerja di seluruh Indonesia
        </p>
        <h1 className="text-[80px] font-body font-extrabold text-[#1EA59A] ">
          135+
        </h1>
        <p className="font-body font-light ">Staff yang siap membantu Anda</p>
      </div>

      <div className="bg-[#F6FAFA] lg:w-[700px] h-[799px] pt-[210px] text-center    gap-[30px] mt-[150px]  ">
        <div className="flex lg:gap-[30px] mb-[79px] text center justify-center text-center   ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full  ">
            <div>
              <img className=" m-auto   pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-body font-bold ">
              Reservasi Mudah
            </h1>
            <p className="text-[15px] font-body font-normal   ">
              Proses pemesanan ruang kerja hanya <br /> membutuhkan waktu kurang
              dari 2 menit.
            </p>
          </div>
        </div>
        <div className="flex lg:gap-[30px] mb-[79px] text center justify-center text-center  ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full    ">
            <div>
              <img className="flex m-auto pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-body font-bold">Reservasi Mudah</h1>
            <p className="text-[15px] font-body font-normal ">
              Proses pemesanan ruang kerja hanya <br /> membutuhkan waktu kurang
              dari 2 menit.
            </p>
          </div>
        </div>
        <div className="flex lg:gap-[30px] text center justify-center text-center  ">
          <div className="bg-[#E1F1F0] w-[50px] h-[50px] rounded-full    ">
            <div>
              <img className="flex m-auto pt-[30%]   " src={path} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-body font-bold">Reservasi Mudah</h1>
            <p className="text-[15px] font-body font-normal ">
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
