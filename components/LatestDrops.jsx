import React from "react";
import {Buttons} from "../utils/buttons";
import Arrows from "./reusable_components/Arrows";
import Button  from "./reusable_components/Button";
import Header from "./reusable_components/Header";
// import NFT from "./reusable_components/NFT";

function LatestDrops() {
  return (
    <div className="w-full max-w-[87%] mx-auto pb-28 ">
      <Header header="Latest Drop" />
      <div className="w-full justify-between flex items-center">
      {Buttons.map((button, i) => (
        <Button text={button.name} isActive={button.active} key={i} />
      ))}
      </div>
      <Arrows />
    </div>
  );
}

export default LatestDrops;
