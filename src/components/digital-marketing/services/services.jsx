// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import Records from "media/digital-marketing/services/records.png";
import CTA from "C/CTA";

const Services = () => {
    return (
        <section>
            <div className="pb-[60px] md:pb-[100px]">
                <div className="container">
                    <div className="lg:w-2/3 mb-10">
                        <span className="text-base font-normal text-red">Your Brand, Your Rules</span>
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2">
                            Customized Digital Marketing Services for You
                        </h2>
                        <p className="text-base text-black font-normal">Our marketing team at Creative Logo Designs creates a digital marketing strategy that is completely unique and customized for your business. If you are ready for the digital revolution, let's kickstart the journey today!</p>
                    </div>
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
                            bg="bg-red"
                            css="hover:bg-light-yellow"
                        />
                    </div>
                    <Image src={Records} alt="screens" className="block m-auto mt-10" />
                </div>
            </div>
        </section>
    )
}

export default Services;