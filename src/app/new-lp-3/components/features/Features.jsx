import React from 'react'
import Image from 'next/image'

import Features1 from '../../../../../public/icons/lp-3/features/features1.png'
import Features2 from '../../../../../public/icons/lp-3/features/features2.png'
import Features3 from '../../../../../public/icons/lp-3/features/features3.png'
import Features4 from '../../../../../public/icons/lp-3/features/features4.png'

const Features = () => {
    return (
        <>
            <section className="bg-gradient-to-t from-[#990036] to-[#E4064A] pt-[17px] pb-[13px] md:h-[85px] relative">
                <div className="before:absolute before:content-[''] xl:before:w-full before:h-[84px] before:top-0  before:bg-no-repeat before:z-0 2xl:before:bg-[url('../../public/icons/lp-3/features/fetures_before.png')] before:bg-none">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-y-3">
                            <div className="col-span-12 sm:col-span-3 2xl:col-span-5">
                                <h3 className='text-[20px] lg:text-[30px] font-[600] text-white 2xl:text-black text-center   2xl:text-left relative z-50'>Other Features</h3>
                            </div>
                            <div className="col-span-12 sm:col-span-9 2xl:col-span-7">
                                <div className="grid grid-cols-12 gap-y-4 sm:ml-[70px] xl:ml-[-10px] relative z-50">
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="icon w-[55px] h-[55px] bg-black rounded-[45px] flex items-center justify-center">
                                                    <Image src={Features1} alt='features1' className='w-[30px] h-[30px] object-contain' />
                                                </div>
                                                <div className="txt">
                                                    <p className='text-white text-[12px] xl:text-[16px] pl-[17px]'>Fastest <br />
                                                        Turn-Around</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="icon w-[55px] h-[55px] bg-black rounded-[45px] flex items-center justify-center">
                                                    <Image src={Features2} alt='features1' className='w-[30px] h-[30px] object-contain' />
                                                </div>
                                                <div className="txt">
                                                    <p className='text-white text-[12px] xl:text-[16px] pl-[17px]'>Money Back
                                                        <br />
                                                        Guarantee</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="icon w-[55px] h-[55px] bg-black rounded-[45px] flex items-center justify-center">
                                                    <Image src={Features3} alt='features1' className='w-[30px] h-[30px] object-contain' />
                                                </div>
                                                <div className="txt">
                                                    <p className='text-white text-[12px] xl:text-[16px] pl-[17px]'>
                                                        Award
                                                        <br />
                                                        winning Team</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="icon w-[55px] h-[55px] bg-black rounded-[45px] flex items-center justify-center">
                                                    <Image src={Features4} alt='features1' className='w-[30px] h-[30px] object-contain' />
                                                </div>
                                                <div className="txt">
                                                    <p className='text-white text-[12px] xl:text-[16px] pl-[17px]'>Unique Design
                                                        <br />
                                                        Guarantee</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
