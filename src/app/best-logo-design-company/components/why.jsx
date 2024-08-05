"use client"
import Image from "next/image";
import one from "media/lp-three/why/1.png";
import two from "media/lp-three/why/2.png";
import three from "media/lp-three/why/3.png";
import four from "media/lp-three/why/4.png";
import five from "media/lp-three/why/5.png";
import six from "media/lp-three/why/6.png";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from "react";

const Why = () => {
    let dataOne = [
        {
            icons: one,
            title: "Exclusive Design Guarantee",
            desc: "All the designs and concepts are made from scratch by our talented designers, assuring you exclusive work."
        },
        {
            icons: two,
            title: "Industry-Based Niche Designers",
            desc: "We have an entire team that has plenty of experience in several industries. So whichever industry your business belongs to, we possess in-depth knowledge."
        },
        {
            icons: three,
            title: "Unlimited Revisions",
            desc: "You can have as many revisions as you want until you are completely satisfied with our work."
        }
    ]
    let dataTwo = [
        {
            icons: four,
            title: "100% Refund Policy",
            desc: "There is nothing we want more than your happiness, and if you do not like our services (that’s highly impossible, though), we will refund 100% of your money back."
        },
        {
            icons: five,
            title: "One Stop Shop",
            desc: "We provide every digital and design service that takes your business to the next level, from custom logo design to website development and video animation."
        },
        {
            icons: six,
            title: "Easy Installment Plans",
            desc: "We love startups and enthusiastic entrepreneurs. If you are one, you can avail of our easy installment plans for projects worth more than $999."
        }
    ]
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);
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
        Object.assign(swiperRef1.current, params);
        // initialize swiper
        swiperRef1.current.initialize();
        // Assign it to swiper element
        Object.assign(swiperRef2.current, params);
        // initialize swiper
        swiperRef2.current.initialize();
    }, []);
    return (
        <section>
            <div className="py-[50px] lg:py-[100px] bg-[#f5f5f5]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                            Why Us
                        </h2>
                        <span className="block w-[10%] h-[4px] bg-[#dd1e4b] mt-3 mb-3 m-auto"></span>
                        <p className="text-[14px] font-poppins xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#6f6f6f] font-normal lg:w-2/3 lg:m-auto">
                            Your satisfaction is our topmost priority. We provide revisions until you are 100% satisfied with our services. At Creative Logo Designs, we treat you like our Majesty.
                        </p>
                    </div>
                    <swiper-container ref={swiperRef1}>
                        {
                            dataOne && dataOne.map((e, i) => (
                                <swiper-slide key={i}>
                                    <div>
                                        <div className="text-center bg-white shadow-lg rounded-[10px] my-3 shadow-gray-200 p-5 min-h-[250px] group hover:bg-[#dd1e4b]">
                                            <Image src={e.icons} alt="icons" className="inline-block" />
                                            <h3 className="text-[18px] lg:text-[20px] text-[#2f323a] font-poppins font-bold leading-tight my-3 group-hover:text-white">
                                                {e.title}
                                            </h3>
                                            <p className="text-[14px] font-poppins leading-[24px]  text-[#6f6f6f] font-normal group-hover:text-white">
                                                {e.desc}
                                            </p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>
                    <swiper-container ref={swiperRef2}>
                        {
                            dataTwo && dataTwo.map((e, i) => (
                                <swiper-slide key={i}>
                                    <div>
                                        <div className="text-center bg-white shadow-lg rounded-[10px] my-3 shadow-gray-200 p-5 min-h-[250px] group hover:bg-[#dd1e4b]">
                                            <Image src={e.icons} alt="icons" className="inline-block" />
                                            <h3 className="text-[18px] lg:text-[20px] text-[#2f323a] font-poppins font-bold leading-tight my-3 group-hover:text-white">
                                                {e.title}
                                            </h3>
                                            <p className="text-[14px] font-poppins leading-[24px]  text-[#6f6f6f] font-normal group-hover:text-white">
                                                {e.desc}
                                            </p>
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

export default Why;