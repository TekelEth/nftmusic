import Head from "next/head";
import Image from "next/image";
import FAQ from "../components/FAQ";
import Hero_side1 from "../components/Hero_side1";
import Hero_side2 from "../components/Hero_side2";
import LatestDrops from "../components/LatestDrops";
import Artist from "../components/reusable_components/Artist";
import Section1_left from "../components/Section1_left";
import Section1_Right from "../components/Section1_Right";
import Gridlayout from "../layouts/Gridlayout";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <Head>
        <title>NFT Music App</title>
        <meta
          name="description"
          content="An Music NFT decentralized apllication"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="w-full my-20 container max-w-[87%] grid grid-cols-2 mx-auto">
        <div className="col-span-1">
          <Hero_side1 />
        </div>
        <div className="col-span-1">
          <Hero_side2 />{" "}
        </div>
      </div>

    {/* About Section */}
      <div className="w-full my-28 container  max-w-[85%] grid grid-cols-2 mx-auto">
        <div className="col-span-1">
          <Section1_left />
       </div>
       <div className="col-span-1">
          <Section1_Right />
       </div>
      </div>
    
    {/* Latest Drops */}
    <LatestDrops />

    {/* Artist */}
    <Artist />

    {/* Faq */}
    <FAQ />
    </div>
  );
}
