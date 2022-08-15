import React from "react";
import { useRouter } from "next/router";

const Bar = () => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center px-10 font-kangwon-bold text-lg justify-evenly py-2 ">
      <div
        onClick={() => router.push("/")}
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        home
      </div>
      <div
        onClick={() => router.push("/gift")}
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Gift
      </div>
      <div
        onClick={() => router.push("/photo")}
        className="px-4  py-2 flex items-center justify-center  rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Photo
      </div>
      <div
        onClick={() => router.push("/song")}
        className="px-4 py-2 flex items-center justify-center  rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Song
      </div>
    </div>
  );
};

export default Bar;
