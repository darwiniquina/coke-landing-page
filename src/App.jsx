import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Second from "./components/Second";
import Third from "./components/Third";
import Slider from "./components/Slider";
import Fourth from "./components/Fourth";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
      smoothTouch: 0.1,
    });

    ScrollTrigger.refresh();
  });

  return (
    <>
      <Navigation />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Second />
          <Third />
          <Fourth />
          <Slider />
        </div>
      </div>
    </>
  );
}

export default App;