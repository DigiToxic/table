import React from "react";

function Header() {
  return (
    <div className="p-6 flex justify-between items-center">
      <div>
        <img className="w-20 rounded-md" src="/logo/table.png" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <p className="mr-12 ml-20">Roadmap</p>
        <p>Tokenomics</p>
      </div>
      <div className="flex justify-between items-center">
        <img className="w-7 mr-4" src="/logo/twAsset_21.svg" alt="" />
        <img className="w-7" src="/logo/tgAsset_22.svg" alt="" />
      </div>
    </div>
  );
}

export default Header;
