export const CREATEFOLDER = "CREATEFOLDER";
export const RENAMEFOLDER = "RENAMEFOLDER";
export const DELETEFOLDER = "DELETEFOLDER";

export const ADDFILE = "ADDFILE";
export const RENAMEFILE = "RENAMEFILE";
export const DELETEFILE = "DELETEFILE";

export const createFolder = (body) => ({ type: CREATEFOLDER, payload: body });
export const renameFolder = (body) => ({ type: RENAMEFOLDER, payload: body });
export const deleteFolder = (body) => ({ type: DELETEFOLDER, payload: body });

export const addFile = (body) => ({ type: ADDFILE, payload: body });
export const renameFile = (body) => ({ type: RENAMEFILE, payload: body });
export const deleteFile = (body) => ({ type: DELETEFILE, payload: body });
