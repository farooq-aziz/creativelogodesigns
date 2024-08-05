import Image from 'next/image'
import React from 'react'
import Form from './lpForm/Form'

import LogoOne from "media/icons/lp-3/banner/banner-logo-1.webp"
import LogoTwo from "media/icons/lp-3/banner/banner-logo-2.webp"
import LogoThree from "media/icons/lp-3/banner/banner-logo-3.webp"
import LogoFour from "media/icons/lp-3/banner/banner-logo-4.webp"
import BannerText from "media/icons/lp-3/banner/banner-slogon.webp"

const Banner = () => {
    return (
        <>
            <section className="bg-[url('../../public/icons/lp-3/banner/main-banner.webp')] bg-cover bg-no-repeat bg-center h-screen xl:h-[110vh] relative mt-[-121px]">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-7">
                            <div className="lg:block hidden">
                                <div className="logo1 absolute top-[20%]">
                                    <Image src={LogoOne} alt='Logo-1' className='w-[250px]' />
                                </div>
                                <div className="logo2 absolute top-[59%] left-[2%]">
                                    <Image src={LogoTwo} alt='Logo-1' className='w-[205px]' />
                                </div>
                                <div className="logo2 absolute bottom-[2%] left-[20%]">
                                    <Image src={LogoThree} alt='Logo-1' className='w-[302px]' />
                                </div>
                                <div className="logo2 absolute top-[20%] left-[32%]">
                                    <Image src={LogoFour} alt='Logo-1' className='w-[300px]' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className='mt-[150px] mb-[200px] relative'>
                                <div className="content ">
                                    <Image src={BannerText} alt='Banner-Text' className='w-[713px] h-[400px] lg:block hidden' />
                                    <h1 className='text-white text-[30px] xl:text-[40px] 2xl:text-[40px] font-[700] lg:rotate-[4deg] absolute bottom-[56%] xl:bottom-[208px] 2xl:bottom-[276px] left-[7%] xl:left-[2%] uppercase drop_shadow text-center lg:text-left font-megat'>Designing In JUSt $35</h1>
                                </div>
                                <div className="form mt-[300px] sm:mt-[450px] lg:mt-[-20px] 2xl:mt-[45px] 2xl:ml-[-80px] xl:ml-[-100px] w-full xl:w-11/12 mx-auto block">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
