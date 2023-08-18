import Image from "next/image";
import PageLayout from "./components/pageLayout";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <PageLayout>
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <Sidebar />
        <div className="w-2/3">
          <div className="text-[#9CFF2E] pb-8 tracking-widest text-md">
            Hi, my name is ...
          </div>
          <div className="font-semibold text-[#ECF2FF] text-6xl tracking-wide pb-4">
            Aayushi Agarwal.
          </div>
          <div className="font-semibold text-[#d3e1ff] text-6xl tracking-wide">
            I build things for the web.
          </div>
          <p className="py-8 text-[#d3e1ff] text-md w-1/2 leading-7">
            I'm a software engineer specializing in building (and occasionally
            designing) digital experiences. Currrently, I'm dedicated to
            learning and collaborating with diverse teams to drive impactful
            software development outcomes.
          </p>
          <div>
            <div className="border-2 border-solid rounded-md border-[#9CFF2E] px-4 py-4 w-[13rem] hover:text-[#2A2F4F] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white hover:border-white duration-[400ms,600ms] transition-[color,box-shadow] cursor-pointer">
              Know more about me!
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
