import GetFolders from "./component/GetFolders";
import SideMenu from "./component/SideMenu";
import Header from "./component/header/Header";
import MyDriveHeader from "./component/mydrive_header";

export default function Home() {
  class FileNode {
    constructor(name, isFolder){
      this.name = name;
      this.isFolder = isFolder;
      this.children = new Map();
    }
  }
  
  class FileSystem {
    constructor(){
      this.root = new FileNode("mydrive", true);
      this.folderLookup = new Map();
      this.folderLookup.set("/", this.root);
    }
    
    addFile(address, fileName) {
      const parentFolder = this.folderLookup.get(address);
      if (!parentFolder || !parentFolder.isFolder) {
        console.log("Invalid parent folder");
        return;
      }
      if (parentFolder.children.has(fileName)) {
        console.log("File already exists");
        return;
      }
      const newFile = new FileNode(fileName, false);
      parentFolder.children.set(fileName, newFile);
      console.log("File added successfully");
    }
    
    createFolder(address, folderName){
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
      this.folderLookup.set( address + (address === "/" ? "" : "/") + folderName, newFolder);
      console.log("Folder created successfully");
    }
    renameFolder(address, folderName, newFolderName){
      const parentFolder = this.folderLookup.get(address);
      const folder = parentFolder.children.get(folderName);
      folder.name = newFolderName;
      this.folderLookup.delete(address + (address === "/" ? "" : "/") + folderName);
      this.folderLookup.set(address + (address === "/" ? "" : "/") + newFolderName, folder);
    }
    renameFile(address, fileName, newFileName){
      const parentFolder = this.folderLookup.get(address);
      const currentFile = parentFolder.children.get(fileName);
      if(!currentFile.isFolder){
        currentFile.name = newFileName;
        parentFolder.children.delete(fileName)
        parentFolder.children.set(newFileName, currentFile);
      }
      console.log(currentFile)
      
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
      this.folderLookup.delete(address + (address === "/" ? "" : "/") + folderName);
      console.log("Folder deleted successfully");
    }
    deleteFile(address, fileName){
      const parentFolder = this.folderLookup.get(address);
      console.log(parentFolder)
      parentFolder.children.delete(fileName)
      console.log(parentFolder)
      console.log("******")
    }
    getFolder(folderAddress) {
      return this.folderLookup.get(folderAddress);
    }
  }
  const fileSystem = new FileSystem();
  fileSystem.createFolder("/","document")
  fileSystem.createFolder("/document","yash")
  fileSystem.addFile("/", "raj")
  fileSystem.addFile("/document", "shyam")
  console.log(fileSystem)
  console.log("-----------------------------------------------------");
  // console.log(fileSystem.getFolder("/document"))
  // console.log(fileSystem)
  // fileSystem.deleteFile("/document", "yash")
  // fileSystem.deleteFile("/document", "yash")
  // console.log(fileSystem.getFolder("/document"))
  // fileSystem.renameFolder("/","document", "xDocument" )
  
  fileSystem.renameFile("/document", "shyam", "xshyam")
  console.log(fileSystem.getFolder("/document"))
  
  
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
                    <GetFolders folderId="" select="" />
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