import React, { SearchBox, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
function SideBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`relative flex ${
          show ? "w-[20%]" : "w-[3%]"
        } top-5 left-3 z-10  h-16 bg-[#ffffff] shadow-lg rounded-lg p-2 transition-all items-center`}
      >
        <button className="text-3xl hover:scale-125 cursor-pointer transition-all mx-auto">
          {show ? (
            <AiOutlineArrowLeft onClick={() => setShow(false)} />
          ) : (
            <AiOutlineArrowRight
              // className="text-3xl hover:scale-125 cursor-pointer transition-all mx-auto"
              onClick={() => setShow(true)}
            />
          )}
        </button>
      </div>
    </>
  );
}

export default SideBar;
