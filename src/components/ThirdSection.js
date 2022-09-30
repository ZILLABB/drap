import React from "react";
import { section } from "./part";

const ThirdSection = () => {
  return (
    <div className="flex pt-[83px]">
      <div className="pt-[210px]  ">
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

      <div className="bg-[#F6FAFA] w-[700px] h-[799px]  ">
        {section.map((sec, index) => (
          <div key={index} className="">
            <div className=" px-[90px] gap-6 mt-[120px] ">
              <div className="bg-[#E1F1F0] rounded-[100px] w-[60px] justify-center flex h-[60px]   ">
                {sec.icon}
              </div>
              <div>
                <div className="">{sec.title}</div>
                <div>{sec.quote}</div>
              </div>
            </div>
            <div className="flex px-[90px] gap-6  ">
              <div className="bg-[#E1F1F0] rounded-[60px] w-[5px] justify-center flex  ">
                {sec.icon1}
              </div>
              <div>
                <div>{sec.title1}</div>
                <div>{sec.quote1}</div>
              </div>
            </div>
            <div className="flex px-[90px] gap-6">
              <div className="bg-[#E1F1F0] rounded-[60px] w-[20px] justify-center flex  ">
                {sec.icon2}
              </div>
              <div>
                <div>{sec.title2}</div>
                <div>{sec.quote2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
