import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { brands } from "../../constants/index.js";

const Slider = () => {
    return (
        <div className="bg-black">
            <h1 class="montserrat-bold text-white text-3xl font-bold text-center p-4">
                Explore Our Brands
            </h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={24}
                loop={true}
                speed={2000}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Autoplay]}
                className="mySwiper "
            >
                {brands.map((src, index) => (
                    <SwiperSlide key={index} className="bg-white ">
                        <img src={src} alt={`Brand ${index + 1}`} className=" " />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;
