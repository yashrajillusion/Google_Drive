import { nanoid } from 'nanoid'

class FileNode {
  constructor(name, isFolder, fileLink, fileExtension) {
    this.id = nanoid();
    this.name = name;
    this.isFolder = isFolder;
    this.fileLink = fileLink;
    this.fileExtension = fileExtension
    this.children = new Map();
  }
}

export class CoreFileSystem {
  constructor() {
    this.root = new FileNode("mydrive", true);
    this.folderLookup = new Map();
    this.folderLookup.set("/", this.root);
  }

  addFile(address, fileName, fileLink, fileExtension) {
    const parentFolder = this.folderLookup.get(address);
    if (!parentFolder || !parentFolder.isFolder) {
      console.log("Invalid parent folder");
      return;
    }
    if (parentFolder.children.has(fileName)) {
      console.log("File already exists");
      return;
    }
    const newFile = new FileNode(fileName, false, fileLink, fileExtension);
    parentFolder.children.set(fileName, newFile);
    console.log("File added successfully");
  }

  createFolder(address, folderName) {
    const parentFolder = this.folderLookup.get(address);
    if (!parentFolder || !parentFolder.isFolder) {
      console.log("Invalid parent folder");
      return;
    }
    if (parentFolder.children.has(folderName)) {
      console.log("Folder already exists");
      return;
    }
    const newFolder = new FileNode(folderName, true);
    parentFolder.children.set(folderName, newFolder);
    this.folderLookup.set(
      address + (address === "/" ? "" : "/") + folderName,
      newFolder
    );
    console.log("Folder created successfully");
  }
  renameFolder(address, folderName, newFolderName) {
    const parentFolder = this.folderLookup.get(address);
    if (parentFolder) {
      const folder = parentFolder.children.get(folderName);
      if (folder) {
        folder.name = newFolderName;
        this.folderLookup.delete(
          address + (address === "/" ? "" : "/") + folderName
        );
        this.folderLookup.set(
          address + (address === "/" ? "" : "/") + newFolderName,
          folder
        );
      }
    }
  }
  renameFile(address, fileName, newFileName) {
    const parentFolder = this.folderLookup.get(address);
    if (parentFolder) {
      const currentFile = parentFolder.children.get(fileName);
      if (currentFile && !currentFile.isFolder) {
        currentFile.name = newFileName;
        parentFolder.children.delete(fileName);
        parentFolder.children.set(newFileName, currentFile);
      }
    }
  }
  deleteFolder(address, folderName) {
    const parentFolder = this.folderLookup.get(address);
    if (!parentFolder || !parentFolder.isFolder) {
      console.log("Invalid parent folder");
      return;
    }
    if (!parentFolder.children.has(folderName)) {
      console.log("Folder does not exist");
      return;
    }
    parentFolder.children.delete(folderName);
    this.folderLookup.delete(
      address + (address === "/" ? "" : "/") + folderName
    );
    console.log("Folder deleted successfully");
  }
  deleteFile(address, fileName) {
    const parentFolder = this.folderLookup.get(address);
    if (parentFolder) {
      parentFolder.children.delete(fileName);
    }
  }
  getFolder(folderAddress) {
    return this.folderLookup.get(folderAddress);
  }
}
// fileSystem.createFolder("/", "document");
// fileSystem.createFolder("/document", "yash");
// fileSystem.addFile("/", "raj");
// fileSystem.addFile("/document", "shyam");
// console.log(fileSystem)
// console.log("-----------------------------------------------------");
// console.log(fileSystem.getFolder("/document"))
// console.log(fileSystem)
// fileSystem.deleteFile("/document", "yash")
// fileSystem.deleteFile("/document", "yash")
// console.log(fileSystem.getFolder("/document"))

// fileSystem.renameFolder("/","document", "xDocument" )
// fileSystem.renameFile("/document", "shyam", "xshyam")
// console.log(fileSystem.getFolder("/document"))
