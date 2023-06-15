"use client";
import "./page.css";
import "./globals.css";

import { Permanent_Marker } from "next/font/google";
import Button from "./components/button";
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector(".button-cloud").addEventListener("click", () => {
      document.querySelector(".rocket").classList.add("launch");

      setTimeout(() => {
        document
          .querySelector(".draw-container")
          .classList.add("display-hidden");
      }, 2000);
    });
  });

  return (
    <>
      <div className="draw-container absolute">
        <div className="draw">
          <div className="rocket">
            <div rockts-parts>
              <div className="tail"></div>
              <div className="window"></div>
            </div>
          </div>

          <div className="smoke">
            <div className="one"></div>
            <div className="two">
              <div class="wrap">
                <button className="button-cloud">Launch Page</button>
              </div>
            </div>
          </div>
          <div className="stars">
            <div className="star one"></div>
            <div className="star two small"></div>
            <div className="star three small"></div>
            <div className="star four small"></div>
            <div className="star five"></div>
            <div className="star six samll"></div>
            <div className="star seven"></div>
            <div className="star eight small"></div>
          </div>
        </div>
      </div>
      <section className="description relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0 justify-end items-center py-0 sm:py-16">
            <div className="image-holder relative md:w-2/4">
              <div className="image absolute "></div>
            </div>
            <div className="flex flex-col justify-between md:w-2/4 text-slate-600 font-bold">
              <h2 className="text-5xl">
                <span className={marker.className}>
                  <span className="">Hello</span>
                  <span className="wave ">👋</span>
                  <br />
                  <span className="">I am Ayush !</span>
                </span>
              </h2>
              <h3 className="mt-6 font-bold text-xl">
                I am a Full Stack JavaScript Developer
              </h3>
              <p className="font-medium text-base py-2">
                As a Full Stack developer, I have a deep understanding of both
                frontend and backend web development. I possess a range of
                technical skills, including proficiency in programming languages
                such as HTML, CSS, JavaScript and database like MongoDB. I am
                also experienced in various frameworks and libraries like React
                , Next.js, Node.js to name a few.
              </p>
              <p className="font-medium text-base py-2">
                My work as a Full Stack developer has enabled me to create
                complex web applications that are both visually appealing and
                highly functional. From designing user interfaces to writing
                server-side code, handling databases, and deploying
                applications, I have the ability to take on every aspect of the
                development process.
              </p>
              <p className="font-medium text-base py-2">
                I have a strong eye for detail and a passion for delivering
                high-quality, efficient code. I am also experienced in working
                independently or as part of a team, and I understand the
                importance of effective communication and collaboration in
                achieving project goals.
              </p>
              <p className="font-medium text-base py-2">
                As a Full Stack developer, I am always looking for ways to
                expand my knowledge and stay up-to-date with the latest trends
                and technologies in the field. I am committed to continuous
                learning and improvement, and I strive to provide innovative
                solutions that meet the needs of my clients and users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
