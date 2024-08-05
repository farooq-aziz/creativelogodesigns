import Image from "next/image";

import Card1 from 'media/new-lp-2/card1.png'
import Card2 from 'media/new-lp-2/card2.png'
import Card3 from 'media/new-lp-2/card3.png'
import Card4 from 'media/new-lp-2/card4.png'

const Design = () => {
    let cards = [
        {
            cardImage: Card1,
            title: <>BRAND <br /> DISCOVERY</>,
            desc: "Customize your design with our in-house highly experienced and creative team. They never cut corners, and always go above and beyond to give our clients a truly personalized logo."
        },
        {
            cardImage: Card2,
            title: <>BRAND <br /> GUIDELINES</>,
            desc: "Customize your design with our in-house highly experienced and creative team. They never cut corners, and always go above and beyond to give our clients a truly personalized logo."
        },
        {
            cardImage: Card3,
            title: <>LOGO <br /> DESIGN</>,
            desc: "Customize your design with our in-house highly experienced and creative team. They never cut corners, and always go above and beyond to give our clients a truly personalized logo."
        },
        {
            cardImage: Card4,
            title: <>MARKETING <br /> COLLATERALS</>,
            desc: "Customize your design with our in-house highly experienced and creative team. They never cut corners, and always go above and beyond to give our clients a truly personalized logo."
        },
    ]
    return (
        <div className="relative bg-[url('../../public/new-lp-2/Mask.png')] bg-no-repeat bg-cover bg-center lg:py-16 md:py-14 py-12 bg-[#f7f7f7]">
            <div className="container">
                <div className="text-center xl:pb-20 pb-16">
                    <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-megat font-extrabold mb-3">We Design More Than Just A Logo</h2>
                    <p className="md:text-base text-sm leading-tight font-serif font-normal">We are committed towards providing professional logo designs tailored to your brand’s culture, core values & distinction.</p>
                    <p className="md:text-base text-sm leading-tight font-serif font-normal">We take a strategic approach to creating unique brand identities</p>
                </div>
                <div className="grid gap-x-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        cards && cards.map((e, i) => (
                            <div key={i} className="relative overflow-hidden group transition-all duration-700 ease-in-out">
                                <div className="image xl:my-0 my-3">
                                    <Image src={e.cardImage} alt="Card" className="block w-full" />
                                </div>
                                <div className="content lg:translate-y-[180px] md:translate-y-[170px] translate-y-[150px] group-hover:-translate-y-[0px] absolute bottom-0 px-2 left-0 2xl:right-[18px] lg:right-0 md:right-10 pb-10">
                                    <h5 className="lg:text-[35px] text-[30px] pb-3 leading-[45px] fonr-normal font-serif text-white text-center">{e.title}</h5>
                                    <p className="group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out text-center px-2 text-white">{e.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Design;
