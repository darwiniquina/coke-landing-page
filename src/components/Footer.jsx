function Footer() {
    return (
        <footer className="bg-white text-black py-8 px-6 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">Coca-Cola</h3>
                    <p className="text-sm text-gray-400">
                        Refreshing the world since 1886.
                    </p>
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-red-500 transition">Products</a>
                    <a href="#" className="hover:text-red-500 transition">Sustainability</a>
                    <a href="#" className="hover:text-red-500 transition">Contact</a>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
                <p>
                    © {new Date().getFullYear()} The Coca-Cola Company (Brand).
                    This is a fan-made site built with React & GSAP for educational and portfolio purposes only.
                </p>
                <p className="mt-1">Created by Darwin Iquina</p>
            </div>
        </footer>
    );
}

export default Footer;
