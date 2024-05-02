import SideMenu from "./component/SideMenu";
import Header from "./component/header/Header";
import MyDriveHeader from "./component/mydrive_header";

export default function Home() {
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
                  <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 text-textC"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
