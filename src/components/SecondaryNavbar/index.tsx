import { DividerIcon } from "@/components/assets/icons/DividerIcon";
import React from "react";

function SecondaryNavbar() {
  return (
    <nav className="flex items-center justify-between max-w-[512px] w-2/5 bg-[#1D1D1DA6] border-2 border-[#1D1D1D33] rounded-[48px] px-8 py-4 text-[#E6E6E6]">
      <a>Ofertas</a>
      <DividerIcon />
      <a>Vender</a>
      <DividerIcon />
      <a>Historial</a>
      <DividerIcon />
      <a>Ayuda</a>
    </nav>
  );
}

export { SecondaryNavbar };
