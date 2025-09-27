
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);


const Fourth = () => {
    useGSAP(() => {
        const splitTitle = new SplitText(".fourth h2", {
            type: "chars, words"
        });

        const splitSubTitle = new SplitText(".fourth p", {
            type: "chars, words"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".fourth",
                start: "40% 80%",
                end: "bottom bottom",
                scrub: true,
                scrubEase: "power1.inOut",
            },
        })

        tl.from(splitTitle.chars, {
            opacity: 0,
            y: 50,
            rotationX: 90,
            rotationY: 90,
            transformOrigin: "50% 50% -50",
            stagger: 0.05,
            duration: 0.8,
            ease: "back.inOut",
        });

        tl.from(splitSubTitle.chars, {
            opacity: 0,
            x: -10,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
        });



    })

    return (
        <div className="fourth h-screen bg-yellow-500 flex flex-col items-center justify-center px-8 text-center">
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold mb-4">
                More Than a Drink
            </h2>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-6">
                Coca-Cola has fueled moments of joy at concerts, movies, and
                family gatherings. It’s more than just a beverage — it’s a
                <span className="font-semibold">shared experience</span>.
            </p>
            <p className="italic text-black/70">
                “Share a Coke, share a smile.”
            </p>
        </div>
    )
}

export default Fourth;