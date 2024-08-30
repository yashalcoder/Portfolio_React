import React from "react";
import Yash from "../images/yash2.png";
import { Copy, Github, Linkedin, PhoneCall, Youtube } from "lucide-react";
export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 sm:mx-[100px]">
      <div className="col-span-1 row-span-3 rounded-xl bg-black mb-5 pb-4 text-white ">
        <div className="bg-gray-900 px-10 m-6 rounded-xl">
          <img className="" src={Yash} />
        </div>
        <h1 className="font-bold font-poppins text-xl p-6 py-2">
          Yashal Rafique<span class="text-red-500">😊</span>{" "}
        </h1>
        <p className="px-6 font-poppins text-lg font-semibold">
          I am passionate{" "}
          <spna className="text-blue-700 font-bold">front end developer</spna>{" "}
          Having 1 year experience.Pursuing my degree in Computer Science from
          National University of Computer and Emerging sciences (FAST).
        </p>
        <div className="p-6 flex justify-between">
          <button className="bg-blue-600 text-lg flex gap-2 font-poppins font-bold p-4 rounded-xl">
            <PhoneCall className="pt-1" />
            Book a call
          </button>
          <button className="p-4 flex gap-2  rounded-xl border px-6 hover:bg-gray-900">
            <Copy />
            Copy Email
          </button>
        </div>
        <div className="px-6 flex gap-3">
          <Github className="bg-gray-900 rounded-full w-11 h-11 p-2" />
          <Linkedin className="bg-gray-900 rounded-full w-12 h-11 p-3" />
          <Youtube className="bg-gray-900 rounded-full w-11 h-11 p-2" />
          <PhoneCall className="bg-gray-900 rounded-full w-11 h-11 p-2" />
        </div>
      </div>
      <div className="col-span-1 row-span-1 bg-black rounded-xl text-white flex items-center justify-center">
        <h1>dsj</h1>
      </div>
      <div className="col-span-1 row-span-3 bg-black rounded-xl mb-5"></div>
      <div className="col-span-1 row-span-1 rounded-xl bg-black"></div>
    </div>
  );
}
