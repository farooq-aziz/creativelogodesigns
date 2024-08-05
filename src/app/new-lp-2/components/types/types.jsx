"use client"
// Next
import Image from "next/image";
import Pringles from "media/new-lp-2/pringles.png"
import LG_symbol from "media/new-lp-2/LG_symbol.png"
import Starbucks from "media/new-lp-2/starbucks.png"
import BMW from "media/new-lp-2/BMW.png"
// Swiper
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from "react";
const Types = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            speed: 1500,
            slidesPerView: 4,
            loop: true,
            autoplay: true,
            autoplayDelay: 2500,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 5,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    const logos = [
        {
            disc: "MASCOT LOGO",
            icon: Pringles,
        },
        {
            disc: "CORPORATE LOGO",
            icon: LG_symbol,
        },
        {
            disc: "EMBELEM LOGO",
            icon: Starbucks,
        },
        {
            disc: "MONOGRAM LOGO",
            icon: BMW,
        },
        {
            disc: "CALLIGRAPHY LOGO",
            icon: LG_symbol,
        },
    ]
    return (
        <div className="md:bg-[#f7f7f7] md:mt-0 mt-10 bg-red md:bg-[url('../../public/new-lp-2/bg.png')] bg-center bg-contain bg-no-repeat">
            <swiper-container init={false} ref={swiperRef} className="divide-x-2">
                {
                    logos && logos.map((e, i) => (
                        <swiper-slide key={i}>
                            <div className="flex items-center justify-center">
                                <h5 className="text-base px-2 leading-tight font-serif font-bold text-white">{e.disc}</h5>
                                <Image src={e.icon} alt="pringlesLogo" />
                            </div>
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </div>
    )
}

export default Types;
