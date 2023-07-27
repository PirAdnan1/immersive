import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";

// assets
import HeroDesign from "@/assets/Design.png";
import Lights from "@/assets/Lights.png";
import Senery from "@/assets/Senery.png";
import Play from "@/assets/Play.png";
import Model from "@/assets/Model.png";

function Hero() {
  return (
    <Container>
      <div>
        <div className="relative">
          <div className="absolute -top-80 hidden md:block">
            <div className="translate-x-1/3 -z-10">
              <Image src={HeroDesign} width={700} />
            </div>
            <div className="absolute top-36 left-[30rem] z-10">
              <Image src={Lights} width={200} height={200} />
            </div>
          </div>
        </div>
        <p className="text-[#4D4D4D]  mt-5 ml-3 text-center">001</p>
        <div className="flex justify-center flex-col mx-auto items-center">
          <h1 className="uppercase  text-white lg:text-8xl text-xl md:text-6xl font-bold">
            immersive
          </h1>
          <h1 className="uppercase text-white text-xl lg:text-8xl md:text-6xl font-bold lg:ml-96 md:ml-44">
            metaverse
          </h1>
        </div>
        <div className="">
          <div className="flex justify-end z-20 mr-16">
            <Image src={Senery} width={300} />
          </div>
          <div className="relative mt-12">
            <div className="absolute translate-x-2/3 right-56 -top-60">
              <Image src={Play} width={70} className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* <div className="absolute top-0 z-9999"> */}
        {/* <Image src={Model} height={721} /> */}
        {/* </div> */}
      </div>
    </Container>
  );
}

export default Hero;
