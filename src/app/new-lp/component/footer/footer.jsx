"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../footer/footer.module.css'
import logo1 from 'media/new-lp/footer/cards.webp'


const Footer = () => {







    return (
        <>
            <section className={`${styles.footer} bg-[#134068] font-poppins py-[20px]`}>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 items-center border-b-[1px] pb-4 lg:gap-0 md:gap-3 sm:gap-3 gap-3">
                        <div className="text-[#ffff] lg:text-left md:text-center sm:text-center text-center">
                            <Link className="text-[14px] font-[500] text-[#ffff]" href='/terms-and-conditions'>Terms & Conditions</Link> | <Link className="text-[14px] font-[500] text-[#ffff]" href='/privacy-policy'>Privacy Policy</Link>
                        </div>
                        <div>
                            <p className="text-[12px] font-[600] text-[#ffff] text-center">Copyright © 2024 <Link href="/">creativelogodesigns.io</Link> </p>
                        </div>
                        <div className="flex lg:justify-end md:justify-center sm:justify-center justify-center">
                            <Image alt="logo1" src={logo1} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 pt-4">

                        <p className="text-[12px] font-[600] text-[#ffff] text-center lg:px-20 md:px-20 sm:px-0 px-0"> <span className="font-semibold">Disclaimer</span>: Logo, name and graphic representation of Creative Logo Designs and its products and services are trademarks of Creative Logo Designs. All other company names, trademarks and logos mentioned on this website are the property of their respective owners and do not represent or imply endorsement, sponsorship or recommendation by Creative Logo Designs and constitute or imply endorsement, sponsorship or recommendation thereof by Creative Logo Designs and do not constitute or imply endorsement, sponsorship or recommendation of Creative Logo Designs by the respective trademark owner.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;