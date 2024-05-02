"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="relative flex h-16 w-screen items-center justify-between px-5 py-2">
      <div className="w-16 pl-1 duration-500 tablet:w-60">
        <Link href={"/"} className="flex w-fit items-center space-x-2 p-1">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="logo"
            className="h-10 w-10 object-contain object-center"
            draggable={false}
          />
          <h1 className="hidden text-2xl tracking-tight text-textC tablet:block">
            Drive
          </h1>
        </Link>
      </div>
      <Search />
      <div className="ml-3 h-8 w-8 cursor-pointer overflow-hidden rounded-full">
        <FaUserCircle className="h-full w-full" />
      </div>
    </header>
  );
}

export default Header;
