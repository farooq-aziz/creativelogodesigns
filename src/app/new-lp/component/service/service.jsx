"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../service/service.module.css'
import logo1 from 'media/new-lp/service/1.webp'
import logo2 from 'media/new-lp/service/2.webp'
import logo3 from 'media/new-lp/service/3.webp'
import logo4 from 'media/new-lp/service/4.webp'
import { useState } from "react";

const Service = () => {

    const [data, setData] = useState('tab1');


    function fun1(tab) {

        setData(tab);

    }



    return (
        <>
            <section className={`${styles.service}  font-poppins bg-[#fbfbfb] lg:pt-[100px] md:pt-[100px] pt-[50px] pb-10`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className={`${styles.longa}`}>
                            <h2 className={`lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-bold text-center text-[#00142d] mb-10`}>Our Services</h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-items-center md:gap-10 sm:gap-10">

                        {data == 'tab1' &&
                            <div className={styles.pst}>
                                <div className={data == 'tab1' && styles.fristhove} >
                                    <Image alt="logos" src={logo1} />
                                </div>
                            </div>
                        }

                        {data == 'tab2' &&
                            <div className={styles.pst}>
                                <div className={data == 'tab2' && styles.fristhove}>
                                    <Image alt="logos" src={logo2} />
                                </div>
                            </div>
                        }
                        {data == 'tab3' &&
                            <div className={styles.pst}>
                                <div className={data == 'tab3' && styles.fristhove}>
                                    <Image alt="logos" src={logo3} />
                                </div>
                            </div>
                        }
                        {data == 'tab4' &&
                            <div className={styles.pst}>
                                <div className={data == 'tab4' && styles.fristhove}>
                                    <Image alt="logos" src={logo4} />
                                </div>
                            </div>
                        }
                        <div>
                            <div className="relative">
                                <div onMouseOver={() => fun1('tab1')} className={data == 'tab1' ? styles.fristhove1 : ''}>
                                    <h3 className="lg:text-[44px] md:text-[35px] text-[23px]  font-[700] leading-[48px] text-[#00142d] opacity-80 hover:cursor-pointer hover:text-[#e31c25] hover:opacity-100">Iconic Logo</h3>
                                    <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Iconic logos are known for their simplicity. They are simple <br></br> elements used in the manner to represent a story.</p>
                                </div>
                            </div>
                            <div onMouseOver={() => fun1('tab2')} className={data == 'tab2' ? styles.fristhove2 : 'lg:mt-12 md:mt-3'}>
                                <div>
                                    <h3 className="lg:text-[44px] md:text-[35px] text-[23px] font-[700] leading-[48px] text-[#00142d] opacity-80 hover:cursor-pointer hover:text-[#e31c25] hover:opacity-100">3d Logo</h3>
                                    <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">A 3D logo design gives a logo the detail and feeling that a <br></br> simple logo fails to give.</p>
                                </div>
                            </div>
                            <div onMouseOver={() => fun1('tab3')} className={data == 'tab3' ? styles.fristhove2 : 'lg:mt-12 md:mt-3'}>
                                <div >
                                    <h3 className="lg:text-[44px] md:text-[35px] text-[23px] font-[700] leading-[48px] text-[#00142d] opacity-80 hover:cursor-pointer hover:text-[#e31c25] hover:opacity-100">Animated Logo</h3>
                                    <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Animated logos are the key to grabbing the attention of <br></br> your audience.</p>
                                </div>
                            </div>
                            <div onMouseOver={() => fun1('tab4')} className={data == 'tab4' ? styles.fristhove2 : 'lg:mt-12 md:mt-3'}>
                                <div>
                                    <h3 className="lg:text-[44px] md:text-[35px] text-[23px] font-[700] leading-[48px] text-[#00142d] opacity-80 hover:cursor-pointer hover:text-[#e31c25] hover:opacity-100">Illustrative Logo</h3>
                                    <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Illustrative logos comprise of pictures depicting a range of <br></br> meaning.</p>
                                </div>
                            </div>



                        </div>






                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;