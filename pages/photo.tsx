import React, { useCallback, useRef, useState } from "react";
import Bar from "../components/Bar";
import Webcam from "react-webcam";

const Photo = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);
  return (
    <div className="wrapper ">
      <span className="title py-20">๐ทPhoto</span>
      <Bar />
      <div className="py-10 flex flex-col items-center space-y-4">
        <span className="font-kangwon-bold text-lg">
          ์์ผ ๊ธฐ๋ ์ฌ์ง์ ์ฐ์ด๋ณด์ธ์! (์ฌ์ง์ ์ฐํด๋ฆญ์ผ๋ก ์ ์ฅ ๊ฐ๋ฅํฉ๋๋ค.)
        </span>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button
          className="w-[150px] h-[70px] bg-purple1 rounded-xl text-white text-2xl font-kangwon-bold"
          onClick={capture}
        >
          ๐ท ์ฐฐ์นต!
        </button>
      </div>

      {imgSrc && (
        <div className="px-4 bg-white flex flex-col items-center  pt-4 pb-16">
          <img src={imgSrc} />
          <span className="font-kangwon-bold text-xl pt-4">
            2022. 8. 15. ์์ ์์ผ ๊ธฐ๋๐
          </span>
        </div>
      )}
    </div>
  );
};

export default Photo;
