// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import "./page.css";
import "./globals.css";

import { Permanent_Marker } from "next/font/google";
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <section className="description bg-grey">
        <div className="container">
          <div className="flex justify-end  py-16 ">
            <div className="image-holder relative w-2/4">
              <div className="image absolute"></div>
            </div>
            <div className="flex flex-col justify-between w-2/4 text-slate-700 font-bold">
              <h2 className="text-4xl ">
                <span className={marker.className}>
                  Hello<span className="text-4xl wave">👋</span>
                  <br />
                  <span className="text-4xl block ">I am Ayush !</span>
                </span>
              </h2>
              <h3 className="mt-6 font-bold text-xl">I am a Full Stack JavaScript Developer</h3>
              <p className="font-medium text-sm py-2">
                As a Full Stack developer, I am involved  in building modern
                and dynamic web applications using the React library. I have a
                strong understanding of JavaScript, as well as other front-end
                technologies like HTML, CSS, and various modern development
                tools. My experience in developing complex web applications
                demonstrates your ability to collaborate effectively with
                designers, back-end developers, and other stakeholders to ensure
                that the user interface is both visually appealing and highly
                functional.
              </p> 
              <p className="font-medium text-sm py-2"> 
                I have a deep understanding of React core
                concepts, such as component lifecycle, state and props
                management, and the virtual DOM, and i can leverage them to
                build performant and scalable applications. Your experience with
                various libraries and frameworks that complement React, such as
                Redux or React Router, demonstrates your ability to architect
                complex applications and manage state across components.
              </p>
              <p className="font-medium text-sm py-2">
                I have strong foundation in node.js for backend. I use express as 
                node framework to ease task . I have strong knowledge in MVC archiecture for 
                backend work . I can use MongoDB or Moongose as database. I have strong concept about
                relational and non-relational database .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
