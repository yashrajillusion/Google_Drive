import React, { useState } from "react";
import Image from "next/image";
import fileIcons from "../component/fileIcons";
import { BsThreeDotsVertical } from "react-icons/bs";
import FileDropDown from "./FileDropDown";
import Rename from "./Rename";
import { useFileContext } from "../context/FileContext";
import { DELETEFILE, DELETEFOLDER } from "../redux/file_system/file_action";

function GetFiles({ folderPath, select }) {
  const [openMenu, setOpenMenu] = useState("");
  const [renameToggle, setRenameToggle] = useState("");
  const { file, fileDispatch } = useFileContext();
  const directoryPath = folderPath ? `/${folderPath.join("/")}` : "/";
  const currentFolder = file.fileSystem.getFolder(directoryPath);

  const fileList = currentFolder ? [...currentFolder.children.values()] : [];

  const handleMenuToggle = (fileId) => {
    // Toggle the dropdown for the given file
    setRenameToggle("");
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === fileId ? "" : fileId));
  };
  const handleDelete = (name) => {
    fileDispatch({
      type: DELETEFILE,
      payload: { path: directoryPath, name: name },
    });
  };

  const list = fileList.map((file) => {
    // getting the icon for the file
    if (file.isFolder) return;

    const icon = fileIcons[file.fileExtension] ?? fileIcons["any"];

    const img = ["jpg", "ico", "webp", "png", "jpeg", "gif", "jfif"].includes(
      file.fileExtension
    ) ? (
      <Image
        src={file.fileLink}
        alt={file.name}
        height="500"
        width="500"
        draggable={false}
        className="h-full w-full rounded-sm object-cover object-center"
      />
    ) : file.fileExtension === "mp3" ? (
      <div className="flex flex-col items-center justify-center">
        <div className="h-24 w-24 ">{icon}</div>
        <audio controls className="w-44">
          <source src={file.fileLink} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    ) : file.fileExtension === "mp4" ? (
      <video controls>
        <source src={file.fileLink} type="audio/mpeg" />
        <div className="h-36 w-36 ">{icon}</div>
      </video>
    ) : (
      <div className="h-36 w-36 ">{icon}</div>
    );

    return (
      <div
        key={file.id}
        // onDoubleClick={() => openFile(file.fileLink)}
        className="hover:cursor-alias"
      >
        <div
          className="flex w-full flex-col items-center justify-center
         overflow-hidden rounded-xl bg-darkC2 px-2.5 hover:bg-darkC"
        >
          <div className="relative flex w-full items-center justify-between px-1 py-3">
            <div className="flex items-center space-x-4">
              <div className="h-6 w-6">{icon}</div>
              <span className="w-32 truncate text-sm font-medium text-textC">
                {file.name}
              </span>
            </div>
            <BsThreeDotsVertical
              onClick={() => handleMenuToggle(file.id)}
              className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-[#ccc]"
            />
            {
              /* drop down */
              openMenu === file.id && (
                <FileDropDown
                  file={file}
                  setOpenMenu={setOpenMenu}
                  isFolderComp={false}
                  select={select}
                  folderId={file.id}
                  setRenameToggle={setRenameToggle}
                  handleDelete={handleDelete}
                />
              )
            }
            {
              // rename toggle
              renameToggle === file.id && (
                <Rename
                  setRenameToggle={setRenameToggle}
                  fileId={file.id}
                  isFolder={file.isFolder}
                  fileName={file.name}
                  fileExtension={file.fileExtension}
                />
              )
            }
          </div>
          <div className="flex h-44 w-48 items-center justify-center pb-2.5">
            {img}
          </div>
        </div>
      </div>
    );
  });

  // the list of files
  return list;
}

export default GetFiles;
