import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Second from "./components/Second";
import Third from "./components/Third";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {

    ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1, effects: true });
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
        </div>
      </div>
    </>
  );
}

export default App;