"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../portfolio/portfolio.module.css'
import logo1 from 'media/new-lp/portfolio/1.webp'
import logo2 from 'media/new-lp/portfolio/2.webp'
import logo3 from 'media/new-lp/portfolio/3.webp'
import logo4 from 'media/new-lp/portfolio/4.webp'
import logo5 from 'media/new-lp/portfolio/5.webp'
import logo6 from 'media/new-lp/portfolio/6.webp'
import logo7 from 'media/new-lp/portfolio/7.webp'


const Portfolio = () => {







    return (
        <>
            <section className={`${styles.portfolio}  font-poppins py-[100px]`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className={`${styles.longa}`}>
                            <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px]   font-[700] text-center mb-10 text-[#00142d]">Our Portfolio</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="...">
                            <Image alt="logos" src={logo1} className="w-full" />
                        </div>
                        <div className="col-span-2 ...">
                            <Image alt="logos" src={logo2} className="w-full" />
                        </div>
                        <div className="...">
                            <Image alt="logos" src={logo3} className="w-full" />
                        </div>
                        <div className="...">
                            <Image alt="logos" src={logo4} className="w-full" />

                        </div>
                        <div className="...">
                            <Image alt="logos" src={logo5} className="w-full" />
                        </div>
                        <div className="col-span-2 ...">
                            <Image alt="logos" src={logo6} className="w-full" />
                        </div>
                        <div className="...">
                            <Image alt="logos" src={logo7} className="w-full" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio;