import Image from "next/image";
// Importing Banner Images
import motor from "public/images/home_banner/motor.jpg";
import mcb from "public/images/home_banner/mcb.jpg";
import tap from "public/images/home_banner/tap.jpg";
import transformer from "public/images/home_banner/transformer.jpg";
import wire from "public/images/home_banner/wire.jpg";
import valves from "public/images/home_banner/valves.jpg";

export default function Homebanner() {
  return (
    <div className="w-full h-[40rem] sm:h-[32rem] flex justify-between px-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-16 w-full">
        {/* left banner */}
        <div className="px-8 py-8 sm:py-20 flex flex-col">
          <h2 className="font-lato text-xl sm:text-3xl leading-9 sm:leading-[3rem] font-light tracking-tight">
            <span className="font-normal">Global platform </span>
            to source quality
            <span className="text-indigo-600 font-normal">
              {" "}
              Electrical Goods
            </span>{" "}
            and
            <span className="text-teal-600 font-normal">
              {" "}
              Industrial MRO components
            </span>{" "}
            from
            <span className="font-normal"> 1000+ reliable exporters</span>
          </h2>
          <div className="mt-4 sm:mt-8">
            <button className="bg-indigo-600 px-12 py-2 rounded-xl text-white text-xl">
              Learn More
            </button>
          </div>
        </div>
        {/* left banner ends */}
        {/* right banenr */}
        <div className="container mx-auto max-w-2xl">
          <div className="px-8 sm:px-16 xl:px-20 py-4 sm:py-16 grid grid-cols-3 grid-rows-3 gap-3">
            <div className="w-full h-full">
              <Image
                src={tap}
                alt="tap"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
            <div className="w-full h-full col-span-2 row-span-2">
              <Image
                src={transformer}
                alt="transformer"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
            <div className="w-full h-full">
              <Image
                src={mcb}
                alt="mcb"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
            <div className="w-full h-full">
              <Image
                src={valves}
                alt="valves"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
            <div className="w-full h-full">
              <Image
                src={wire}
                alt="wire"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
            <div className="w-full h-full">
              <Image
                src={motor}
                alt="motor"
                className="w-full h-full rounded object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* right banner ends */}
      </div>
    </div>
  );
}
