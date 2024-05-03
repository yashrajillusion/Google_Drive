import { Inter } from "next/font/google";
import "./globals.css";
import FileContextProvider from "./context/FileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LYNC Drive",
  description: "Blockchain based LYNC Drive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileContextProvider>{children}</FileContextProvider>
      </body>
    </html>
  );
}
