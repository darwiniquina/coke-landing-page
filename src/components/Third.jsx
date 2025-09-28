
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Third = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        const splitTitle = new SplitText(".third-texts h2", {
            type: "chars, words"
        });

        const splitSubTitle = new SplitText(".third-texts p", {
            type: "chars, words"
        });


        mm.add("(min-width: 769px)", () => {

            gsap.fromTo(".third-image",
                { x: "-=10vw", y: "0", opacity: 0 },
                {
                    x: "0", y: "+=10vw", opacity: 1, rotate: "0deg",
                    scrollTrigger: {
                        trigger: ".third",
                        start: "30% 80%",
                        end: "+=90%",
                        scrub: true,
                    },
                },
            )

            gsap.from(splitTitle.chars, {
                opacity: 0,
                y: 50,
                x: -10,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".third",
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
                    trigger: ".third",
                    start: "20% bottom",
                    end: "+=90%",
                    scrub: true,
                },
            });

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
        <div className="z-3 third relative h-screen bg-white text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-12 space-y-6 gap-[3vw]">
            <img
                src="images/third.webp"
                alt="soda"
                className="third-image rounded-4xl object-contain md:h-[60%] w-auto shadow-lg rotate-[0deg] md:rotate-[-6deg]"
            />

            <div className="third-texts z-10 flex flex-col items-center md:items-start justify-center md:text-left  md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-6xl font-bold montserrat-bold">
                    Doing business the right way
                </h2>
                <p className="max-w-2xl text-base md:text-xl leading-relaxed montserrat">
                    We ensure that our impact extends well beyond our business. We are committed to remaining true to our purpose: to refresh the world and make a difference to build a more sustainable future.
                </p>
            </div>


            <div className="absolute bottom-20 right-10 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
            <div className="absolute bottom-30 right-32 w-5 h-5 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-40 right-16 w-8 h-8 bg-red-500 rounded-full opacity-30"></div>


        </div>
    );
};

export default Third;
