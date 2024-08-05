"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import one from "media/lp-three/avatar/1.png";
import two from "media/lp-three/avatar/2.png";
import three from "media/lp-three/avatar/3.png";
import four from "media/lp-three/avatar/4.png";
import five from "media/lp-three/avatar/5.png";
import six from "media/lp-three/avatar/6.png";
import stars from "media/lp-three/avatar/stars.png";

const Reviews = () => {
    let data = [
        {
            img: two,
            avatar: one,
            name: "Aaron Mayne",
            message: "Creative Logo Designs created a logo for my business that perfectly captured my brand. Professional and easy to work with, I highly recommend their services."
        },
        {
            img: four,
            avatar: three,
            name: "Angelica Thomas",
            message: "Thanks to Creative Logo Designs, my startup has a strong brand identity with a unique and creative logo. Couldn't be happier!"
        },
        {
            img: six,
            avatar: five,
            name: "Lana Daniel",
            message: "Creative Logo Designs provided me with several design options and worked with me until I found the perfect logo. Highly recommend their professional and eye-catching designs."
        }
    ]
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            fadeEffect: { crossFade: true },
            injectStyles: [`
                .swiper-pagination-bullet-active {
                    background: #dd1e4b !important;
                }
            `],
            effect: "fade"
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="bg-[#dd1e4b] lg:h-[350px] xl:h-[300px] flex items-center">
                <div className="container">
                    <swiper-container ref={swiperRef} init={false}>
                        {
                            data && data.map((e, i) => (
                                <swiper-slide key={i}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 lg:py-0">
                                        <div className="hidden lg:block">
                                            <Image src={e.img} alt="img" className="block m-auto" />
                                        </div>
                                        <div className="text-center">
                                            <Image src={e.avatar} alt="avatar" className="rounded-full inline-block" />
                                            <h3 className="text-[20px] text-white leading-tight font-poppins font-semibold my-3">
                                                {e.name}
                                            </h3>
                                            <p className="text-[14px] leading-[22px] text-white font-poppins font-light lg:w-[80%] m-auto">
                                                {e.message}
                                            </p>
                                            <Image src={stars} alt="img" className="block m-auto mt-3" />
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default Reviews;