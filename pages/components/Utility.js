import React from "react";

function Utility() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="bg-black bg-opacity-80 px-4 py-1 rounded-xl">
          <p className="text-4xl text-white">Utility</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-14 bg-black bg-opacity-80 p-5 px-5 rounded-lg max-[1200px]:w-5/6 max-[450px]:px-3">
          <p className="text-white text-2xl text-center mb-5">TableChatBot</p>
          <p className="text-white text-center">
            Implement a TableTalk Chatbot powered by AI, which engages users in
            conversation about food, recipes, and dining experiences. Users can
            tip the chatbot with $table for valuable culinary insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Utility;
