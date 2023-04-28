import React from "react";
import { ArrowIcon } from "@/components/assets/icons/ArrowIcon";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Carrousel } from "@/components/common/Carrousel";

function Header() {
  return (
    <header className="w-[84%] flex items-center justify-center m-16 relative">
      {/* <Carrousel /> */}
      <Button className="bg-[#1D1D1D] w-16 h-16 rounded-full absolute -left-20 lg:grid hidden">
        <ArrowIcon />
      </Button>
      <Image
        src="/header.png"
        alt="header"
        width={1600}
        height={340}
        priority
      />
      <Button className="bg-[#1D1D1D] w-16 h-16 rounded-full absolute -right-20 lg:grid hidden">
        <ArrowIcon className="rotate-180" />
      </Button>
      <div className="absolute flex items-center justify-center -bottom-10 mx-auto left-0 right-0 gap-5">
        <span className="w-4 h-4 bg-[#1D1D1D] rounded-full"></span>
        <span className="w-4 h-4 bg-[#1D1D1D] rounded-full"></span>
        <span className="w-4 h-4 bg-[#FFF159] rounded-full"></span>
        <span className="w-4 h-4 bg-[#1D1D1D] rounded-full"></span>
        <span className="w-4 h-4 bg-[#1D1D1D] rounded-full"></span>
      </div>
    </header>
  );
}

export { Header };
