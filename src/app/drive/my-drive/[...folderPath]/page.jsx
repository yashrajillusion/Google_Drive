"use client";
import GetFolders from "../../../component/GetFolders";
import MyDriveHeader from "../../../component/mydrive_header";
import GetFiles from "../../../component/GetFiles";

export default function Folder({ params }) {
  return (
    <div className="flex flex-1">
      <div className="h-[90vh] w-full overflow-hidden rounded-2xl bg-white">
        <MyDriveHeader headerName={"My Drive"} />
        <div className="h-[75vh] border w-full overflow-y-auto p-5">
          <div className="mb-5 flex flex-col space-y-4">
            <h2>Folders</h2>
            <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC">
              <GetFolders folderPath={params.folderPath} />
            </div>
          </div>

          <div className="mb-5 flex flex-col space-y-4">
            <h2>Files</h2>
            <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC">
              <GetFiles folderPath={params.folderPath} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
