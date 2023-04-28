import React from "react";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Location } from "./Location";
import { Search } from "./Search";
import { Profile } from "./Profile";
import { Options } from "./Options";

function Navbar() {
  return (
    <nav className="bg-[#1D1D1DA6] w-[92%] border-2 border-[#1D1D1D33] rounded-[48px] px-8 py-4 m-16">
      <div className="flex items-center justify-between">
        <LogoIcon />
        <Location />
        <Search />
        <Options />
        <Profile />
      </div>
    </nav>
  );
}

export { Navbar };
