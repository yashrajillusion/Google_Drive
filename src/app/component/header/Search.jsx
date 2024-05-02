import React, { useState, useEffect, useRef } from "react";
import { AiFillFolder, AiOutlineSearch } from "react-icons/ai";

function Search() {
  const [searchTest, setSearchTest] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const inputRef = useRef(null);

  const handleInputFocus = (e) => {
    if (inputRef.current && e.target && !inputRef.current.contains(e.target)) {
      setOnFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleInputFocus);
    return () => {
      document.removeEventListener("click", handleInputFocus);
    };
  }, []);

  return (
    <div className="relative flex-1" onFocus={() => setOnFocus(true)}>
      <span className="absolute left-2 top-[5px] h-9 w-9 cursor-pointer rounded-full p-2 hover:bg-darkC">
        <AiOutlineSearch className="h-full w-full stroke-textC" stroke="2" />
      </span>

      <input
        ref={inputRef}
        onChange={(e) => setSearchTest(e.target.value)}
        type="text"
        placeholder="Search in Drive"
        className="w-full rounded-full bg-darkC2 px-2 py-[11px] indent-11 shadow-darkC
        placeholder:text-textC focus:rounded-b-none
        focus:rounded-t-2xl focus:bg-white focus:shadow-md focus:outline-none"
      />
      {onFocus && (
        <div
          className="absolute z-10 max-h-60 w-full overflow-scroll rounded-b-2xl border-t-[1.5px]
      border-textC bg-white pt-2 shadow-md shadow-darkC"
        >
          <div className="pl-5 text-sm text-gray-500">
            No result match your search.
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
