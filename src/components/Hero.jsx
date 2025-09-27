import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Hero() {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        let tl = gsap.timeline({
            duration: 0.6,
        });

        tl.from([".hero-message", ".hero-sub-message", ".soda"], {
            y: 100,
            opacity: 0,
            stagger: 0.2,
        });

        mm.add("(min-width: 768px)", () => {
            ScrollTrigger.create({
                trigger: ".first",
                start: "top top",
                end: "bottom bottom",
                endTrigger: ".third",
                pin: ".soda",
            });

            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".second",
                    start: "start 100%",
                    end: "50% 50%",
                    scrub: true,
                },
            });

            tl1.to(".soda", {
                y: "120vh",
                x: "-45vw",
                scale: 0.7,
                rotate: "40deg",
                ease: "none",
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".third",
                    start: "start 100%",
                    end: "50% 50%",
                    scrub: true,
                },
            });


            tl2.fromTo(
                ".soda",
                {
                    y: "120vh",
                    x: "-45vw",
                    scale: 0.7,
                    rotate: "40deg",
                    ease: "none",
                },
                {
                    y: "220vh",
                    x: "40vw",
                    scale: 1,
                    rotate: "-30deg",
                    ease: "none",
                }
            );

        })
    });

    return (
        <>
            <div className="relative first h-screen bg-gradient-to-b from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center px-6 text-center">

                <h1 className="hero-message z-2 relative text-[clamp(3rem,10vw,12rem)] montserrat-bold text-white leading-none">
                    Coca-Cola
                </h1>

                <div className="hero-sub-message">
                    <p className="z-3 mt-0 montserrat text-white text-xl md:text-2xl font-light tracking-wide">
                        “Open Happiness” since 1886
                    </p>

                    <p className="mt-1 mb-5 z-2 montserrat-italic text-white/90 max-w-lg text-base md:text-lg">
                        Refreshing the world, one sip at a time.
                    </p>
                </div>


                <img
                    className="z-3 soda w-[100vw] max-w-[25rem] md:w-[30vw] md:max-w-[35rem] "
                    src="images/coke.png"
                    alt="soda"
                />

                <div className="absolute top-20 left-16 w-6 h-6 bg-white rounded-full opacity-30"></div>
                <div className="absolute top-28 left-32 w-4 h-4 bg-white rounded-full opacity-20"></div>
                <div className="absolute top-36 right-20 w-8 h-8 bg-white rounded-full opacity-25"></div>

            </div>
        </>
    );
}

export default Hero;