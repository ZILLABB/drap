import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between px-[200px] mt-[50px]">
        <div className=" flex gap-[41px]">
          <h1 className="bg-[#1EA59A] flex rounded-[50px] w-[55px] text-white  justify-center items-center ">
            RK
          </h1>
          <ul className="flex gap-[41px]">
            <li>Temukan lokasi</li>
            <li>Jenis Ruang</li>
            <li>Lomunitas</li>
            <li>Blog</li>
          </ul>
        </div>
        <ul className="flex gap-[41px]">
          <li>Untuk Startup</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
