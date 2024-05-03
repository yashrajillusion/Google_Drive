"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillCaretDown, AiFillFolder } from "react-icons/ai";
import { useFileContext } from "../context/FileContext";

function Navbar() {
  // Function to check if a link is active based on the current route.
  const { file, fileDispatch } = useFileContext();
  const folderTree = file.fileSystem.getFolder("/");

  return (
    <FolderNavbarComp folderTree={folderTree} pathname={"/drive/my-drive"} />
  );
}

function FolderNavbarComp({ folderTree, pathname }) {
  if (!folderTree || !folderTree.isFolder) return;
  const fileList = [...folderTree.children.values()];
  const [isExpand, setExpand] = useState(false);
  const router = useRouter();

  return (
    <nav className="space-y-0.5  pr-2 ml-3">
      <div
        onClick={() => {
          router.replace(pathname);
        }}
        className={`tablet:justify-normal tablet:space-x-3 tablet:px-4 tablet:py-1.5 flex items-center justify-center rounded-full p-2 hover:bg-darkC`}
      >
        <AiFillCaretDown
          onClick={() => setExpand((prev) => !prev)}
          className={`h-3 w-3 shrink-0 rotate-${isExpand ? "" : "[270deg]"}`}
        />
        <AiFillFolder className="h-4 shrink-0 w-4" />
        <span className="tablet:block hidden">{folderTree.name}</span>
      </div>
      <div className={`${isExpand ? "block" : "hidden"}`}>
        {fileList.map((el) => (
          <FolderNavbarComp
            key={el.id}
            folderTree={el}
            pathname={`${pathname}/${el.name}`}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
