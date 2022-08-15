import React from "react";
import Image from "next/image";
import image from "../public/image/img.jpg";
import Bar from "../components/Bar";

const Index = () => {
  return (
    <div className="wrapper">
      <span className="title py-20 ">🎉김소영 생일 축하합니다🎉</span>
      <Bar />
      <div className="w-[500px] pt-20">
        <Image alt="soyeong-pic" src={image} objectFit="contain" />
      </div>
      <span className="font-kangwon-bold pt-4">소영이의 19세 생일 기념</span>
    </div>
  );
};

export default Index;
