const Second = () => {
    return (
        <div className="second h-screen bg-blue-500 flex flex-col items-center justify-center px-8 text-center text-white">
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold mb-4">
                A Global Icon
            </h2>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-6">
                Sold in more than <span className="font-semibold">200 countries</span>,
                Coca-Cola is one of the most recognized brands in the world.
                From the classic glass bottle to bold campaigns, it’s been a
                symbol of refreshment and culture for over a century.
            </p>
            <p className="italic text-white/90">
                “Taste the Feeling.”
            </p>
        </div>
    )
}

export default Second;