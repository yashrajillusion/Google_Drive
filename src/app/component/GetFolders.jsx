"use client";
import React, { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import FileDropDown from "./FileDropDown";
import Rename from "./Rename";
import { useFileContext } from "../context/FileContext";
import { useRouter, usePathname } from "next/navigation";

function GetFolders({ folderPath }) {
  const { file, fileDispatch } = useFileContext();
  const directoryPath = folderPath ? `/${folderPath?.join("/")}` : "/";
  const currentFolder = file.fileSystem.getFolder(directoryPath);

  const fileList = [...currentFolder.children.values()];

  const [openMenu, setOpenMenu] = useState("");
  const [renameToggle, setRenameToggle] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleMenuToggle = (fileId) => {
    // Toggle the dropdown for the given file
    setRenameToggle("");
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === fileId ? "" : fileId));
  };

  const folders = fileList.map((folder) => {
    // set a condition for the folders to be displayed

    if (folder.isFolder) {
      return (
        true && (
          <div
            key={folder.id}
            onDoubleClick={() => {
              router.push(pathname + "/" + folder.name);
            }}
            className="relative flex w-[13.75rem] cursor-alias items-center justify-between rounded-xl bg-darkC2 p-3 hover:bg-darkC"
          >
            <div className="flex items-center space-x-2">
              <AiFillFolder className="h-6 w-6" />
              <span className="w-32 truncate text-sm font-medium text-textC">
                {folder.name}
              </span>
            </div>
            <BsThreeDotsVertical
              onClick={() => handleMenuToggle(folder.id)}
              className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
            />
            {
              /* drop down */
              openMenu === folder.id && (
                <FileDropDown
                  file={folder.id}
                  setOpenMenu={setOpenMenu}
                  isFolderComp={true}
                  folderId={folder.id}
                  setRenameToggle={setRenameToggle}
                />
              )
            }
            {
              // rename toggle
              renameToggle === folder.id && (
                <Rename
                  setRenameToggle={setRenameToggle}
                  fileId={folder.id}
                  fileName={folder.name}
                  isFolder={folder.isFolder}
                  fileExtension=""
                />
              )
            }
          </div>
        )
      );
    }
  });

  return folders;
}

export default GetFolders;
