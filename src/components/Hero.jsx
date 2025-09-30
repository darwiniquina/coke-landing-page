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

        tl.from([".hero-message", ".hero-message-badge", ".hero-sub-message"], {
            y: 100,
            opacity: 0,
            stagger: 0.2
        });

        tl.from(".hero-button", {
            opacity: 0,
            width: 0,
        });

        mm.add("(min-width: 768px)", () => {
            tl.from(".soda-bg", {
                scale: 0,
                opacity: 0,
                rotate: "360deg",
            });

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
                y: "150vh",
                x: "-50vw",
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
                    y: "150vh",
                    x: "-50vw",
                    rotate: "40deg",
                    ease: "none",
                },
                {
                    y: "300vh",
                    x: "20vw",
                    rotate: "-30deg",
                    ease: "none",
                }
            );
        })


        tl.fromTo(".soda",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, ease: "back.out(1.7)" }
        );
    });

    return (
        <div className="z-5 relative first h-screen flex flex-col md:flex-row items-center justify-center gap-6  px-6  flex-wrap">
            <div className="z-3 flex flex-col gap-4 md:gap-6  md:items-start text-left">

                <h1 className=" hero-message z-2 relative text-[clamp(3rem,7vw,10rem)] montserrat-bold text-black leading-none">
                    Coca-Cola
                </h1>


                <p className=" hero-sub-message mt-1 mb-5  montserrat text-black/90 max-w-2xl text-base md:text-2xl">
                    Refreshing the world one sip at a time. Experience the joy, taste the feeling, and connect with moments that matter.
                </p>

                <div className="hover:bg-neutral-100 hero-button cursor-pointer w-full border-1 border-black rounded-full p-2 md:p-4 text-center text-xs font-bold text-red-600 ">
                    Explore Products
                </div>
            </div>


            <img
                className="z-2 soda w-[100vw] md:w-[40vw]"
                src="images/coke.png"
                alt="soda"
            />

            <div className="z-1 absolute w-full h-full ">
                <img src="images/coke.png" className="hidden md:block soda-bg left-[40vw] top-[2vw] scale-150 absolute blur-[6px] rotate-30" alt="test" />
            </div>

            <div className="absolute top-20 left-16 w-6 h-6 bg-red-500 rounded-full opacity-30"></div>
            <div className="absolute top-28 left-32 w-4 h-4 bg-red-500 rounded-full opacity-20"></div>

            <div className="absolute top-40 left-16 w-3 h-3 bg-red-500 rounded-full opacity-30"></div>
        </div>
    );
}

export default Hero;