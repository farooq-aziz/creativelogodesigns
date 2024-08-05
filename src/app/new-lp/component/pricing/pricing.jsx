"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../pricing/pricing.module.css'
import logo1 from 'media/new-lp/pricing/pec1.webp'
import logo2 from 'media/new-lp/pricing/pec2.webp'
import logo3 from 'media/new-lp/pricing/pec3.webp'
import logo4 from 'media/new-lp/pricing/pec4.webp'

import tick from 'media/new-lp/pricing/tick.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import Modal from "../modal/modal";


const Pricing = () => {


  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: function (i) {
      return (
        <div className="custom-dotpric">

        </div>
      );
    },
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <section className={`${styles.pricing}  font-poppins lg:py-[80px] md:py-[80px] sm:py-[50px] py-[50px]`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className={`${styles.longa}`}>
              <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-[700] text-center lg:mb-10 md:mb-10 sm:mb-10 mb-2 text-[#00142d]">Our Pricing</h2>
            </div>
          </div>
          <div className="grid grid-cols-1">

            <Slider {...settings} className="pricingnewtown">
              <div className={`${styles.newflix} bg-[#fdf4f5] rounded-3xl py-10 px-7`}>
                <Image alt="logo" src={logo1} />

                <h3 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text-[23px] font-[700] text-[#00142d] mb-5">Logo Basic</h3>
                <ul className={styles.flip}>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 4 Original Logo Concepts</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 2 Dedicated Logo Designer</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 4 Revisions</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> With Grey Scale Format</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Free Icon Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Formats: JPEG Only</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 24 - 48 Hours Turn Around Time</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> MORE FEATURES</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Satisfaction</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Ownership Rights</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Money Back Guarantee</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Dedicated Account Manager</li>
                </ul>
                <div className={` ${styles.pri} flex items-center place-content-between mb-4`}>
                  <h4 className="lg:text-[42px] md:text-[42px] sm:text-[30px] text-[23px] font-[700] text-[#00142d] mt-5">$35.00</h4>
                  <h5 className="text-[20px] font-[600] text-[#c4c4c4]">Was <br></br> <sub className="text-[16px] font-[600]">$117.00</sub></h5>
                </div>

                <Link onClick={openModal} className="bg-[#dd1920] text-[#fff] py-3 px-9 md:rounded-full text-[16px] font-[400] block text-center" href="javascript:;">Order Now</Link>
              </div>
              <div className={`${styles.newflix} bg-[#fdf4f5] rounded-3xl py-10 px-7`}>
                <Image alt="logos" src={logo2} />
                <h3 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text-[23px] font-[700] text-[#00142d] mb-5">Logo Professional</h3>
                <ul className={styles.flip}>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 12 Original Logo Concepts</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 4 Dedicated Logo Designer (Industry Specific)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Unlimited Revisions</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Stationery Design (Business Card, Letterhead, Envelope)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Email Signature Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> With Grey Scale Format</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Free Icon Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 24 - 48 Hours Turn Around Time</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> MORE FEATURES</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Satisfaction</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Ownership Rights</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Money Back Guarantee</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Dedicated Account Manager</li>
                </ul>
                <div className={` ${styles.pri} flex items-center place-content-between mb-4`}>
                  <h4 className="lg:text-[42px] md:text-[42px] sm:text-[30px] text-[23px] font-[700] text-[#00142d] mt-5">$119.00</h4>
                  <h5 className="text-[20px] font-[600] text-[#c4c4c4]">Was <br></br> <sub className="text-[16px] font-[600]">$307.00</sub></h5>
                </div>

                <Link onClick={openModal} className="bg-[#dd1920] text-[#fff] py-3 px-9 md:rounded-full text-[16px] font-[400] block text-center" href="javascript:;">Order Now</Link>
              </div>
              <div className={`${styles.newflix} bg-[#fdf4f5] rounded-3xl py-10 px-7`}>
                <Image alt="logo" src={logo3} />
                <h3 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text-[23px] font-[700] text-[#00142d] mb-5">Logo Elite</h3>
                <ul className={styles.flip}>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Unlimited Original Logo Concepts</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 8 Dedicated Logo Designer (Industry Specific)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Unlimited Revisions</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Stationery Design (Business Card, Letterhead, Envelope)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 500 Business Cards </li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Email Signature Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> With Grey Scale Format</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Free Icon Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 24 - 48 Hours Turn Around Time</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> MORE FEATURES</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Satisfaction</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Money Back Guarantee</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Dedicated Account Manager</li>
                </ul>
                <div className={` ${styles.pri} flex items-center place-content-between mb-4`}>
                  <h4 className="lg:text-[42px] md:text-[42px] sm:text-[30px] text-[23px] font-[700] text-[#00142d] mt-5">$299.00</h4>
                  <h5 className="text-[20px] font-[600] text-[#c4c4c4]">Was <br></br> <sub className="text-[16px] font-[600]">$849.00</sub></h5>
                </div>

                <Link onClick={openModal} className="bg-[#dd1920] text-[#fff] py-3 px-9 md:rounded-full text-[16px] font-[400] block text-center" href="javascript:;">Order Now</Link>
              </div>
              <div className={`${styles.newflix} bg-[#fdf4f5] rounded-3xl py-10 px-7`}>
                <Image alt="logos" src={logo4} />
                <h3 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text-[23px] font-[700] text-[#00142d] mb-5">The Boss</h3>
                <ul className={styles.flip}>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 3D/Mascot/Animated Logo</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Unlimited Original Logo Concepts</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 8 Dedicated Logo Designer (Industry Specific)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" />  Unlimited Revisions</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Stationery Design (Business Card, Letterhead, Envelope)</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 500 Business Cards</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Email Signature Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> With Grey Scale Format</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Free Icon Design</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 24 - 48 Hours Turn Around Time</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3">  <Image src={tick} alt="tick" className="w-[17px]" /> MORE FEATURES </li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> 100% Satisfaction</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Money Back Guarantee</li>
                  <li className="text-[16px] font-[400] text-[#49658a] mb-[1rem] flex items-center gap-3"> <Image src={tick} alt="tick" className="w-[17px]" /> Dedicated Account Manager</li>
                </ul>
                <div className={` ${styles.pri} flex items-center place-content-between mb-4`}>
                  <h4 className="lg:text-[42px] md:text-[42px] sm:text-[30px] text-[23px] font-[700] text-[#00142d] mt-5">$599.00</h4>
                  <h5 className="text-[20px] font-[600] text-[#c4c4c4]">Was <br></br> <sub className="text-[16px] font-[600]"> $1996.00</sub></h5>
                </div>

                <Link onClick={openModal} className="bg-[#dd1920] text-[#fff] py-3 px-9 md:rounded-full text-[16px] font-[400] block text-center" href="javascript:;">Order Now</Link>
              </div>
            </Slider>
          </div>

        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Pricing;