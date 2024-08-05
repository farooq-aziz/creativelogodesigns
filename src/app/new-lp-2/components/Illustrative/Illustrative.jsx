import Image from "next/image";
import Growth from "media/new-lp-2/growth.png"
import CTA from "@/components/CTA";
const Illustrative = () => {
    return (
        <div className="relative overflow-x-hidden -z-0 bg-[#f7f7f7] lg:py-20 md:py-16 py-12">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="lg:mb-0 mb-5">
                        <Image src={Growth} alt="Icons" />
                    </div>
                    <div className="relative before:block before:absolute before:bg-black before:rounded-s-xl before:w-[3000px] before:h-full before:-z-10 before:-left-0 before:top-0 before:bottom-0 pt-5 pb-12 pl-4 text-white">
                       <div className="relative z-50">
                       <h3 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-megat py-3">Fuel your Growth with the Best Illustrative Logo!</h3>
                        <p className="md:text-base text-sm font-serif font-normal mb-4">The company creates the best illustrative logo design concepts. We provide all our clients a smooth, stress-free experience and 100% satisfaction. You should focus on your business while we handle the branding! Our illustrative logo design services deliver the true spirit of every business. Our unique illustration logos will be the building block for your company. Whether you're starting from scratch or extending your business, we've got your back! Revitalize your legacy —Turn launches into accomplishments!</p>
                        <CTA
                            text="Start Live Chat"
                            href="javascript:$zopim.livechat.window.show();"
                            bg="bg-red"
                            icon="/icons/chat.svg"
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

export default Illustrative;
