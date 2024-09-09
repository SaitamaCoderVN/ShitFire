'use client';

import dynamic from "next/dynamic";
import Airdrop from "./clean";
import { Hero, Highlight } from "@/components/ui/hero";
import HeroImage, { HeroImage2 } from "@/components/svgcomponents/HeroImage";
import { Button } from "@/components/ui/button";
import { px } from "framer-motion";
import ShitCoffee from '@/assets/funny-shit.gif'
import FallingImages from './falling-images';

function AirdropPage({ buttonSize = "lg" as const }) {
  return (
    <div className=" mt-5 w-full flex flex-col justify-between items-center relative">
      {/* <FallingImages /> */}
      <Hero className="flex items-center  px-10">
        <div>
          <h1
            className="text-sm lg:text-xl font-semibold  text-black w-[95%] dark:text-zinc-400 max-w-4xl leading-relaxed lg:leading-snug  lg:text-left"
          >
            <Highlight className="text-left mb-2.5 text-4xl lg:text-7xl -top-9 font-bold">
              Clean Shit
            </Highlight>
            {/* break line */} <br />

            Clean {" "}
            <span className="bg-primary bg-clip-text text-transparent ">
              Shit NFT 
            </span>{" "}brings a refreshing twist to digital collectibles. It's a playful yet polished piece that stands out with its crisp design. Perfect for friends who appreciate a bit of humor and sophistication, this NFT adds a clean and clever touch to any collection.
          </h1>
          <Button 
            className={`mt-10 ${
              buttonSize === "lg" ? "text-lg px-8 py-4" : 
              buttonSize === "sm" ? "text-base px-8 py-4" : 
              "text-sm px-40 py-20"
            } font-semibold box`} 
            style={{ 
              width: '200px', 
              height: '60px',
              border: '2px solid #000',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
              transition: 'all 0.3s ease',
            }}
            size={buttonSize}
            onClick={() => {
              const button = document.querySelector('.box');
              const image = document.createElement('img');
              image.src = ShitCoffee.src;
              image.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 30px;
                height: 30px;
                animation: fall 1s forwards;
              `;
              button?.appendChild(image);

              setTimeout(() => {
                image.remove();
              }, 1000);
            }}
          >
            Clean
          </Button>
          <style jsx>{`
            @keyframes fall {
              0% {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              100% {
                transform: translate(-50%, 100%) rotate(180deg);
              }
            }
          `}</style>
        </div>
        <div className="w-[40%] hidden lg:block">
          <HeroImage2 />
        </div >
        
      </Hero>
      {/* <Airdrop /> */}
    </div>
  );
}

export default dynamic(() => Promise.resolve(AirdropPage), { ssr: false });
