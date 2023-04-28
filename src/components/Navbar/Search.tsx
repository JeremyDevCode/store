import React from "react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import { Button } from "@/components/common/Button";

function Search() {
  return (
    <div className="flex items-center justify-center gap-5 w-2/5">
      <div className="w-full flex items-center justify-between px-5 py-3 border-2 border-[#FFF159] rounded-3xl text-[#B0B0B0]">
        <input
          className="bg-transparent rounded-3xl pl-1 outline-none w-full italic font-medium leading-[15px]"
          placeholder="Buscar productos..."
        ></input>
        <SearchIcon />
      </div>
      <Button className="bg-[#222222] w-12 h-12 rounded-lg relative">
        <FilterIcon />
      </Button>
    </div>
  );
}

export { Search };
