// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper h-full"
        >
            <SwiperSlide>
                <div className="h-[300px] flex items-center justify-center bg-red-500 text-white text-xl">
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[300px] flex items-center justify-center bg-blue-500 text-white text-xl">
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[300px] flex items-center justify-center bg-green-500 text-white text-xl">
                    Slide 3
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
