"use client"
import Image from "next/image";
import one from "media/lp-three/works/1.png";
import two from "media/lp-three/works/2.png";
import three from "media/lp-three/works/3.png";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from "react";

const Works = () => {
    let data = [
        {
            icons: one,
            title: "Innovative Ideas",
            desc: "We have experts that care the most about what you think, so they plan accordingly and turn your ideas into a product that can speak for itself."
        },
        {
            icons: two,
            title: "Execution",
            desc: "The only thing that matters is the outcome. When we know that our customers are satisfied, we create products and designs that are out of the box."
        },
        {
            icons: three,
            title: "Delivery",
            desc: "On-time delivery is our best service. We take care of your project once it's completed and keep track until it is delivered safe and according to your breif."
        }
    ]
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="py-[50px] lg:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                            How It Works
                        </h2>
                        <span className="block w-[10%] h-[4px] bg-[#dd1e4b] mt-3 mb-3 m-auto"></span>
                        <p className="text-[14px] font-poppins xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#6f6f6f] font-normal lg:w-1/2 lg:m-auto">
                            We follow an in-depth process to create the most outstanding and professional logo design possibly out there
                        </p>
                    </div>
                    <swiper-container ref={swiperRef}>
                        {
                            data && data.map((e, i) => (
                                <swiper-slide key={i}>
                                    <div className="text-center">
                                        <Image src={e.icons} alt="icons" height={120} className="inline-block" />
                                        <h3 className="text-[18px] lg:text-[20px] text-[#2f323a] font-poppins font-bold leading-tight my-3">
                                            {e.title}
                                        </h3>
                                        <p className="text-[14px] font-poppins leading-[24px]  text-[#6f6f6f] font-normal">
                                            {e.desc}
                                        </p>
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

export default Works;