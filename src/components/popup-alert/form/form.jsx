"use client"
import Input from "C/Input";
import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Form = () => {
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
        message: "From Black Friday Sale",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Claim Now!");
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // // Name validation
        // if (!data.name.trim()) {
        //     errors.name = 'Name is required';
        // }
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
        console.log(data);
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
    return (
        <div className="mt-5 w-[80%] mx-auto">
            <form autoComplete="off" spellCheck="false" className="grid grid-cols-2 gap-5 mb-5">

                <div>
                    <div className="border-b-2 border-white relative">
                        <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">or by email at</span>
                        <Input
                            name="email"
                            type="email"
                            border="border-none"
                            padding="pl-[100px] pr-5"
                            color="text-white"
                            handle={handleDataChange}
                        />
                    </div>
                    {
                        errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                            {errors.email}
                        </span>
                    }
                </div>
                <div>
                    <div className="border-b-2 border-white relative">
                        <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">You can contact me at</span>
                        <Input
                            name="phone"
                            type="phone"
                            border="border-none"
                            padding="pl-[165px] pr-5"
                            color="text-white"
                            handle={handleDataChange}
                        />
                    </div>
                    {
                        errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                            {errors.phone}
                        </span>
                    }
                </div>
            </form>
            <Button
                text={formStatus}
                border="border-none"
                color="text-black"
                bg="bg-white"
                handle={handleFormSubmit}
                css="!font-poppins font-semiBold uppercase !w-max !px-5 m-auto"
                disabled={isDisabled}
                icon="/icon25.png"
            />
        </div>
    )
}

export default Form;