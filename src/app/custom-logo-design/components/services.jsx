import Image from "next/image";


const Services = () => {
    return (
        <section>
            <div className="pb-[70px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] sm:text-[35px] xl:text-[40px] font-megat font-extrabold leading-tight text-black mb-3">
                            We Design More Than Just A <span className="text-red">Logo</span>
                        </h2>
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal lg:w-2/3 lg:m-auto">
                            We are committed towards providing professional logo designs tailored to your brand’s culture, core values & distinction.
                            We take a strategic approach to creating unique brand identities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div >
                            <div className="mb-10">
                                <div className="flex items-end mb-3">
                                    <h3 className="text-[20px] sm:text-[25px] font-megat font-extrabold leading-tight text-black hover:text-red">
                                        BRAND <br className="block" /> DISCOVERY
                                    </h3>
                                    <Image src="/lp-one/services/1.png" width={114} height={150} alt="icon" />
                                </div>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                    Before we design a logo, we understand your business niche. This process lets our team do intensive research on your specific industry, target audience, and competitors.
                                </p>
                            </div>
                            <div className="">
                                <div className="flex items-end mb-3">
                                    <h3 className="text-[20px] sm:text-[25px] font-megat font-extrabold leading-tight text-black hover:text-red">
                                        LOGO <br className="block" /> DESIGN
                                    </h3>
                                    <Image src="/lp-one/services/2.png" width={216} height={150} alt="icon" />
                                </div>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                    Customize your design with our in-house highly experienced and creative team. They never cut corners, and always go above and beyond to give our clients a truly personalized logo.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <div className="flex items-end mb-3">
                                    <h3 className="text-[20px] sm:text-[25px] font-megat font-extrabold leading-tight text-black hover:text-red">
                                        BRAND <br className="block" /> GUIDELINES
                                    </h3>
                                    <Image src="/lp-one/services/3.png" width={150} height={150} alt="icon" />
                                </div>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                    Brand guidelines are clearly defined rules and standards that communicate how your brand should be represented to the world. Brand guidelines help businesses ensure consistency and demonstrate what the company is, what it does, and what it stands for.
                                </p>
                            </div>
                            <div className="">
                                <div className="flex items-end mb-3">
                                    <h3 className="text-[20px] sm:text-[25px] font-megat font-extrabold leading-tight text-black hover:text-red">
                                        MARKETING <br className="block" /> COLLATERALS
                                    </h3>
                                    <Image src="/lp-one/services/4.png" width={114} height={150} alt="icon" />
                                </div>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                    Once you have a logo designed by us, you’ll want to update your marketing collateral. Whether it’s business cards, letterhead, or signage, we have you covered. Anything you can use to communicate your company's brand message is considered marketing collateral.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;