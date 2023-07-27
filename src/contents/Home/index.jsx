import React from "react";

// components
import Navbar from "@/components/Navbar";
import List from "@/contents/Home/List";
import Hero from "./Hero";
import Text from "../Text";

function HomeContents() {
  return (
    <div>
      <Navbar />
     <List />
     <Hero />
     <Text />
    </div>
  );
}

export default HomeContents;
