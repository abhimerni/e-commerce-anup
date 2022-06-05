import React from "react";

import { HiMenu } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";

const AdminNavbar = ({ isOpen, toggleModal }) => {
  return (
    <div className="h-20 w-full bg-black text-white flex justify-between pr-5 items-center">
      <div className="text-white flex justify-center items-center">
        <div
          onClick={() => {
            if (isOpen) {
              toggleModal(false);
            }
          }}
          className="text-white lg:hidden"
        >
          <HiMenu className=" text-3xl" />
        </div>
        <h2 className="pl-2 text-2xl md:text-3xl font-bold">Flipkart</h2>
      </div>
      <div className="last flex justify-center items-center">
        <div className="ml-5 h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center">
          <img src="/image.jpg" alt="" className="h-full w-full rounded-full" />
        </div>
        <div className="pl-2 w-20 truncate">Abhishek</div>
        <AiFillCaretDown />
      </div>
    </div>
  );
};

export default AdminNavbar;
