import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function MyDriveHeader({ headerName }) {
  return (
    <div className="flex flex-col space-y-6 p-5 pb-2">
      <div className="flex items-center space-x-2 text-2xl text-textC">
        <h2>{headerName}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center space-x-2 rounded-lg border border-textC px-4 py-1 text-sm font-medium">
          <span>Type</span>
          <AiFillCaretDown className="mt-0.5 h-3 w-3" />
        </button>
        <button className="text-sm font-medium flex items-center  border border-textC px-4 py-1 space-x-2 rounded-lg">
          <span>People</span>
          <AiFillCaretDown className="mt-0.5 h-3 w-3" />
        </button>
        <button className="text-sm font-medium flex items-center space-x-2 rounded-lg border border-textC px-4 py-1 ">
          <span>Modified</span>
          <AiFillCaretDown className="mt-0.5 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

export default MyDriveHeader;
