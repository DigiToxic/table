import React from "react";

function Tokenomics() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <p className="text-4xl">Tokenomics</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-14">
          <li className="text-xl mb-4">Locked liquidity at $25k</li>
          <li className="text-xl mb-4">Tax 2/2 (We will drop to 1/1 at 200k MC)</li>
          <li className="text-xl mb-4">2/2 taxes</li>
          <li className="text-xl mb-4">100% LP (fair launch)</li>
          <li className="text-xl mb-4">Renounced</li>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
