"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../designing/designing.module.css'
import logo1 from 'media/new-lp/service/animated-logo.webp'
import { useState } from "react";
import Modal from "../modal/modal";

const Designing = () => {




    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };


    return (
        <>
            <section className={`${styles.designing}  font-poppins py-[100px]`}>
                <div className="container mx-auto">
                  

                    <div className="grid grid-cols-1">

                      <h2 className="lg:text-[32.8px] md:text-[32.8px] sm:text-[23px] text-[23px] text-center font-[500] text-[#ffff] mb-3">Designing a great logo is hard. <span className="font-[700]">We make it easy.</span></h2>
                      <h3 className="lg:text-[30px] md:text-[30px] sm:text-[23px] text-[20px] text-center font-[500] text-[#ffff]">Call our assistant at <Link className={`${styles.ban} font-[700]`} href='tel:8556666675'>(855) 666-6675</Link> </h3>
                      <div className="mt-5 flex gap-x-7 justify-center">
                                <Link className="bg-[#dd1920] text-[#fff] py-3 px-9  rounded-full text-[16px] font-[600] hover:bg-[#ffff] hover:border-[1px]   hover:text-[#dd1920]" href="javascript:$zopim.livechat.window.show();">Live Chat</Link>
                                <Link onClick={openModal} className="bg-[#ffffff] text-[#dd1920] py-3 px-9  rounded-full text-[16px] font-[600]" href="javascript:;">Get Quote</Link>
                            </div>
                        


                    </div>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Designing;