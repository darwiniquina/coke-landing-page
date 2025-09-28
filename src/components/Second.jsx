
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Second = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        const splitTitle = new SplitText(".second-texts h2", {
            type: "chars, words"
        });

        const splitSubTitle = new SplitText(".second-texts p", {
            type: "chars, words"
        });

        mm.add("(min-width: 769px)", () => {
            gsap.from(splitTitle.chars, {
                opacity: 0,
                y: 50,
                x: -10,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".second",
                    start: "20% bottom",
                    end: "+=90%",
                    scrub: true,
                },
            });

            gsap.from(splitSubTitle.chars, {
                opacity: 0,
                x: -10,
                stagger: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".second",
                    start: "20% bottom",
                    end: "+=90%",
                    scrub: true,
                },
            });

            gsap.fromTo(".second-image",
                { x: "+=10vw", y: "0", opacity: 0 },
                {
                    x: "0", y: "+=10vw", opacity: 1, rotate: "0deg",
                    scrollTrigger: {
                        trigger: ".second",
                        start: "30% 80%",
                        end: "+=90%",
                        scrub: true,
                    },
                }

            )
        })

        mm.add("(max-width: 768px)", () => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".second",
                    start: "20% bottom",
                    end: "bottom bottom",
                    scrub: true,
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
        <div className="z-4 second relative h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
            <div className="second-texts  flex flex-col items-center md:items-start justify-center  md:text-left text-black md:w-1/2 space-y-6">
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

            <img
                src="images/second.webp"
                alt="soda"
                className="mt-6 md:mt-0 second-image rounded-4xl object-contain md:h-[60%] w-auto shadow-lg rotate-[0deg] md:rotate-[6deg]"
            />

            <div className="absolute top-60 right-10 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
            <div className="absolute top-80 right-32 w-5 h-5 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute top-100 right-16 w-8 h-8 bg-red-500 rounded-full opacity-30"></div>


            <div className="absolute bottom-30 left-32 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-red-500 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 left-16 w-3 h-3 bg-red-500 rounded-full opacity-30"></div>
        </div>
    );
};

export default Second;
