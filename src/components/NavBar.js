import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between px-[200px] pt-[50px]">
        <div className=" flex gap-[41px]">
          <h1 className="bg-emerald-400 flex rounded-full w-[25px] text-white  justify-center ">RK</h1>
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
