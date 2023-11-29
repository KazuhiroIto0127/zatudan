import React from "react";
import JapaneseClock from "./JapaneseClock";

export default function Header(){
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
                <img src="wadaiLogo.png" className="mr-3 h-6 sm:h-9" alt="雑談話題ガチャ" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">雑談話題ガチャ</span>
            </a>
        </div>
        <JapaneseClock />
      </nav>
    </header>
  )
}
