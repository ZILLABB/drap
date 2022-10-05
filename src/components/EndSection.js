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
    <div className="lg:flex">
      <div className="lg:w-[700px] lg:h-[799px] bg-[#F6F6FB] text-[40px] lg:pt-[169px] pt-[20px] pb-[20px] pl-[100px]   lg:pl-[200px] ">
        <div className=" rounded-full bg-[#5959B3] h-[106px] w-[106px]   ">
          <img className="m-auto pt-[45%]   " src={vector} alt="" />
        </div>
        <div className=" ">
          <p className="w-[321px] font-body font-bold   ">
            Apa Kata mereka tentang ruang kerja
          </p>
        </div>
      </div>

      <div className="justify-center text-center lg:pt-[169px] pt-[50px] lg:pl-[140px] lg:pr-[150px]  ">
        <h1 className="text-[30px] pb-[27px] font-body font-semibold">
          Help us improve our productivity
        </h1>
        <p className=" pb-[33.77px] lg:w-[400px] font-body font-normal  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img className="pb-[40.42px] " src={separator} alt="separator" />
        <div className="flex lg:gap-[30px] gap-[15px] justify-center pb-[30px]  ">
          <img src={avatar1} alt="" />
          <img src={avatar2} alt="" />
          <img src={avatar3} alt="" />
          <img src={avatar4} alt="" />
          <img src={avatar5} alt="" />
        </div>
        <h1 className="text-[16px] font-body font-bold ">Samantha William</h1>
        <p className="text-[14px] font-body font-light ">
          Senior Designer at Design Studio
        </p>
      </div>
    </div>
  );
};

export default EndSection;
