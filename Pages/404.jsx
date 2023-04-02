import Link from "next/link";
import React from "react";
import "../app/globals.css";

export default function FileNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white h-screen">
      <div className="h-full  relative not-found w-full px-6 py-24 sm:py-32 lg:px-8">
        <div className="overlay absolute z-10"></div>
        <div className="text-center my-0 mx-auto flex flex-col">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 ">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 block text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
        <div className="overlay-btm absolute"></div>
      </div>
    </main>
  );
}
