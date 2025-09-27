
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Third = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".third",
                    start: "20% bottom",
                    end: "bottom bottom",
                    scrub: true,
                    ease: "power4.inOut",
                },
            });

            tl1.from(".third-texts > *",
                { x: "100vw", opacity: 0, stagger: 0.3 },
            );

            tl1.from(".third-image",
                { x: "-100vw", opacity: 0 }
            );
        })

        mm.add("(max-width: 768px)", () => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".third",
                    start: "20% bottom",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            tl1.from(".third-image",
                { x: "100vw", opacity: 0 }
            );

            tl1.from(".third-texts > *",
                { x: "-100vw", opacity: 0, stagger: 0.3 },
            );
        })
    })

    return (
        <div className="third relative h-screen bg-green-500 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 space-y-6 gap-[3vw]">
            <img
                src="images/third.webp"
                alt="soda"
                className="third-image rounded-4xl object-contain md:h-[60%] w-auto shadow-lg rotate-[0deg] md:rotate-[-6deg]"
            />

            <div className="third-texts z-10 flex flex-col items-center md:items-start justify-center md:text-left text-white md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-6xl font-bold montserrat-bold">
                    Doing business the right way
                </h2>
                <p className="max-w-2xl text-base md:text-xl leading-relaxed montserrat">
                    We ensure that our impact extends well beyond our business. We are committed to remaining true to our purpose: to refresh the world and make a difference to build a more sustainable future.
                </p>
            </div>


        </div>
    );
};

export default Third;
