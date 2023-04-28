import React from "react";

import { HeartIcon } from "@/components/assets/icons/HeartIcon";
import { WishIcon } from "@/components/assets/icons/WishIcon";
import { BellIcon } from "@/components/assets/icons/BellIcon";
import { CartIcon } from "@/components/assets/icons/CartIcon";
import { Button } from "@/components/common/Button";

interface Option {
  element: JSX.Element;
  notification: number;
}

function Options() {
  const options: Option[] = [
    { element: <HeartIcon key="Heart" />, notification: 8 },
    { element: <WishIcon key="Wish" />, notification: 0 },
    { element: <BellIcon key="Bell" />, notification: 0 },
    { element: <CartIcon key="Cart" />, notification: 2 },
  ];
  return (
    <div className="2xl:flex hidden items-center justify-between gap-5">
      {options.map((option, key) => (
        <Button
          key={key}
          className="bg-[#222222] w-12 h-12 rounded-lg relative"
          notification={option.notification}
        >
          {option.element}
        </Button>
      ))}
    </div>
  );
}

export { Options };
