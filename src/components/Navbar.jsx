import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

//assets
import Logo from "@/assets/Logo";
import Vector from "../assets/Vector";
import Twitter from "@/assets/Twitter";

function Navbar() {
  return (
    <Container>
      <div className="flex items-center">
        <Logo />
        <div className="lg:flex hidden">
          <div className=" w-[4rem] h-[3rem] bg-[#00FFE6]" />
          <div className="bg-[#1A1A1A] w-[29rem] border h-[3rem]" />
        </div>
        <p className="text-[#4D4D4D] mt-5 ml-3 hidden lg:block">001</p>
        <ul className="flex items-center space-x-4 md:space-x-16 lg:space-x-6 md:ml-12 2xl:ml-16 ml-1">
          <Link href="#" className="text-white">
            ABOUT
          </Link>
          <p className="text-[#4D4D4D] mt-5 ml-3 hidden lg:block">002</p>
          <Link href="#">
            <Vector />
          </Link>
          <p className="text-[#4D4D4D] mt-5 ml-3 hidden lg:block">003</p>
          <Link href="#">
            <Twitter />
          </Link>
          <p className="text-[#4D4D4D] mt-5 ml-3 hidden lg:block">004</p>
          <Link href="#" className="text-white">
            LAUNCH ULTIVERSE
          </Link>
          <div className="space-y-2 hidden md:block">
            <div className="h-0.5 w-14 bg-[#4D4D4D]" />
            <div className="ml-2">
              <div className="h-0.5 w-10 bg-[#4D4D4D]" />
            </div>
          </div>
        </ul>
      </div>
    </Container>
  );
}

export default Navbar;
