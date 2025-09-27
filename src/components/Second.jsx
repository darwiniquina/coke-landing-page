
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



const Second = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".second",
                    start: "20% bottom",
                    end: "bottom bottom",
                    scrub: true,
                    markers: true,
                    ease: "power4.inOut",
                },
            });

            tl1.from(".second-texts > *",
                { x: "-100vw", opacity: 0, stagger: 0.3 },
            );

            tl1.from(".second-image",
                { x: "100vw", opacity: 0 }
            );
        })

        mm.add("(max-width: 768px)", () => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".second",
                    start: "20% bottom",
                    end: "bottom bottom",
                    scrub: true,
                    markers: true,
                },
            });

            tl1.from(".second-texts > *",
                { x: "-100vw", opacity: 0, stagger: 0.3 },
            );

            tl1.from(".second-image",
                { x: "100vw", opacity: 0 }
            );
        })

    })

    return (
        <div className="second relative h-screen bg-blue-500 flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
            <div className="second-texts z-10 flex flex-col items-center md:items-start justify-center  md:text-left text-white md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-6xl font-bold montserrat-bold">
                    Commitment to a World Without Waste
                </h2>
                <p className="max-w-2xl text-base md:text-xl leading-relaxed montserrat">
                    We are turning our vision to reality by taking steps in collecting,
                    recycling the equivalent of every bottle or can we sell by 2030 and
                    create a greater impact by bringing people together to support a
                    healthy debris-free environment.
                </p>
            </div>

            <div className="second-image mt-8 md:mt-0 md:w-1/2 flex justify-center ">
                <img
                    src="images/second.webp"
                    alt="soda"
                    className="rounded-4xl object-contain md:h-[70%] w-auto shadow-lg rotate-[3deg] md:rotate-[-6deg]"
                />
            </div>
        </div>
    );
};

export default Second;
