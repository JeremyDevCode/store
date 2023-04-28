import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  notification?: number;
  className?: string;
  onClick?: () => void;
}

function Button({
  children,
  className,
  notification = 0,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
      {notification > 0 && (
        <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF159] text-[#141414] font-bold">
          {notification}
        </div>
      )}
    </button>
  );
}

export { Button };
