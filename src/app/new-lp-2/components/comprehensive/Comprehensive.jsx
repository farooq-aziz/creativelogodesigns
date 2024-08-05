import CTA from "@/components/CTA";

const Comprehensive = () => {
    return (
        <div className="xl:py-[150px] lg:py-[100px] md:py-[80px] py-[40px] bg-[url('../../public/new-lp-2/comprehensiveBanner.png')] bg-cover bg-no-repeat bg-center">
            <div className="container">
                <div className="flex">
                    <div className="lg:basis-2/4 basis-full">
                        <div className="text-white">
                            <span className="lg:text-[25px] text-lg leading-tight font-serif font-normal">We Offer Comprehensive</span>
                            <h2 className="xl:text-[40px] lg:text-[30px] text-[25px] leading-tight font-megat py-3">Logo Design Services To Businesses That Want To Make It Big!</h2>
                            <p className="md:text-[16px] text-sm leading-tight font-serif font-normal">Get in touch with us to know how we do it.</p>
                        </div>
                        <div className="flex lg:flex-nowrap flex-wrap lg:gap-x-4 gap-4 mt-5">
                            <CTA
                                text="Start Live Chat"
                                href="javascript:$zopim.livechat.window.show();"
                                bg="bg-white"
                                color="text-black"
                                icon="/icons/chat.svg"
                                iconCss="brightness-0 group-hover:brightness-100"
                                css="hover:bg-light-yellow hover:text-white hover:"
                                rounded="rounded-none"
                            />
                            <CTA
                                text="(855) 666-6675"
                                href="tel:8556666675"
                                bg="bg-red"
                                css="hover:bg-light-yellow"
                                rounded="rounded-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comprehensive;
