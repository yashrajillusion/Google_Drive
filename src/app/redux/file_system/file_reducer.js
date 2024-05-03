import {
  ADDFILE,
  CREATEFOLDER,
  DELETEFILE,
  DELETEFOLDER,
  GETFOLDER,
  RENAMEFILE,
  RENAMEFOLDER,
} from "./file_action";
import { CoreFileSystem } from "../../Core/file.core";

export const initFileSystemState = {
  fileSystem: new CoreFileSystem(),
};

export const fileSystemReducer = (store, { type, payload }) => {
  const fileSystem = store.fileSystem;

  switch (type) {
    case CREATEFOLDER:
      fileSystem.createFolder(payload.path, payload.name);
      return { ...store };
    case RENAMEFOLDER:
      fileSystem.renameFolder(payload.path, payload.name, payload.rename);
      return { ...store };
    case DELETEFOLDER:
      fileSystem.deleteFolder(payload.path, payload.name);
      return { ...store };

    case ADDFILE:
      fileSystem.addFile(
        payload.path,
        payload.name,
        payload.fileLink,
        payload.fileExtension
      );
      return { ...store };
    case RENAMEFILE:
      fileSystem.renameFile(payload.path, payload.name, payload.rename);
    case DELETEFILE:
      fileSystem.deleteFile(payload.path, payload.name);
      return { ...store };

    default:
      return store;
  }
};
