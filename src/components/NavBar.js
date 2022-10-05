import React, { useState } from "react";
import hamburger from "../Images/Hamburger_icon.svg-removebg-preview.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <div className="lg:flex justify-between lg:px-[200px] mt-[50px] font-body font-semibold ">
          <div className=" flex justify-between gap-[41px] px-[20px]   ">
            <h1 className="bg-[#1EA59A] flex rounded-full h-[30px] w-[30px] text-white  justify-center   items-center ">
              RK
            </h1>
            <img
              onClick={() => setShow(!show)}
              className="w-[30px] lg:hidden h-[30px]  "
              src={hamburger}
              alt=""
            />
            <ul className="lg:flex hidden  gap-[41px]">
              <li>Temukan lokasi</li>
              <li>Jenis Ruang</li>
              <li>Lomunitas</li>
              <li>Blog</li>
            </ul>
          </div>
          <ul className="lg:flex hidden gap-[41px]">
            <li>Untuk Startup</li>
            <li>Login</li>
          </ul>
        </div>



        {show && (
          <div>
            <div className="mt-[30px]">
              <ul className="block leading-10 text-[20px]  gap-[41px]">
                <li>Temukan lokasi</li>
                <li>Jenis Ruang</li>
                <li>Lomunitas</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul className="block text-[20px] leading-10 lg:hidden gap-[41px]">
                <li>Untuk Startup</li>
                <li className="text-[30px]">Login</li>
              </ul>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default NavBar;
