import React from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function FileDropDown({
  file,
  setOpenMenu,
  isFolderComp,
  folderId,
  setRenameToggle,
  handleDelete,
}) {
  const openFile = (fileLink) => {
    // Open the file in a new tab
    window.open(fileLink, "_blank");
  };

  return (
    <section
      onClick={() => setOpenMenu("")}
      className={`absolute top-9 z-10 h-40 w-48 overflow-y-scroll rounded-md border bg-white shadow-sm shadow-[#777]`}
    >
      <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
        <HiOutlineArrowsExpand className="h-5 w-5" />
        <span className="text-sm">Open File</span>
      </div>
      <div
        onClick={() => setRenameToggle(file.id)}
        className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]"
      >
        <MdDriveFileRenameOutline className="h-5 w-5" />
        <span className="text-sm">Rename</span>
      </div>
      <div
        onClick={() => {
          handleDelete(file.name);
        }}
        className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]"
      >
        <RiDeleteBin6Line className="h-5 w-5" />
        <span className="text-sm">Move to bin</span>
      </div>
    </section>
  );
}

export default FileDropDown;
