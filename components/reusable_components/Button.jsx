import React from "react";

function Button({ text, isActive, setisActive }) {
  return (
    <div className="flex mr-3 items-end flex-col">
      <button
        className={`w-[142px] h-[51px] rounded-[52px] text-center ${
          isActive ? "bg-[#8634ff7f]" : "bg-[#8D8E92]"
        } text-white capitalize font-Poppins font-[700] text-[16.5px] `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
