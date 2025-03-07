import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className=" font-semibold  my-2 text-xl lg:text-2xl  flex gap-2" href={"/"}>
      <h1 className="  text-rose-500">Game</h1>
      <span>Hive</span>
    </Link>
  );
};

export default Logo;
