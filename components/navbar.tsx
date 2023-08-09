import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
  return (
    <>
      <div className="flex p-4 justify-start items-start">
        <MobileSidebar />
      </div>
      <div className="flex justify-end p-4 absolute top-0 right-0">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Navbar;
