import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

interface IPorps {
  text: string;
}

const NoResult = ({ text }: IPorps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <p className="text-8xl">
        {text.includes("comment") ? <BiCommentX /> : <MdOutlineVideocamOff />}
      </p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResult;
