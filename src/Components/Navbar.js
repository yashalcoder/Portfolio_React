import React from "react";
import logo from "../images/logo.png";
import {
  BookAIcon,
  ContactIcon,
  HomeIcon,
  LucideHome,
  MessageSquareIcon,
  MoonIcon,
  PencilIcon,
  StarIcon,
  SunIcon,
  SunriseIcon,
  Sunset,
  WormIcon,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="sm:mx-[100px] my-5 flex justify-between bg-black rounded-xl font-bold text-white font-poppins shadow-lg p-2">
        <div className="p-2 font-poppins">
          <h1 className="text-2xl">
            Yashal
            <span className="text-blue-700 font-bold ">Folio</span>
          </h1>
        </div>
        <div className=" flex ">
          <a
            href="#"
            className="flex gap-2 text-gray-500 p-3 hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <LucideHome className="text-white" />
            Home
          </a>
          <a
            href="#"
            className="flex gap-2 text-gray-500 p-3  hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <ContactIcon className="text-white" />
            About
          </a>
          <a
            href="#"
            className="text-gray-500 p-3 flex gap-2 hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <StarIcon className="text-white" />
            Services
          </a>
          <a
            href="#"
            className="flex gap-2 text-gray-500 p-3  hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <WormIcon />
            Works
          </a>
          <a
            href="#"
            className="text-gray-500 p-3 flex gap-2 hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <PencilIcon className="text-white" />
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-500 p-3  flex gap-2 hover:bg-gray-900 rounded-lg hover:text-white text-lg"
          >
            <MessageSquareIcon className="text-white" />
            Contact
          </a>
        </div>
        <div className="flex gap-6">
          <SunIcon className="text-white m-3" />
          <button className="text-lg px-4 hover:bg-blue-700 bg-gray-900 p-3 rounded-md">
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
