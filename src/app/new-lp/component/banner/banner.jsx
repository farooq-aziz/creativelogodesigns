"use client"

import Image from "next/image";
import Link from "next/link";
import styles from '../banner/banner.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import One from "media/new-lp/homeslider/1.webp";

import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { usePathname } from "next/navigation";
import Axios from "axios";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';




const Banner = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);


    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth < 768; // Adjust the breakpoint as needed
            setSlidesPerView(isMobileView ? 1 : 1);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        const slides = document.getElementsByClassName('swiper-slide');

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const slides = [
        {
            avatar: '../new-lp/homeslider/1.webp',

        },
        {
            avatar: '../new-lp/homeslider/2.webp',

        },
        {
            avatar: '../new-lp/homeslider/3.webp',

        }
    ];


    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        services: "Not Selected",
        message: "",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Next");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify(data);
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
        } else {
            setFormStatus("Failed...");
        }

        if (Object.keys(errors).length === 0) {
            // For Date
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            // For Time
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                "Brand": "Creative Logo Designs",
                "Page": `${page}`,
                "Date": `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                "Time": time,
                "JSON": data
            });
            let reqOptions = {
                url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
            window.location.href = "/thank-you";
        }
    }


    return (
        <>
            <section className={`${styles.banner}  font-poppins pt-36 pb-20`}>
                <div className="container mx-auto">
                    <div className="md:grid md:grid-cols-2 md:pt-8 sm:pt-20 pt-20">
                        <div>
                            <h2 className="text-[25px] font-medium text-[#153b6b]">Premiumly Crafted</h2>
                            <h1 className="lg:text-[65px] md:text-[35px] sm:text-[35px] text-[35px] leading-[40px] font-bold lg:leading-[70px] md:leading-[40px] py-3"> <span className="text-[#dd1920]">Custom Logo</span> <br></br>
                                <span className="text-[#153b6b] lg:text-[56px] md:text-[35px]">Design Services</span> </h1>
                            <p className="pt-3 lg:text-[17px] md:text-[14px] text-[18px] leading-[26px] font-normal text-[#49658a]">We shape your brand with innovative Logo Designs to give your <br className="md:hidden"></br> Brand a truly remarkable & professional look.</p>
                            <h4 className='lg:text-[25px] md:text-[18px] text-[18px] leading-[30px] py-5 pb-10 font-[600] text-[#153b6b]'>SIGN UP NOW AND GET UP TO <span className="text-[#dd1920]">70% OFF</span> </h4>
                            <form autoComplete="off" spellCheck="false" className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <Input
                                        name="name"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        border="border-2 border-black rounded-full"
                                        padding="px-3"
                                        color="text-black"
                                        placeholderColor="placeholder:text-black"
                                        handle={handleDataChange}
                                    />
                                    {
                                        errors.name && <span className="text-[12px] block p-2 font-medium text-black">
                                            {errors.name}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        border="border-2 border-black rounded-full"
                                        padding="px-3"
                                        color="text-black"
                                        placeholderColor="placeholder:text-black"
                                        handle={handleDataChange}
                                    />
                                    {
                                        errors.email && <span className="text-[12px] block p-2 font-medium text-black">
                                            {errors.email}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <Input
                                        name="phone"
                                        type="phone"
                                        placeholder="Enter Your Phone"
                                        border="border-2 border-black rounded-full"
                                        padding="px-3"
                                        color="text-black"
                                        placeholderColor="placeholder:text-black"
                                        handle={handleDataChange}
                                    />
                                    {
                                        errors.phone && <span className="text-[12px] block p-2 font-medium text-black">
                                            {errors.phone}
                                        </span>
                                    }
                                </div>
                                <Button
                                    text={formStatus}
                                    border="border-none"
                                    color="text-white"
                                    bg="bg-[#ea0122]"
                                    handle={handleFormSubmit}

                                />
                            </form>
                        </div>

                        <div className="sm:mt-10 mt-10">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                autoplay={true}
                                loop={true}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {slides.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="card testimonialscard">
                                            <img className="ml-auto" src={testimonial.avatar} alt={testimonial.name} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;