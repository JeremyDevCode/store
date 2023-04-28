import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/profile.png" alt="profile" width={64} height={64} />
    </div>
  );
}

export { Profile };
