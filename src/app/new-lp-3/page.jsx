"use client"

import React from 'react'
import Banner from './components/Banner'
import Header from './components/header/Header'
import Services from './components/tabs/Tabs'
import Features from './components/features/Features'
import Packages from './components/packages/Packages'
import Combo from './components/combo/Combo'
import Stream from './components/streamlined/Stream'
import Target from './components/target/Target'
import CustomLogo from './components/customlogo/CustomLogo'
import Footer from './components/footer/Footer'

const page = () => {
    // Array for Packages Component Props 
    const packages = {
        subtitle: "",
        title:
            "Affordable Logo Design Services By An Acclaimed Logo Design Company",
        desc: <>Our logo design company stands apart from others in the industry by offering award-winning logo design services <br className='2xl:block hidden' /> at competitive prices. Unlike some agencies, we prioritize transparency and fair pricing, ensuring our customers receive top-notch quality without any hidden costs.</>,
        key: 0,
        name: "logo-design",
    };

    const services = {
        title: "Our Latest WORK",
        tabs: [
            {
                value: "Illustrative",
                label: "Illustrative",
                images: [
                    "/icons/lp-3/portfolio/Illustrative/1.png",
                    "/icons/lp-3/portfolio/Illustrative/2.png",
                    "/icons/lp-3/portfolio/Illustrative/3.png",
                    "/icons/lp-3/portfolio/Illustrative/4.png",
                    "/icons/lp-3/portfolio/Illustrative/5.png",
                    "/icons/lp-3/portfolio/Illustrative/6.png",
                    "/icons/lp-3/portfolio/Illustrative/7.png",
                    "/icons/lp-3/portfolio/Illustrative/8.png",
                    "/icons/lp-3/portfolio/Illustrative/9.png",
                    "/icons/lp-3/portfolio/Illustrative/10.png",
                    "/icons/lp-3/portfolio/Illustrative/11.png",
                    "/icons/lp-3/portfolio/Illustrative/12.png",
                ],
            },
            {
                value: "3D Design",
                label: "3D Design",
                images: [
                    "/icons/lp-3/portfolio/3d-design/1.png",
                    "/icons/lp-3/portfolio/3d-design/2.png",
                    "/icons/lp-3/portfolio/3d-design/3.png",
                    "/icons/lp-3/portfolio/3d-design/4.png",
                    "/icons/lp-3/portfolio/3d-design/5.png",
                    "/icons/lp-3/portfolio/3d-design/6.png",
                    "/icons/lp-3/portfolio/3d-design/7.png",
                    "/icons/lp-3/portfolio/3d-design/8.png",
                    "/icons/lp-3/portfolio/3d-design/9.png",
                    "/icons/lp-3/portfolio/3d-design/10.png",
                    "/icons/lp-3/portfolio/3d-design/11.png",
                    "/icons/lp-3/portfolio/3d-design/12.png",
                ],
            },
            {
                value: "animated",
                label: "Animated",
                images: [
                    "/icons/lp-3/portfolio/animated/1.webp",
                    "/icons/lp-3/portfolio/animated/2.webp",
                    "/icons/lp-3/portfolio/animated/3.webp",
                    "/icons/lp-3/portfolio/animated/4.webp",
                    "/icons/lp-3/portfolio/animated/5.webp",
                    "/icons/lp-3/portfolio/animated/6.webp",
                    "/icons/lp-3/portfolio/animated/7.webp",
                    "/icons/lp-3/portfolio/animated/8.webp",
                    "/icons/lp-3/portfolio/animated/9.webp",
                    "/icons/lp-3/portfolio/animated/10.webp",
                    "/icons/lp-3/portfolio/animated/11.webp",
                    "/icons/lp-3/portfolio/animated/12.webp",
                ],
            },
            {
                value: "flat",
                label: "Flat",
                images: [
                    "/icons/lp-3/portfolio/flat/1.png",
                    "/icons/lp-3/portfolio/flat/2.png",
                    "/icons/lp-3/portfolio/flat/3.png",
                    "/icons/lp-3/portfolio/flat/4.png",
                    "/icons/lp-3/portfolio/flat/5.png",
                    "/icons/lp-3/portfolio/flat/6.png",
                    "/icons/lp-3/portfolio/flat/7.png",
                    "/icons/lp-3/portfolio/flat/8.png",
                    "/icons/lp-3/portfolio/flat/9.png",
                    "/icons/lp-3/portfolio/flat/10.png",
                    "/icons/lp-3/portfolio/flat/11.png",
                    "/icons/lp-3/portfolio/flat/12.png",
                ],
            },
            {
                value: "iconic",
                label: "Iconic",
                images: [
                    "/icons/lp-3/portfolio/iconic/1.png",
                    "/icons/lp-3/portfolio/iconic/2.png",
                    "/icons/lp-3/portfolio/iconic/3.png",
                    "/icons/lp-3/portfolio/iconic/4.png",
                    "/icons/lp-3/portfolio/iconic/5.png",
                    "/icons/lp-3/portfolio/iconic/6.png",
                    "/icons/lp-3/portfolio/iconic/7.png",
                    "/icons/lp-3/portfolio/iconic/8.png",
                    "/icons/lp-3/portfolio/iconic/9.png",
                    "/icons/lp-3/portfolio/iconic/10.png",
                    "/icons/lp-3/portfolio/iconic/11.png",
                    "/icons/lp-3/portfolio/iconic/12.png",
                ],
            },
            {
                value: "abstract",
                label: "Abstract",
                images: [
                    "/icons/lp-3/portfolio/abstract/1.png",
                    "/icons/lp-3/portfolio/abstract/2.png",
                    "/icons/lp-3/portfolio/abstract/3.png",
                    "/icons/lp-3/portfolio/abstract/4.png",
                    "/icons/lp-3/portfolio/abstract/5.png",
                    "/icons/lp-3/portfolio/abstract/6.png",
                    "/icons/lp-3/portfolio/abstract/7.png",
                    "/icons/lp-3/portfolio/abstract/8.png",
                    "/icons/lp-3/portfolio/abstract/9.png",
                    "/icons/lp-3/portfolio/abstract/10.png",
                    "/icons/lp-3/portfolio/abstract/11.png",
                    "/icons/lp-3/portfolio/abstract/12.png",
                ],
            },
            {
                value: "mascot",
                label: "Mascot",
                images: [
                    "/icons/lp-3/portfolio/mascot/1.png",
                    "/icons/lp-3/portfolio/mascot/2.png",
                    "/icons/lp-3/portfolio/mascot/3.png",
                    "/icons/lp-3/portfolio/mascot/4.png",
                    "/icons/lp-3/portfolio/mascot/5.png",
                    "/icons/lp-3/portfolio/mascot/6.png",
                    "/icons/lp-3/portfolio/mascot/7.png",
                    "/icons/lp-3/portfolio/mascot/8.png",
                    "/icons/lp-3/portfolio/mascot/9.png",
                    "/icons/lp-3/portfolio/mascot/10.png",
                    "/icons/lp-3/portfolio/mascot/11.png",
                    "/icons/lp-3/portfolio/mascot/12.png",
                ],
            },
            {
                value: "typography",
                label: "Typography",
                images: [
                    "/icons/lp-3/portfolio/typography/1.png",
                    "/icons/lp-3/portfolio/typography/2.png",
                    "/icons/lp-3/portfolio/typography/3.png",
                    "/icons/lp-3/portfolio/typography/4.png",
                    "/icons/lp-3/portfolio/typography/5.png",
                    "/icons/lp-3/portfolio/typography/6.png",
                    "/icons/lp-3/portfolio/typography/7.png",
                    "/icons/lp-3/portfolio/typography/8.png",
                    "/icons/lp-3/portfolio/typography/9.png",
                    "/icons/lp-3/portfolio/typography/10.png",
                    "/icons/lp-3/portfolio/typography/11.png",
                    "/icons/lp-3/portfolio/typography/12.png",
                ],
            }
        ]
    };
    return (
        <>
            <Header />
            <Banner />
            <Services content={services} />
            <Features />
            <Packages content={packages} />
            <Combo />
            <Stream />
            <CustomLogo />
            <Target />
            <CustomLogo />
            <Footer />
        </>
    )
}

export default page
