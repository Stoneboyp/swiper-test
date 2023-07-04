import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import 'swiper/css';
import { Mousewheel, Pagination, Virtual } from 'swiper/modules';
const SlideList = () => {
    const newsListSwiperRef = useRef<SwiperRef>(null);
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <Swiper
            ref={newsListSwiperRef}
            spaceBetween={-40}
            slidesPerView={5}
            slidesOffsetAfter={175}
            slidesOffsetBefore={255}
            centeredSlidesBounds={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={true}
            modules={[Mousewheel, Pagination, Virtual]}
            virtual
        >
            {test.map((item, index) =>
                <SwiperSlide key={item} virtualIndex={index}>
                    <img
                        src={`../../../public/images/slider/image 1-${item}.jpg`}
                        width={320}
                        height={480}
                    />
                </SwiperSlide>
            )}

            {/* <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-1.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-2.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-3.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-4.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-5.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-6.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-7.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-8.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-9.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-10.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="../../../public/images/slider/image 1-11.jpg"
                    width={320}
                    height={480}
                />
            </SwiperSlide> */}
        </Swiper>


    );
}

export default SlideList