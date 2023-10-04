import React from "react";

function Tokenomics() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="bg-black bg-opacity-80 px-4 py-1 rounded-xl">
          <p className="text-4xl text-white">Tokenomics</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-14 bg-black bg-opacity-80 p-5 rounded-lg">
          <li className="text-xl mb-4 text-white">Locked liquidity at $25k</li>
          <li className="text-xl mb-4 text-white">
            Tax 2/2 (We will drop to 1/1 at 200k MC)
          </li>
          <li className="text-xl mb-4 text-white">2/2 taxes</li>
          <li className="text-xl mb-4 text-white">100% LP (fair launch)</li>
          <li className="text-xl text-white">Renounced</li>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
