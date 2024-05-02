"use client";
import React, { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import FileDropDown from "./FileDropDown";
import Rename from "./Rename";

function GetFolders({ folderId, select }) {
  const [openMenu, setOpenMenu] = useState("");
  const [renameToggle, setRenameToggle] = useState("");

  const handleMenuToggle = (fileId) => {
    // Toggle the dropdown for the given file
    setRenameToggle("");
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === fileId ? "" : fileId));
  };

  const folders = [1, 2, 3].map((folder) => {
    // set a condition for the folders to be displayed

    return (
      true && (
        <div
          key={folder}
          onDoubleClick={() => {}}
          className="relative flex w-[13.75rem] cursor-alias items-center justify-between rounded-xl bg-darkC2 p-3 hover:bg-darkC"
        >
          <div className="flex items-center space-x-2">
            <AiFillFolder className="h-6 w-6" />
            <span className="w-32 truncate text-sm font-medium text-textC">
              {folder.folderName}
            </span>
          </div>
          <BsThreeDotsVertical
            onClick={() => handleMenuToggle(folder)}
            className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
          />
          {
            /* drop down */
            openMenu === folder && (
              <FileDropDown
                file={folder}
                setOpenMenu={setOpenMenu}
                isFolderComp={true}
                select={select}
                folderId={folder}
                setRenameToggle={setRenameToggle}
              />
            )
          }
          {
            // rename toggle
            renameToggle === folder && (
              <Rename
                setRenameToggle={setRenameToggle}
                fileId={folder}
                fileName={folder.folderName}
                isFolder={folder.isFolder}
                fileExtension=""
              />
            )
          }
        </div>
      )
    );
  });

  return folders;
}

export default GetFolders;
