import React from "react";
import Bar from "../components/Bar";
import Timer from "../components/Timer";

const Gift = () => {
  return (
    <div className="wrapper">
      <span className="title py-20">πGift</span>
      <Bar />
      <span className="font-kangwon-light text-lg py-10">
        μ λ¬Όμ μλ₯ λλκ³  μ¬μ€κ²..π
      </span>
      <Timer />
    </div>
  );
};

export default Gift;
