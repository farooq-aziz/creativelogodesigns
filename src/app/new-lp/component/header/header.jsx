"use client"
// Imports Components
import Image from "next/image";
// Import Images
import One from "media/logo.png";
import Link from "next/link";
import styles from '../header/header.module.css'



const Header = () => {




    return (
        <>
            <section className={`${styles.post} font-poppins relative`}>
                <div className="container mx-auto lg:py-5 font-secondary">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 md:justify-between md:items-center justify-end">
                        <Image alt="One" src={One} className='w-48' />

                        <div className='flex gap-8 items-center md:justify-end justify-end sm:pt-5 pt-5'>
                            <Link href='tel:8556666675' className="text-[#000000] font-medium text-[15px] md:block sm:hidden hidden"> <span className="font-bold">Call Us:</span> (855) 666-6675</Link>
                            <Link className='bg-[#dd1920] text-[#fff] md:py-3 md:px-7 sm:px-5 sm:py-3 sm:rounded-full px-6 py-2 rounded-full md:rounded-full md:text-[16px] sm:text-[12px] font-medium hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]' href='javascript:$zopim.livechat.window.show();'>Talk To Us</Link>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Header;