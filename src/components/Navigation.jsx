import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navigation() {
    useGSAP(() => {
        gsap.from(".nav-bar", {
            opacity: 0,
            y: -50,
            ease: "power1.in",
        });

        gsap.to(".nav-bar", {
            scrollTrigger: {
                trigger: "#smooth-content",
                start: "top top",
                end: "200 top",
                scrub: true,
            },
            opacity: 0,
            y: -50,
            ease: "power1.out",
        });
    });

    return (
        <nav className="nav-bar fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-6 py-4 flex justify-between items-center text-white">
            {/* Logo */}
            <div className="text-xl font-bold tracking-wide">
                <img src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coke-company-logo-black.svg" alt="logo" class="invert brightness-0" />
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-8 text-lg font-medium">
                <li className="cursor-pointer hover:opacity-80">Brand</li>
                <li className="cursor-pointer hover:opacity-80">Discover</li>
                <li className="cursor-pointer hover:opacity-80">Impact</li>
                <li className="cursor-pointer hover:opacity-80">Shop</li>
            </ul>

            {/* Mobile hamburger */}
            <button className="md:hidden text-white text-2xl">☰</button>
        </nav>
    );
}

export default Navigation;
