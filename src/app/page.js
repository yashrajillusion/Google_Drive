import Head from "next/head";
import MyDriveHeader from "./component/mydrive_header";
import Header from "./component/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <MyDriveHeader headerName={"My Drive"} />
    </>
  );
}
