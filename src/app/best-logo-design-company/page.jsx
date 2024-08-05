import Image from "next/image";
import Hero from "./components/hero";
import CTA from "C/CTA";
import designBranding from "media/lp-three/design-branding.png";
import recognizeBanner from "media/lp-three/recognize.png";
import aboutUs from "media/lp-three/aboutus.jpg";
import Portfolios from "./components/portfolios";
import Packages from "./components/packages";
import Works from "./components/works";
import Why from "./components/why";
import Industries from "./components/industries";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Link from "next/link";
import logo from "media/logo-light.png";
import Combo from "./components/combo";

const Page = () => {
    return (
        <main>
            <header className="absolute top-0 left-0 right-0 py-5 z-[9999]">
                <div className="container">
                    <div className="flex items-center">
                        <Link href="/best-logo-design-company" className="m-auto sm:m-0">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="hidden sm:flex ml-auto items-center gap-4">
                            <div dangerouslySetInnerHTML={{
                                __html: `<a href="javascript:$zopim.livechat.window.show();" class="cursor-pointer font-poppins flex items-center gap-2">
                                <img src="/chatIcon.svg" alt="chat" />
                                <span class="text-white font-semibold text-[15px] block">Start Live Chat</span>
                            </a>`}} />
                            <div dangerouslySetInnerHTML={{
                                __html: `<a href="tel:8556666675" class="cursor-pointer font-poppins flex items-center gap-2">
                                <img src="/callIcon.svg" alt="call" />
                                <span class="text-white font-semibold text-[15px]">(855) 666-6675</span>
                            </a>`}} />
                        </div>
                    </div>
                </div>
            </header>
            <Hero />
            <section>
                <div className="py-[50px] lg:py-[100px]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                                    Logo <span className="text-[#dd1e4b]">Design & Branding</span> <br /> In Detail
                                </h2>
                                <span className="block w-[20%] h-[4px] bg-[#dd1e4b] mt-3 mb-3"></span>
                                <p className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[24px] text-[#6f6f6f] font-poppins font-normal text-justify lg:text-left">
                                    Your company’s logo design and branding is your identity. At Creative Logo Designs, we understand that well. Our designers make sure to deliver customized, professional logo design as per the nature of your business and target audience. Our in-depth process starts from brainstorming, goes through conceptualization & sketching, and concludes with a logo design that you are delighted with.
                                </p>
                                <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                    <CTA
                                        text="Start Live Chat"
                                        href="javascript:$zopim.livechat.window.show();"
                                        bg="bg-[#000000]"
                                        icon="/icons/chat.svg"
                                        css="hover:bg-light-yellow  font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                    <CTA
                                        text="(855) 666-6675"
                                        href="tel:8556666675"
                                        bg="bg-[#dd1e4b]"
                                        css="hover:bg-light-yellow font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Image src={designBranding} alt="designBranding" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Portfolios />
            <Packages />
            <Combo />
            <Works />
            <section>
                <div className="pb-0 pt-[30px] lg:py-[30px] bg-[#dd1e4b] relative">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-white font-poppins font-bold leading-tight">
                                    Get Your Brand Recognized <br className="md:block lg:hidden" /> In The Best Possible Way
                                </h2>
                                <span className="block w-[20%] h-[4px] bg-black mt-3 mb-3"></span>
                                <p className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[24px] text-white font-poppins font-normal text-justify lg:text-left">
                                    Creative Logo Designs keeps you moving and improving with digital innovation. <br className="md:block lg:hidden" />
                                    Let’s Discuss and build it together.
                                </p>
                                <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                    <CTA
                                        text="Start Live Chat"
                                        href="javascript:$zopim.livechat.window.show();"
                                        bg="bg-[#000000]"
                                        icon="/icons/chat.svg"
                                        css="hover:bg-light-yellow  font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                    <CTA
                                        text="(855) 666-6675"
                                        href="tel:8556666675"
                                        bg="bg-white"
                                        css="hover:bg-light-yellow font-poppins hover:text-white"
                                        rounded="rounded-[5px]"
                                        color="text-black"
                                    />
                                </div>
                            </div>
                            <div>
                                <Image src={recognizeBanner} alt="recognizeBanner" className="lg:absolute block m-auto lg:max-w-[55%] xl:max-w-full lg:bottom-0 right-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Why />
            <section>
                <div className="py-[50px] lg:py-[100px]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                                    About Us
                                </h2>
                                <span className="block w-[20%] h-[4px] bg-[#dd1e4b] mt-3 mb-3"></span>
                                <p className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[24px] text-[#6f6f6f] font-poppins font-normal text-justify lg:text-left">
                                    We are an out and out business solution company that delivers the best graphic design services like custom logo design, web design, app design, branding collateral (design and printing). We also provide digital marketing services like SEO, SEM, SMM, and Content Marketing.
                                </p>
                                <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                    <CTA
                                        text="Start Live Chat"
                                        href="javascript:$zopim.livechat.window.show();"
                                        bg="bg-[#000000]"
                                        icon="/icons/chat.svg"
                                        css="hover:bg-light-yellow  font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                    <CTA
                                        text="(855) 666-6675"
                                        href="tel:8556666675"
                                        bg="bg-[#dd1e4b]"
                                        css="hover:bg-light-yellow font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Image src={aboutUs} alt="aboutUs" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Industries />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    )
}

export default Page;