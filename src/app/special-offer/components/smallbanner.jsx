// Next Components
import Image from "next/image";
// Components
import CTA from "C/CTA";
import SmallBannerImage from "media/lp-one/smallBanner.png";

const SmallBanner = () => {
    return (
        <section>
            <div className="bg-[#000] py-[50px]">
                <div className="container">
                    <div className="flex gap-5 items-center flex-wrap md:flex-nowrap">
                        <div className="basis-full md:basis-[60%]">
                            <h2 className="text-white font-megat font-extrabold leading-normal text-[18px] sm:text-[20px] lg:text-[30px] xl:text-[35px] mb-3">
                                <span className="block font-sans font-light">We Offer Comprehensive</span>
                                Logo Design Services
                                <span className="block font-sans font-light">To Businesses That Want To Make It Big!</span>
                            </h2>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] leading-normal text-white font-normal">
                                Get in touch with us to know how we do it.
                            </p>
                            <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                                <CTA
                                    text="Start Live Chat"
                                    href="javascript:$zopim.livechat.window.show();"
                                    bg="bg-black"
                                    icon="/icons/chat.svg"
                                    css="hover:bg-light-yellow"
                                />
                                <CTA
                                    text="(855) 666-6675"
                                    href="tel:8556666675"
                                    bg="bg-[#ea0122]"
                                    css="hover:bg-light-yellow"
                                />
                            </div>
                        </div>
                        <div className="basis-full md:basis-[40%]">
                            <Image src={SmallBannerImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner;