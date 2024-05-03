"use client";
import { useEffect } from "react";
import GetFolders from "../../component/GetFolders";
import SideMenu from "../../component/SideMenu";
import Header from "../../component/header/Header";
import MyDriveHeader from "../../component/mydrive_header";
import { useFileContext } from "../../context/FileContext";
import {
  ADDFILE,
  CREATEFOLDER,
  DELETEFILE,
  DELETEFOLDER,
  RENAMEFILE,
  RENAMEFOLDER,
} from "../../redux/file_system/file_action";
import GetFiles from "../../component/GetFiles";

export default function Home() {
  const { file, fileDispatch } = useFileContext();
  useEffect(() => {
    fileDispatch({
      type: CREATEFOLDER,
      payload: { path: "/", name: "document" },
    });
    fileDispatch({
      type: CREATEFOLDER,
      payload: { path: "/", name: "evaluation" },
    });
    fileDispatch({
      type: CREATEFOLDER,
      payload: { path: "/document", name: "unit-1" },
    });
    fileDispatch({
      type: ADDFILE,
      payload: { path: "/", name: "a" },
    });
    fileDispatch({
      type: ADDFILE,
      payload: { path: "/", name: "b" },
    });
    fileDispatch({
      type: ADDFILE,
      payload: { path: "/document/unit-1", name: "x1" },
    });
    fileDispatch({
      type: ADDFILE,
      payload: { path: "/document/unit-1", name: "x2" },
    });
    // fileDispatch({
    //   type: DELETEFOLDER,
    //   payload: { path: "/", name: "evaluation" },
    // });
    // fileDispatch({
    //   type: DELETEFOLDER,
    //   payload: { path: "/document", name: "unit-1" },
    // });
    // fileDispatch({
    //   type: DELETEFILE,
    //   payload: { path: "/document/unit-1", name: "x2" },
    // });
    fileDispatch({
      type: RENAMEFILE,
      payload: { path: "/document/unit-1", name: "x2", rename: "y2" },
    });
    fileDispatch({
      type: RENAMEFOLDER,
      payload: { path: "/document", name: "unit-1", rename: "unit-x" },
    });
  }, []);
  // console.log("file", file);

  return (
    <>
      <main className="flex h-screen flex-col items-center justify-between overflow-hidden bg-bgc">
        <Header />
        <section className="mb-5 flex h-full w-screen flex-1 px-5 pr-16">
          <div>
            <SideMenu />
          </div>
          <div className="flex flex-1">
            <div className="h-[90vh] w-full overflow-hidden rounded-2xl bg-white">
              <MyDriveHeader headerName={"My Drive"} />
              <div className="h-[75vh] border w-full overflow-y-auto p-5">
                <div className="mb-5 flex flex-col space-y-4">
                  <h2>Folders</h2>
                  <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC">
                    <GetFolders />
                  </div>
                </div>

                <div className="mb-5 flex flex-col space-y-4">
                  <h2>Files</h2>
                  <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC">
                    <GetFiles />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
