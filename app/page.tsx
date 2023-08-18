import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white bg-[#2A2F4F] h-screen w-full flex justify-center items-center">
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
          designing) digital experiences. Currrently, I'm dedicated to learning
          and collaborating with diverse teams to drive impactful software
          development outcomes.
        </p>
      </div>
    </main>
  );
}
