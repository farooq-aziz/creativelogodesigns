"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../../../new-lp/component/contact/contact.module.css'
import logo1 from 'media/new-lp/contact/new1.png'
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Contact = () => {

    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("SUBMIT NOW");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify(data);
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
        } else {
            setFormStatus("Failed...");
        }

        if (Object.keys(errors).length === 0) {
            // For Date
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            // For Time
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                "Brand": "Creative Logo Designs",
                "Page": `${page}`,
                "Date": `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                "Time": time,
                "JSON": data
            });
            let reqOptions = {
                url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
            window.location.href = "/thank-you";
        }
    }





    return (
        <>
            <section className={`${styles.contact} font-poppins lg:py-[80px] md:py-[80px] sm:py-[80px] py-[50px]`}>
                <div className="container mx-auto ">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 items-center">
                        <div>
                            <div className={`${styles.longa}`}>
                                <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-[700] mb-5">Contact Us</h2>
                            </div>
                            <form>
                                <div className="w-full">
                                    <input onChange={handleDataChange} type="text" className="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border" placeholder="Enter Your Name" name="name"></input>
                                    {
                                        errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                                            {errors.name}
                                        </span>
                                    }
                                </div>


                                <input onChange={handleDataChange} type="email" className="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Enter Your Email" name="email"></input>

                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.email}
                                    </span>
                                }

                                <input onChange={handleDataChange} type="number" className="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Phone Number" name="phone"></input>
                                {
                                    errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.phone}
                                    </span>
                                }



                                <input onChange={handleDataChange} type="text" className="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-20 py-7 pt-0 rounded-2xl px-6 border mt-4" placeholder="Enter Message Here" name="message"></input>
                                {
                                    errors.message && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.message}
                                    </span>
                                }

                                {/* <input type="submit" value={formStatus} className="bg-[#dd1920] text-[#fff] py-3 px-6  rounded-full text-[16px] font-[400] mt-5 hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]" /> */}

                                <div className="w-full">
                                    <button onClick={handleFormSubmit}
                                        className="bg-[#dd1920] text-[#fff] py-3 px-6  rounded-full text-[16px] font-[400] mt-5 hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]"
                                        id="signupBtn" type="submit" value={formStatus}>
                                        {formStatus}
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div className="lg:mt-0 md:mt-8 mt-8">
                            <Image alt="logo1" src={logo1} />
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;