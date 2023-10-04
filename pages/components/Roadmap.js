import React from "react";

function Roadmap() {
  return (
    <div className="h-full mb-64 max-[1200px]:mb-32">
      <div className="flex justify-center items-center pt-10">
        <div className="bg-black bg-opacity-80 px-4 py-1 rounded-xl">
          <p className="text-4xl text-white">Roadmap</p>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-32 max-[1200px]:flex-col max-[1200px]:justify-center">
        <div className="flex flex-col border-2 border-black w-96 rounded-lg p-6 bg-black bg-opacity-80 max-[1200px]:w-5/6 max-[1200px]:mb-10">
          <p className="text-xl mb-4 text-white">Phase 1</p>
          <li className="text-white mb-2">
            Our table will launch a clean website with a lot of effort. You can
            expect a clean Telegram and Twitter
          </li>
          <li className="text-white mb-2">
            Our table we&apos;ll focus on building a strong and engaged
            community. Expect a lot of giveaways.
          </li>
          <li className="text-white mb-2">
            Our table will make debut on major exchanges.
          </li>
          <li className="text-white ">
            Our table starts a solidity course to create the $Table token
          </li>
        </div>
        <div className="flex flex-col border-2 border-black w-96 rounded-lg p-6 py-9 bg-black bg-opacity-80 max-[1200px]:w-5/6 max-[1200px]:mb-10">
          <p className="text-xl mb-4 text-white">Phase 2</p>
          <li className="text-white mb-4">
            Our table will start marketing and will work with a lot of
            influencers and we might reach $1M MC
          </li>
          <li className="text-white mb-4">Casually reach 1000 holders</li>
          <li className="text-white mb-4">
            Our table takes security seriously. We&apos;ll undergo audits and
            implement top-notch measures to ensure your investments are safe.
          </li>
        </div>
        <div className="flex flex-col border-2 border-black w-96 rounded-lg p-6 py-[70px] bg-black bg-opacity-80 max-[1200px]:w-5/6 max-[1200px]:mb-10">
          <p className="text-xl mb-4 text-white">Phase 3</p>
          <li className="text-white mb-4">
            Our table will start to buy every dip and burn every $Table token
          </li>
          <li className="text-white mb-4">
            Our table will launch an NFT collection for their holders
          </li>
          <li className="text-white mb-4">
            Our table has a surprise for everyone
          </li>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
