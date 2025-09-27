const Third = () => {
    return (
        <div className="third h-screen bg-yellow-500 flex flex-col items-center justify-center px-8 text-center">
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

export default Third;