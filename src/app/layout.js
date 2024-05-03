import { Inter } from "next/font/google";
import "./globals.css";
import FileContextProvider from "./context/FileContext";
import SideMenu from "./component/SideMenu";
import Header from "./component/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LYNC Drive",
  description: "Blockchain based LYNC Drive",
};

export default function RootLayout({ children, params }) {
  console.log("params", params);
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileContextProvider>
          <>
            <main className="flex h-screen flex-col items-center justify-between overflow-hidden bg-bgc">
              <Header />
              <section className="mb-5 flex h-full w-screen flex-1 px-5 pr-16">
                <SideMenu />
                {children}
              </section>
            </main>
            ;
          </>
        </FileContextProvider>
      </body>
    </html>
  );
}
