import React from "react";
import vector from '../Images/Vector (1).svg'
const EndSection = () => {
  return (
    <div>
      <div className="w-[700px] h-[799px] bg-[#F6F6FB] text-[40px] pt-[169px] pl-[200px]  ">
        <div className=" rounded-full bg-[#5959B3] h-[106px] w-[106px] ">
          <img className="m-auto pt-[45%]   " src={vector} alt="" />
        </div>
        <p>Apa Kata mereka tentang ruang kerja</p>
      </div>
    </div>
  );
};

export default EndSection;
