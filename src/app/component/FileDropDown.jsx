import React from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import {
  MdDriveFileRenameOutline,
  MdOutlineRestore,
  MdStarBorder,
  MdStarRate,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";

function FileDropDown({
  file,
  setOpenMenu,
  select,
  isFolderComp,
  folderId,
  setRenameToggle,
}) {
  const openFile = (fileLink) => {
    // Open the file in a new tab
    window.open(fileLink, "_blank");
  };

  return (
    <section
      onClick={() => setOpenMenu("")}
      className={`absolute top-9 z-10 ${
        select == "trashed" ? "h-fit" : "h-40"
      } w-48 overflow-y-scroll rounded-md border bg-white shadow-sm shadow-[#777]`}
    >
      {select !== "trashed" ? (
        <>
          <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
            <HiOutlineArrowsExpand className="h-5 w-5" />
            <span className="text-sm">Open File</span>
          </div>
          {!isFolderComp && (
            <a
              href={file.fileLink}
              download={file.fileName}
              className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]"
            >
              <TbDownload className="h-5 w-5" />
              <span className="text-sm">Download</span>
            </a>
          )}

          <div
            onClick={() => setRenameToggle(file)}
            className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]"
          >
            <MdDriveFileRenameOutline className="h-5 w-5" />
            <span className="text-sm">Rename</span>
          </div>
          <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
            {!file.isStarred ? (
              <MdStarBorder className="h-5 w-5" />
            ) : (
              <MdStarRate className="h-5 w-5" />
            )}
            <span className="text-sm">Add to starred</span>
          </div>
          <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
            <RiDeleteBin6Line className="h-5 w-5" />
            <span className="text-sm">Move to bin</span>
          </div>
        </>
      ) : (
        <>
          <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
            <MdOutlineRestore className="h-5 w-5" />
            <span className="text-sm">Restore</span>
          </div>
          <div className="my-2 flex items-center space-x-3 px-3 py-1.5 hover:cursor-pointer hover:bg-[#ddd]">
            <RiDeleteBin6Line className="h-5 w-5" />
            <span className="text-sm">Delete forever</span>
          </div>
        </>
      )}
    </section>
  );
}

export default FileDropDown;
