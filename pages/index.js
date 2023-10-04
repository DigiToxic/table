import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center ">
          <img src="/logo/table.png" alt="" />
          <div className="w-3/4 text-center mt-5">
            <p className="text-xl">
              Welcome to the table of infinite wisdom and mediocre snacks.
              We&lsquo;ve got a PhD in laughter and a master&lsquo;s degree in
              good company. Take a seat and prepare for a culinary adventure (or
              at least a decent meal). It&apos;s not just a coin; it&apos;s a
              path to financial wisdom. Enjoy
            </p>
          </div>
          <div className="flex justify-between items-center w-72 mt-10">
            <div className="bg-black px-3 py-0.5 rounded-lg cursor-pointer">
              <p className="text-white text-lg">Dextool</p>
            </div>
            <div className="bg-black px-3 py-0.5 rounded-lg cursor-pointer">
              <p className="text-white text-lg">Etherscan</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <Link href="https://twitter.com/tablecoinerc20">
              <img
                className="w-7 cursor-pointer mr-10"
                src="/logo/twAsset_21.svg"
                alt=""
              />
            </Link>
            <Link href="https://t.me/TableEthErc">
              <img
                className="w-7 cursor-pointer"
                src="/logo/tgAsset_22.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <Roadmap />
        <Tokenomics />
        <img
          className="absolute -z-10 opacity-25 top-0 right-[430px] w-[460px]"
          src="/IMG_4222.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 top-0 right-10 shadow-black shadow-lg w-96"
          src="/IMG_4216.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 bottom-[610px] right-10 shadow-black shadow-lg w-96"
          src="/IMG_4218.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 top-0 left-10 shadow-black shadow-lg max-[1200px]:hidden"
          src="/IMG_4219.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 bottom-[370px] left-10 shadow-black shadow-lg max-[1200px]:hidden"
          src="/IMG_4223.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 -bottom-7 left-10 w-96 shadow-black shadow-lg max-[450px]:hidden"
          src="/4jgrzz.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 -bottom-7 left-[450px] w-[580px] shadow-black shadow-lg max-[1200px]:hidden"
          src="/7c2705cc370a7c9463c784d058dfadd2.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-25 -bottom-7 right-[20px] w-[450px] h-[630px] shadow-black shadow-lg"
          src="/7t5hgv49kxc61.jpg"
          alt=""
        />

        <img
          className="absolute -z-10 opacity-25 top-[750px] right-[480px] w-[430px] h-[350px] shadow-black shadow-lg"
          src="/48a87eafdd70534fa542bac29aa65ed4.jpg"
          alt=""
        />

        <div className="flex justify-center items-center pt-32 pb-16">
          <div className="border-2 border-black w-3/4" />
        </div>

        <div className="flex flex-col justify-center items-center mb-10">
          <div className="bg-black bg-opacity-80 px-4 py-1 rounded-xl">
            <p className="text-4xl text-white">Disclaimer</p>
          </div>
          <p className="text-center mt-10 text-lg w-3/4">
            $Table isn&apos;t just about serious finance;Invest Wisely! <br />
            $Table is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}
