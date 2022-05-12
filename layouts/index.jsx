import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";


function MainLayout({ children }) {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r to-[#181E41]  from-[#653A3C]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
