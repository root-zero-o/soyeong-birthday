import React from "react";
import Bar from "../components/Bar";
import bday from "../public/image/bday.png";
import Image from "next/image";
import YouTube from "react-youtube";

const song = () => {
  return (
    <div className="wrapper">
      <span className="title py-20">🎶 Song</span>
      <Bar />
      <div className="w-[500px] pt-20">
        <Image alt="" src={bday} objectFit="contain" />
      </div>
      <YouTube
        videoId="AWrXKyFzg0o"
        opts={{
          width: "560",
          height: "315",
          playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
        }}
      />
    </div>
  );
};

export default song;
