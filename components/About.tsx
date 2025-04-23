"use client";

import React from "react";

import { aboutme } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const About = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Get to know
        <span className="text-purple"> me </span>
        better
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={aboutme}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
