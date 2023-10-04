import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center mt-10">
          <img src="/table-photo.gif" alt="" />
          <div className="w-3/4 text-center mt-5">
            <p className="text-xl">
              Welcome to the table of infinite wisdom and mediocre snacks. We've
              got a PhD in laughter and a master's degree in good company. Take
              a seat and prepare for a culinary adventure (or at least a decent
              meal). It&apos;s not just a coin; it&apos;s a path to financial
              wisdom. Enjoy
            </p>
          </div>
          <div className="flex justify-between items-center w-72 mt-10">
            <div>
              <p>Dextool</p>
            </div>
            <div>
              <p>Etherscan</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <img className="w-7 mr-10" src="/logo/twAsset_21.svg" alt="" />
            <img className="w-7" src="/logo/tgAsset_22.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="relative">
        <Roadmap />
        <Tokenomics />
        <img
          className="absolute -z-10 opacity-50 top-0 right-[430px] w-[460px]"
          src="/IMG_4222.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 top-0 right-10 shadow-black shadow-lg w-96"
          src="/IMG_4216.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 bottom-[610px] right-10 shadow-black shadow-lg w-96"
          src="/IMG_4218.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 top-0 left-10 shadow-black shadow-lg"
          src="/IMG_4219.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 bottom-[370px] left-10 shadow-black shadow-lg"
          src="/IMG_4223.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 -bottom-7 left-10 w-96 shadow-black shadow-lg"
          src="/4jgrzz.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 -bottom-7 left-[450px] w-[580px] shadow-black shadow-lg"
          src="/7c2705cc370a7c9463c784d058dfadd2.jpg"
          alt=""
        />
        <img
          className="absolute -z-10 opacity-50 -bottom-7 right-[20px] w-[450px] h-[630px] shadow-black shadow-lg"
          src="/7t5hgv49kxc61.jpg"
          alt=""
        />

        <img
          className="absolute -z-10 opacity-50 top-[750px] right-[480px] w-[430px] h-[350px] shadow-black shadow-lg"
          src="/48a87eafdd70534fa542bac29aa65ed4.jpg"
          alt=""
        />

        <div className="flex justify-center items-center pt-32 pb-16">
          <div className="border-2 border-black w-3/4" />
        </div>

        <div className="flex flex-col justify-center items-center mb-10">
          <p className="text-4xl">Disclaimer</p>
          <p className="text-center mt-10">
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
