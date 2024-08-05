"use client";
import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Contact = () => {
  const [ip, setIP] = useState("");
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get(
      "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    );
    setIP(res.data);
  };
  useEffect(() => {
    getIPData();
  }, []);
  // For Page
  let page = usePathname();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "Not Selected",
    message: "",
    botchecker: null,
    pageURL: page,
  });
  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [formStatus, setFormStatus] = useState("Get A Free Quote");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const formValidateHandle = () => {
    let errors = {};
    // Name validation
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    // Phone validation
    const phoneRegex = /[0-9]/i;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone is required";
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
      if (data.botchecker === null) {
        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify(data);
        let reqOptions = {
          url: "/api/email",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
        await Axios.request(reqOptions);
      } else {
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }

    if (Object.keys(errors).length === 0) {
      if (data.botchecker === null) {
        // For Date
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        // For Time
        let today = new Date();
        let time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();

        let headersList = {
          Accept: "*/*",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
          Brand: "Creative Logo Designs",
          Page: `${page}`,
          Date: `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
          Time: time,
          JSON: data,
        });
        let reqOptions = {
          url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
        await Axios.request(reqOptions);
        window.location.href = "/thank-you";
      }
    }
  };
  let servicesArray = [
    "Web Design Development",
    "Logo Design",
    "SEO",
    "PPC Marketing",
    "Social Media Management",
    "Reputation Management",
    "Content Marketing",
    "Other",
  ];
  return (
    <section>
      <div className="py-[50px] lg:py-[100px] bg-red" id="contactForm">
        <div className="container">
          <div className="flex gap-10 lg:gap-0 lg:justify-between flex-wrap  lg:flex-nowrap">
            <div className="basis-full lg:basis-[60%] xl:basis-[55%]">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-megat text-white font-normal leading-tight mb-3">
                ARRANGE A MEETING WITH US AT YOUR CONVENIENCE
              </h2>
              <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                We understand that your time is valuable. That’s why we allow
                you to schedule and arrange the meeting at your convenience.
              </p>
              <form
                autoComplete="off"
                spellCheck="false"
                className="grid gap-5 grid-cols-1 mt-10"
              >
                <div className="border-b-2 border-[#ffffff33] relative">
                  <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">
                    Hi, my name is
                  </span>
                  <Input
                    name="name"
                    border="border-none"
                    padding="pl-[110px] pr-5"
                    handle={handleDataChange}
                  />
                </div>
                {errors.name && (
                  <span className="text-[12px] block p-2 font-medium text-white">
                    {errors.name}
                  </span>
                )}
                <div className="border-b-2 border-[#ffffff33] relative">
                  <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">
                    You can contact me at
                  </span>
                  <Input
                    name="phone"
                    type="tel"
                    border="border-none"
                    padding="pl-[165px] pr-5"
                    handle={handleDataChange}
                  />
                </div>
                {errors.phone && (
                  <span className="text-[12px] block p-2 font-medium text-white">
                    {errors.phone}
                  </span>
                )}
                <div className="border-b-2 border-[#ffffff33] relative">
                  <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">
                    Or via email at
                  </span>
                  <Input
                    name="email"
                    type="email"
                    border="border-none"
                    padding="pl-[110px] pr-5"
                    handle={handleDataChange}
                  />
                </div>
                {errors.email && (
                  <span className="text-[12px] block p-2 font-medium text-white">
                    {errors.email}
                  </span>
                )}
                <div className="border-b-2 border-[#ffffff33] relative">
                  <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">
                    I am interested in
                  </span>
                  <Select
                    options={servicesArray}
                    name="services"
                    border="border-none"
                    padding="pl-[130px] pr-5"
                    handle={handleDataChange}
                  />
                </div>
                <Button
                  text={formStatus}
                  border="border-none"
                  color="text-red"
                  handle={handleFormSubmit}
                  disabled={isDisabled}
                />
              </form>
              {/* For Bot Protection */}
              <Input
                name="botchecker"
                type="hidden"
                handle={handleDataChange}
              />
            </div>
            <div className="basis-full lg:basis-[35%] xl:basis-[40%]">
              <div className="grid grid-cols-1 gap-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                    GIVE US A CALL!
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<a href="tel:8556666675" class="text-[18px] font-medium text-[#ffffffc4]">(855) 666-6675</a>`,
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                    WRITE TO US!
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<a href="mailto:info&#64;creativelogodesigns&#46;io" class="text-[18px] font-medium text-[#ffffffc4]">Info&#64;creativelogodesigns&#46;io</a>`,
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                    MEET US IN PERSON!
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<a href="javascript:;" class="text-[18px] font-medium text-[#ffffffc4]">One World Trade Center, Suite 8500, <br /> New York, 10007,<br /> United States</a>`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
