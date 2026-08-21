import React from "react";

const Card = () => {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex items-center flex-col p-2">
      <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-300 overflow-hidden">
        {/* <img className="w-full h-full object-cover" src="" alt="" /> */}
      </div>
      
      <h1 className="text-xl font-semibold mt-1">rohan</h1>
      
      <p className="text-center text-sm font-semibold leading-none tracking-tight mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga hic cumque quia sequi voluptatibus.</p>

      <button className="px-4 py-2 bg-red-700 text-white rounded-md mt-2 pt-1 cursor-pointer text-xs font-semibold">remove it</button>
    </div>
  );
};

export default Card;
