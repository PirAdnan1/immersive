import React from "react";


// comtainer
import Container from "@/components/Container";

function Text() {
  return (
    <Container>
    <div className="flex items-center gap-3 ml-8">
      <div className="flex space-x-1.5 items-center">
        <div className="w-0.5 h-3 bg-white" />
        <div className="w-0.5 h-9 bg-white" />
        <div className="w-0.5 h-5 bg-white" />
        <div className="w-0.5 h-9 bg-white" />
        <div className="w-0.5 h-5 bg-white" />
      </div>
      <div className="flex flex-col max-w-[620px]">
        <p className="uppercase text-white md:text-xl">
          utilizing metafi, ues. and web3 technology to
        </p>
        <p className="uppercase mt-3 md:mt-0 text-white md:text-xl">
          create a social and immersive gaming metaverse
        </p>
      </div>
    </div>
    </Container>
  );
}

export default Text;
