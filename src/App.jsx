import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import {
  AiFillAndroid,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Images from "./Components/Images";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white md:px-20 lg:px-40 dark:bg-gray-900">
          <section className=" p-10">
            <nav className=" flex justify-between mb-12">
              <div className=" flex items-center bg-gradient-to-r from-teal-500 to-green-500 p-1 border rounded-md">
                <h1 className=" text-lg font-bold text-red-700 ">AOU</h1>
                <div className=" text-lg">
                  <BsGearFill />
                </div>
              </div>
              <div className=" flex items-center text-lg px-2 rounded-md dark:bg-slate-400">
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-lg"
                />
                <a className=" ml-8 text-lg font-bold text-blue-950" href="#">
                  DevelopedbyALL OF US
                </a>
              </div>
            </nav>
            <div>
              <Navbar />
            </div>
            <div>
              <Hero />
            </div>
            <div>
              <Analytics />
            </div>
            <div className=" p-10 ">
              <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                David Mtonga
              </h2>
              <div className=" dark:bg-slate-300 rounded-md p-2">
                <h3 className=" font-bold text-2xl text-gray-900 md:text-3xl py-2">
                  Web Developer and designer.
                </h3>
                <p className=" text-md py-5 font-medium leading-8 text-gray-800 md:text-xl max-w-1 mx-auto">
                  A motived, adapted and responsible computing under-graduate
                  seeking a position in the IT department which will utilize the
                  technical skills developed through II years of university
                  experience. I have a methodical, customer-focused approach to
                  work and a strong drive to see things through to completion.
                </p>
              </div>
              <div>
                <Images />
              </div>
            </div>
            <div className=" flex text-5xl justify-center gap-8 py-3 text-gray-600">
              <AiFillLinkedin />
              <AiFillAndroid />
              <AiFillGithub />
              <AiFillTwitterCircle />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
