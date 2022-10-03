import React from "react";
import vector from "../Images/Vector (1).svg";
import separator from "../Images/Separator.svg";
import avatar1 from '../Images/Avatar - 1.svg'
import avatar2 from '../Images/Avatar - 2.svg'
import avatar3 from '../Images/Avatar - 3.svg'
import avatar4 from '../Images/Avatar - 4.svg'
import avatar5 from '../Images/Avatar - 5.svg'


const EndSection = () => {
  return (
    <div className="flex">
      <div className="w-[700px] h-[799px] bg-[#F6F6FB] text-[40px] pt-[169px] pl-[200px]  ">
        <div className=" rounded-full bg-[#5959B3] h-[106px] w-[106px] ">
          <img className="m-auto pt-[45%]   " src={vector} alt="" />
        </div>
        <p className="w-[321px]   ">Apa Kata mereka tentang ruang kerja</p>
      </div>

      <div className="justify-center text-center ml-[140px] mr-[200px] pt-[169px]   ">
        <h1 className="text-[30px] mb-[27px]">
          Help us improve our productivity
        </h1>
        <p className=" mb-[33.77px] w-[400px]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img className="mb-[40.42px] " src={separator} alt="separator" />
        <div className="flex gap-[30px] justify-center  ">
          <img src={avatar1} alt="" />
          <img src={avatar2} alt="" />
          <img src={avatar3} alt="" />
          <img src={avatar4} alt="" />
          <img src={avatar5} alt="" />
        </div>
        <h1 className="text-[16px]">Samantha William</h1>
        <p>Senior Designer at Design Studio</p>
      </div>
    </div>
  );
};

export default EndSection;
