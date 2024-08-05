"use client"

import React, { useEffect, useState } from 'react'
import { Axios } from 'axios'
import { useRouter } from 'next/navigation';
import Router from 'next/router'
import Image from 'next/image'

//===== Images
import Button from "media/icons/lp-3/banner/get-std.png"
import ButtonPartical from "media/icons/lp-3/banner/bnr-from-arrow.png"

const Form = () => {

    //===== Form Start =======\\
    const [score, setScore] = useState("Get Started")

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data1 = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            pageUrl: currentRoute,
        };

        const JSONdata = JSON.stringify(data1);

        setScore('processing...');

        fetch('api/submit/route', {
            url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });

        // Router usage
        if (router.pathname === router.pathname) {
            window.location.href = 'https://www.creativelogodesigns.io/thank-you';
        }
    };
    //===== Form End =======\\

    return (
        <>
            <form action="javascript:;" onSubmit={handleSubmit} className='px-[24px] py-[16px] bg-gradient-to-l from-[#fdfdfd] to-[#e5e5e6] rounded-[60px] relative'>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-6">
                        <input type="text" required name="name" placeholder='Enter Your Name' className='text-[#495057] leading-[1.5] text-[16px] w-full font-[400] py-[10px] px-[20px] rounded-[30px] inp_bg border-none h-auto placeholder:text-red shadow-2xl' />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-6">
                        <input type="text" name="email" required placeholder='Enter Your Email' className='text-[#495057] leading-[1.5] text-[16px] w-full font-[400] py-[10px] px-[20px] rounded-[30px] inp_bg border-none h-auto placeholder:text-red shadow-2xl' />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-6">
                        <input type="tel" name="phone" minLength="10" maxLength="13" pattern="[0-9]*"
                            required placeholder='Enter Your Phone ' className='text-[#495057] leading-[1.5] text-[16px] w-full font-[400] py-[10px] px-[20px] rounded-[30px] inp_bg border-none h-auto placeholder:text-red shadow-2xl' />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-6">
                        <button type='submit' className='bg-red w-full h-[40px] text-white rounded-[60px] shadow-2xl'>
                            {score}
                        </button>
                    </div>
                </div>
                <div className="lg:block none">
                    <Image src={ButtonPartical} alt='Image_partical' className='absolute left-[22%] bottom-[-110px]' />
                    <Image src={Button} alt='Btn' className='btn absolute bottom-[-130px] left-[47%] z-10' />
                </div>
            </form>
        </>
    )
}

export default Form
