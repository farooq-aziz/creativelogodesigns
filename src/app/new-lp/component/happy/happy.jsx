"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../happy/happy.module.css'
import logo1 from 'media/new-lp/happy/1.webp'
import logo22 from 'media/new-lp/happy/2.webp'
import logo3 from 'media/new-lp/happy/3.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import logo11 from 'media/new-lp/happy/arr1.png'
import logo2 from 'media/new-lp/happy/arr2.png'

const Happy = () => {



    var settings = {

        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Image alt="logos" src={logo11} className='img-fluid' />,
        prevArrow: <Image alt="logos" src={logo2} className='img-fluid' />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };



    return (
        <>
            <section className={`${styles.happy} bg-[#fbfbfb] font-poppins lg:py-[80px] md:py-[80px] sm:py-[80px] py-[50px]`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className={styles.longa}>
                            <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-[700] text-center mb-10 text-[#ffff]">Words from Happy Clients </h2>

                        </div>
                        <Slider {...settings} className={`${styles.limpo} newarrr`}>

                            <div>

                                <div className="flex flex-col items-center">
                                    <Image alt="logos" src={logo22} className="" />

                                    <p className="lg:text-[22px] md:text-[22px] sm:text-[22px] text-[16px] text-[#ffff] max-w-[850px] m-auto mb-5 mt-5 text-center">“I needed a logo and they provided great service over and beyond. They made sure
                                        everything was what I wanted and more. The customer service is great, and they followed
                                        up with calls, emails and text messages.”</p>

                                    <h4 className="text-[20px] text-[#ffff] font-[600]">Cheryl Tawana</h4>
                                </div>
                            </div>

                            <div>

                                <div className="flex flex-col items-center">
                                    <Image alt="logos" src={logo1} className="" />

                                    <p className="lg:text-[22px] md:text-[22px] sm:text-[22px] text-[16px] text-[#ffff] max-w-[850px] m-auto mb-5 mt-5 text-center">

                                        “Creative Logo Designs Team was brilliant from start to finish,extremely professional, knowledgeable and responsive. Highly recommend! thank you for creating my new logo,
                                        ”

                                    </p>

                                    <h4 className="text-[20px] text-[#ffff] font-[600]">Jonathan Yang</h4>
                                </div>
                            </div>

                            <div>

                                <div className="flex flex-col items-center">
                                    <Image alt="logos" src={logo3} className="" />

                                    <p className="lg:text-[22px] md:text-[22px] sm:text-[22px] text-[16px] text-[#ffff] max-w-[850px] m-auto mb-5 mt-5 text-center">
                                        “Creative Logo Designs helped my customers recognize the genuineness and authenticity of my brand. Thanks to Creative Logo Designs and its team for their true dedication and hard work.”
                                    </p>

                                    <h4 className="text-[20px] text-[#ffff] font-[600]">David Guzman</h4>
                                </div>
                            </div>

                        </Slider>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Happy;