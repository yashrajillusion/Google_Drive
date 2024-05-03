"use client";
import React, { useState, ChangeEvent } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Navbar from "./Navbar";
import DropDown from "./button/DropDown";
import AddFolder from "./button/AddFolder";
import { useFileContext } from "../context/FileContext";
import { ADDFILE, CREATEFOLDER } from "../redux/file_system/file_action";
import { usePathname } from "next/navigation";
import path from "path";

function SideMenu() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folderToggle, setFolderToggle] = useState(false);
  const { file, fileDispatch } = useFileContext();
  const pathName = usePathname();
  const pathList = pathName.split("/");
  const dir = pathList.slice(3, pathList.length);
  const directoryPath = dir.length === 0 ? "/" : `/${dir.join("/")}`;

  // Add new file
  const uploadFile = (e) => {
    const files = e.target.files || [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileContent = event.target.result;
        if (file.type.startsWith("image/")) {
          fileDispatch({
            type: ADDFILE,
            payload: {
              path: directoryPath,
              name: file.name,
              fileLink: fileContent,
              fileExtension: file.type.split("/")[1],
            },
          });
        } else if (file.type.startsWith("video/")) {
          fileDispatch({
            type: ADDFILE,
            payload: {
              path: directoryPath,
              name: file.name,
              fileLink: URL.createObjectURL(file),
              fileExtension: "mp4",
            },
          });
        } else if (file.type.startsWith("audio/")) {
          console.log(file);
          fileDispatch({
            type: ADDFILE,
            payload: {
              path: directoryPath,
              name: file.name,
              fileLink: URL.createObjectURL(file),
              fileExtension: "mp3",
            },
          });
        }
      };
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  };

  // Add new folder
  const uploadFolder = () => {
    fileDispatch({
      type: CREATEFOLDER,
      payload: { path: directoryPath, name: folderName },
    });
  };

  return (
    <section className="relative h-[90vh] w-16 space-y-4 duration-500 tablet:w-60">
      <button
        onClick={() => setIsDropDown(true)}
        className="mt-1 flex w-fit items-center justify-center space-x-2
      rounded-2xl bg-white p-3 text-textC shadow-md shadow-[#ddd]
      duration-300 hover:bg-darkC2 hover:shadow-[#bbb] tablet:px-5 tablet:py-4"
      >
        <HiOutlinePlusSm className="h-6 w-6" />
        <span className="hidden text-sm font-medium tablet:block">New</span>
      </button>
      {/* Add new file or folder drop down */}
      {isDropDown && (
        <DropDown
          setFolderToggle={setFolderToggle}
          uploadFile={uploadFile}
          setIsDropDown={setIsDropDown}
        />
      )}

      {/* New folder */}
      {folderToggle && (
        <AddFolder
          setFolderToggle={setFolderToggle}
          setFolderName={setFolderName}
          uploadFolder={uploadFolder}
        />
      )}
      {/* navbar */}
      <Navbar />
    </section>
  );
}

export default SideMenu;
