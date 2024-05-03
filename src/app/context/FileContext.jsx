"use client";
import { createContext, useContext, useReducer } from "react";
import {
  fileSystemReducer,
  initFileSystemState,
} from "../redux/file_system/file_reducer";

const FileContext = createContext("");

export default function FileContextProvider({ children }) {
  const [file, fileDispatch] = useReducer(
    fileSystemReducer,
    initFileSystemState
  );

  return (
    <FileContext.Provider value={{ file, fileDispatch }}>
      {children}
    </FileContext.Provider>
  );
}

export const useFileContext = () => useContext(FileContext);
