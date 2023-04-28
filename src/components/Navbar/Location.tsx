import React from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";

function Location() {
  return (
    <div className="2xl:flex hidden items-center gap-5">
      <LocationIcon />
      <div className="flex flex-col ">
        <p className="text-[#B0B0B0]">
          Enviar a
          <span className="text-[#E6E6E6] font-semibold block">
            Calle Falsa 123
          </span>
        </p>
      </div>
    </div>
  );
}

export { Location };
