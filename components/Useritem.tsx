import React from "react";

function Useritem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-lg p-2">
      <div className="rounded-full min-h-10 min-w-10 bg-emerald-500 uppercase flex items-center justify-center text-white font-bold">
        MH
      </div>

      <div className="grow">
        <p className="text-[16px] font-bold">Momen Helmy</p>
        <p className="text-[12px] text-neutral-500">momenhelmy@muslim.com</p>
      </div>
    </div>
  );
}

export default Useritem;
