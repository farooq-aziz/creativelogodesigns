"use client"
// Import Components
import { Collapse, IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";
import { usePathname } from "next/navigation";
import CTA from "C/CTA";
// Import Images
import logo from "media/logo.png";
import logoDesign from "media/menu/logoDesign.png";
import creativeCopywriting from "media/menu/creativeCopywriting.png";
import digitalMarketing from "media/menu/digitalMarketing.png";
import ecommerce from "media/menu/ecommerce.png";
import illustrationDesign from "media/menu/illustrationDesign.png";
import marketingCollateral from "media/menu/marketingCollateral.png";
import mobileApplication from "media/menu/mobileApplication.png";
import motionGraphics from "media/menu/motionGraphics.png";
import seoServices from "media/menu/seoServices.png";
import websiteDevelopment from "media/menu/websiteDevelopment.png";
import down from "media/menu/down.png";
import { useState } from "react";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const router = usePathname();
    const navList = (
        <ul className="lg:flex lg:items-center gap-6 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/" className="text-lg font-normal leading-10 text-white lg:text-black">Home</Link></li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/about-us" className="text-lg font-normal leading-10 text-white lg:text-black">About</Link></li>
            <li className="lg:h-full lg:flex lg:items-center group relative">
                <button href="/" className="text-lg font-normal leading-10 text-white lg:text-black flex items-center gap-3">
                    Services
                    <Image src={down} alt="down" onClick={() => setOpenSubMenu((prev) => !prev)} className="brightness-0 invert lg:invert-0" />
                </button>
                <div className="lg:absolute lg:flex lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 top-full w-full lg:w-[600px] lg:justify-between lg:left-[-200px]  xl:left-[-100px] rounded-2xl right-0 bg-white lg:p-3 lg:mt-[-20px] shadow-lg">
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={logoDesign} alt="logoDesign" />
                            <Link className="text-base" href="/logo-design-company">Logo Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={creativeCopywriting} alt="creativeCopywriting" />
                            <Link className="text-base" href="/creative-copywriting-company">Creative Copywriting</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={seoServices} alt="seoServices" />
                            <Link className="text-base" href="/seo-company">SEO Services</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={ecommerce} alt="ecommerce" />
                            <Link className="text-base" href="/ecommerce-solutions">Ecommerce Web Solutions</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={websiteDevelopment} alt="websiteDevelopment" />
                            <Link className="text-base" href="/website-development-company">Website Development</Link>
                        </li>
                    </ul>
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={motionGraphics} alt="motionGraphics" />
                            <Link className="text-base" href="/motion-graphic-design-company">Motion Graphics</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={illustrationDesign} alt="illustrationDesign" />
                            <Link className="text-base" href="/illustration-design-company">Illustration Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={marketingCollateral} alt="marketingCollateral" />
                            <Link className="text-base" href="/marketing-collateral-company">Marketing Collateral</Link>
                        </li>
                        <li className="flex p-3 items-center text-white lg:text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={mobileApplication} alt="mobileApplication" />
                            <Link className="text-base" href="/mobile-app-design-company">App Design</Link>
                        </li>
                    </ul>
                    <Collapse open={openSubMenu} className="block lg:hidden">
                        <ul>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={logoDesign} alt="logoDesign" />
                                <Link className="text-base" href="/logo-design-company">Logo Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={creativeCopywriting} alt="creativeCopywriting" />
                                <Link className="text-base" href="/creative-copywriting-company">Creative Copywriting</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={ecommerce} alt="ecommerce" />
                                <Link className="text-base" href="/ecommerce-solutions">Ecommerce Web Solutions</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={websiteDevelopment} alt="websiteDevelopment" />
                                <Link className="text-base" href="/website-development-company">Website Development</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={motionGraphics} alt="motionGraphics" />
                                <Link className="text-base" href="/motion-graphic-design-company">Motion Graphics</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={illustrationDesign} alt="illustrationDesign" />
                                <Link className="text-base" href="/illustration-design-company">Illustration Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={marketingCollateral} alt="marketingCollateral" />
                                <Link className="text-base" href="/marketing-collateral-company">Marketing Collateral</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={mobileApplication} alt="mobileApplication" />
                                <Link className="text-base" href="/mobile-app-design-company">App Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={seoServices} alt="seoServices" />
                                <Link className="text-base" href="/seo-company">SEO Services</Link>
                            </li>

                        </ul>
                    </Collapse>
                </div>
            </li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/pricing" className="text-lg font-normal leading-10 text-white lg:text-black">Pricing/Packages</Link></li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/contact-us" className="text-lg font-normal leading-10 text-white lg:text-black">Contact</Link></li>
        </ul>
    );
    return (
        <header>
            <Navbar className="max-w-none px-0 py-0 absolute top-0 left-0 z-[9999] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center h-24">
                        <Link href="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="hidden lg:flex ml-auto xl:m-auto h-full items-center">
                            {navList}
                        </div>
                        <div className="hidden xl:flex items-center gap-3">
                            <CTA
                                text="Start Live Chat"
                                href="javascript:$zopim.livechat.window.show();"
                                bg="bg-black"
                                icon="/icons/chat.svg"
                                css="hover:bg-light-yellow"
                            />
                            <CTA
                                text="(855) 666-6675"
                                href="tel:8556666675"
                                bg="bg-red"
                                css="hover:bg-light-yellow"
                            />
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)} >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                        fill="#000"
                                        color="#000"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="#000"
                                    stroke="currentColor"
                                    strokeWidth={2} >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="#000"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        color="#000"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="block xl:hidden">
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;