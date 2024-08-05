"use client"
import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
import contactImg from "media/lp-three/contact.png"
import Image from "next/image";
 
const Contact = () => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
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
        services: "Not Selected",
        message: "",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Submit Now");
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
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

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
            setIsDisabled(false);
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
    let servicesArray = [
        "Web Design Development",
        "Logo Design",
        "SEO",
        "PPC Marketing",
        "Social Media Management",
        "Reputation Management",
        "Content Marketing",
        "Other"
    ];
    return (
        <section>
            <div className="py-[50px] lg:py-[100px]" id="contactForm">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-10 gap-y-5">
                        <div>
                            <div className=" mb-10">
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                                    Let's Talk?
                                </h2>
                                <span className="block w-[10%] h-[4px] bg-[#dd1e4b] mt-3 mb-3"></span>
                                <p className="text-[14px] font-poppins xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#6f6f6f] font-normal lg:w-[90%]">
                                    Our team is always keen to have new customers on-board. Every customer brings a new challenge that our talented designers crave for.
                                </p>
                            </div>
                            <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-1">
                                <div className="border-2 border-[#00000040] font-poppins relative">
                                    <span className="text-[15px] font-medium text-[#00000040] absolute top-0 left-[10px] bottom-0 flex items-center">Hi, my name is</span>
                                    <Input
                                        name="name"
                                        border="border-none"
                                        padding="pl-[125px] pr-5"
                                        color="text-black"
                                        css="font-poppins"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.name && <span className="text-[12px] font-poppins block p-2 font-medium text-red">
                                        {errors.name}
                                    </span>
                                }
                                <div className="border-2  border-[#00000040] relative">
                                    <span className="text-[15px] font-poppins font-medium text-[#00000040] absolute top-0 left-[10px] bottom-0 flex items-center">You can contact me at</span>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        border="border-none"
                                        padding="pl-[185px] pr-5"
                                        color="text-black"
                                        css="font-poppins"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.phone && <span className="text-[12px] font-poppins block p-2 font-medium text-red">
                                        {errors.phone}
                                    </span>
                                }
                                <div className="border-2 border-[#00000040] relative">
                                    <span className="text-[15px] font-poppins font-medium text-[#00000040] absolute top-0 left-[10px] bottom-0 flex items-center">or by email at</span>
                                    <Input
                                        name="email"
                                        type="email"
                                        border="border-none"
                                        padding="pl-[120px] pr-5"
                                        color="text-black"
                                        css="font-poppins"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-red font-poppins">
                                        {errors.email}
                                    </span>
                                }
                                <div className="border-2 border-[#00000040] relative font-poppins">
                                    <span className="text-[15px] font-medium text-[#00000040] absolute top-0 left-[10px] bottom-0 flex items-center">Interested in</span>
                                    <Select
                                        options={servicesArray}
                                        name="services"
                                        border="border-none"
                                        padding="pl-[110px] pr-5"
                                        color="text-black"
                                        css="font-poppins"
                                        handle={handleDataChange}
                                    />
                                </div>
                                <div className="w-[180px]">
                                    <Button
                                        text={formStatus}
                                        border="border-2 border-[#dd1e4b]"
                                        color="text-white"
                                        bg="bg-[#dd1e4b]"
                                        rounded="rounded-[5px]"
                                        css="font-poppins hover:bg-transparent hover:text-[#dd1e4b]"
                                        fontWeight="font-medium"
                                        disabled={isDisabled}
                                        handle={handleFormSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                        <div>
                            <Image src={contactImg} alt="contactImg" className="block m-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;