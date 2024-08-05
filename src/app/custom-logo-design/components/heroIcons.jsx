// Components

import Image from "next/image";

const HeroIcons = () => {
    return (
        <section>
            <div className="py-[50px] lg:py-[80px]">
                <div className="container">
                    <div className="flex justify-center gap-y-5 flex-wrap lg:grid lg:grid-cols-5 lg:divide-x-[1px] lg:divide-red">
                        <div className="basis-[49%] md:basis-[33%]">
                            <Image src="/lp-one/hero/icons/1.png" width={91} height={120} alt="icons" className="block m-auto" />
                            <h3 className="text-[16px] xl:text-[20px] leading-tight font-light font-sans text-black text-center mt-3">
                                100% Original <br className="block" /> Designs
                            </h3>
                        </div>
                        <div className="basis-[49%] md:basis-[33%]">
                            <Image src="/lp-one/hero/icons/2.png" width={123} height={120} alt="icons" className="block m-auto" />
                            <h3 className="text-[16px] xl:text-[20px] leading-tight font-light font-sans text-black text-center mt-3">
                                360 Design <br className="block" /> Consultancy
                            </h3>
                        </div>
                        <div className="basis-[49%] md:basis-[33%]">
                            <Image src="/lp-one/hero/icons/3.png" width={114} height={120} alt="icons" className="block m-auto" />
                            <h3 className="text-[16px] xl:text-[20px] leading-tight font-light font-sans text-black text-center mt-3">
                                Complete Customer <br className="block" /> Satisfaction
                            </h3>
                        </div>
                        <div className="basis-[49%] md:basis-[33%]">
                            <Image src="/lp-one/hero/icons/4.png" width={150} height={120} alt="icons" className="block m-auto" />
                            <h3 className="text-[16px] xl:text-[20px] leading-tight font-light font-sans text-black text-center mt-3">
                                100% Money-Back <br className="block" /> Guarantee
                            </h3>
                        </div>
                        <div className="basis-[49%] md:basis-[33%]">
                            <Image src="/lp-one/hero/icons/5.png" width={76} height={120} alt="icons" className="block m-auto" />
                            <h3 className="text-[16px] xl:text-[20px] leading-tight font-light font-sans text-black text-center mt-3">
                                Market-Recognized <br className="block" /> Designers
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroIcons;