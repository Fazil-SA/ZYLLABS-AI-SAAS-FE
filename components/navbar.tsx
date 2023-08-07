import React from "react"
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
  return (
    <>
    <div className="flex p-4 justify-start items-start">
      <MobileSidebar />
    </div>
      <div className="flex justify-end w-full p-4">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </>
  )
}

export default Navbar
