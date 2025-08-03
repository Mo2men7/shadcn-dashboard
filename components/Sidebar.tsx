"use client";

import Useritem from "./Useritem";

function Sidebar() {
  return (
    <div className="w-[300px] min-w-[300px] flex flex-col gap-4 border-r min-h-screen p-4">
      <div className="">
        <Useritem />
      </div>

      <div className="grow"></div>
      <div className=""></div>
    </div>
  );
}

export default Sidebar;
