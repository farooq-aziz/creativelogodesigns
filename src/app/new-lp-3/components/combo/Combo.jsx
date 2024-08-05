import React from 'react'

import ComboImage from "media/icons/lp-3/combo/packagecombo2.png"
import Image from 'next/image'
import CTA from '../CTA/CTA'

const Combo = () => {
    return (
        <>
            <section className='bg-gradient-to-r from-[#800027] to-[#93002C] py-[40px]'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-y-6 items-center">
                        <div className="col-span-12 md:col-span-6">
                            <h2 className='font-megat font-normal text-3xl lg:text-4xl text-white mb-5'>LOGO COMBO SPECIAL PACKAGE</h2>
                            <p className='font-poppins font-[400] text-[18px] text-white mb-5'>Crafting your brand to completion!</p>
                            <ul className='sm:columns-2'>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Unlimited Original Logo Concepts
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    12 Dedicated Logo Designer (Industry Specific)
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Unlimited Original Logo Concepts
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Ecommerce Website
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Stationery Design (Business Card, Letterhead, Envelope)
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Brand Book
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    500 Business Cards
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    500 Letterheads
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Email Signature Design
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Social Media Designs (Facebook, Twitter, Instagram)
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    2 Sided Flyer OR Bi-Fold Brochure Design
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    With Grey Scale Format
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Free Icon Design
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    24 - 48 Hours Turn Around Time
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    MORE FEATURES
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    100% Satisfaction
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    100% Ownership Rights
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Money Back Guarantee
                                </li>
                                <li className='text-[13px] text-white mb-0 border-b border-b-[#990036] font-poppins py-[4px] w-full'>
                                    Dedicated Account Manager
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="btn">
                                <Image src={ComboImage} alt='combo-image' className='w-9/12 sm:ml-[55px]' />
                            </div>
                            <div className="flex items-center justify-center">
                                <CTA />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Combo
