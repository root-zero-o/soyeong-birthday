import { useRouter } from "next/router";
import React from "react";
import Bar from "../components/Bar";

const About = () => {
  const router = useRouter();
  return (
    <div className="wrapper">
      <span className="title py-20">ðAbout</span>
      <Bar />
      <div className="font-kangwon-light text-xl space-y-8 flex flex-col items-center py-10 border-2 border-purple1 px-8 rounded-lg mt-8 bg-purple1/30">
        <span>* ì¬ì©ë ê¸°ì  : React.js, Next.js, Typescript, TailwindCSS</span>
        <span>* ê°ë° ê¸°ê° : 2022. 8. 15. íë£¨!</span>
        <span>* Made by ììì´ë¤ ìì ì¸ë</span>
        <button
          onClick={() =>
            router.push("https://github.com/root-zero-o/soyeong-birthday")
          }
          className="w-[150px] h-[50px] bg-purple2 text-white rounded-xl hover:cursor-pointer hover:bg-purple1/80 transition-all"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default About;
