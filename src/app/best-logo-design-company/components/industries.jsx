import Image from "next/image";

const Industries = () => {
    let data = [
        {
            icon: {
                src: "/lp-three/industries/1.png",
                width: 37,
                height: 37
            },
            text: "Engineering"
        },
        {
            icon: {
                src: "/lp-three/industries/2.png",
                width: 37,
                height: 37
            },
            text: "Religion"
        },
        {
            icon: {
                src: "/lp-three/industries/3.png",
                width: 37,
                height: 37
            },
            text: "Financial"
        },
        {
            icon: {
                src: "/lp-three/industries/4.png",
                width: 37,
                height: 37
            },
            text: "Medical"
        },
        {
            icon: {
                src: "/lp-three/industries/5.png",
                width: 37,
                height: 37
            },
            text: "Communication"
        },
        {
            icon: {
                src: "/lp-three/industries/6.png",
                width: 37,
                height: 37
            },
            text: "Children"
        },
        {
            icon: {
                src: "/lp-three/industries/7.png",
                width: 37,
                height: 37
            },
            text: "Construction"
        },
        {
            icon: {
                src: "/lp-three/industries/8.png",
                width: 37,
                height: 37
            },
            text: "Social"
        },
        {
            icon: {
                src: "/lp-three/industries/9.png",
                width: 37,
                height: 37
            },
            text: "Insurance"
        },
        {
            icon: {
                src: "/lp-three/industries/10.png",
                width: 37,
                height: 37
            },
            text: "Health"
        },
        {
            icon: {
                src: "/lp-three/industries/11.png",
                width: 37,
                height: 37
            },
            text: "Entertainment"
        },
        {
            icon: {
                src: "/lp-three/industries/12.png",
                width: 37,
                height: 37
            },
            text: "Craft"
        },
        {
            icon: {
                src: "/lp-three/industries/13.png",
                width: 37,
                height: 37
            },
            text: "Technology"
        },
        {
            icon: {
                src: "/lp-three/industries/14.png",
                width: 37,
                height: 37
            },
            text: "Education"
        },
        {
            icon: {
                src: "/lp-three/industries/15.png",
                width: 37,
                height: 37
            },
            text: "Consultation"
        },
        {
            icon: {
                src: "/lp-three/industries/16.png",
                width: 37,
                height: 37
            },
            text: "Travel"
        },
        {
            icon: {
                src: "/lp-three/industries/17.png",
                width: 37,
                height: 37
            },
            text: "Environmental"
        },
        {
            icon: {
                src: "/lp-three/industries/18.png",
                width: 37,
                height: 37
            },
            text: "Music"
        },
        {
            icon: {
                src: "/lp-three/industries/19.png",
                width: 37,
                height: 37
            },
            text: "Automotive"
        },
        {
            icon: {
                src: "/lp-three/industries/20.png",
                width: 37,
                height: 37
            },
            text: "Human Resource"
        },
        {
            icon: {
                src: "/lp-three/industries/21.png",
                width: 37,
                height: 37
            },
            text: "Architectural"
        },
        {
            icon: {
                src: "/lp-three/industries/22.png",
                width: 37,
                height: 37
            },
            text: "Matrimony"
        },
        {
            icon: {
                src: "/lp-three/industries/23.png",
                width: 37,
                height: 37
            },
            text: "Fashion"
        },
        {
            icon: {
                src: "/lp-three/industries/24.png",
                width: 37,
                height: 37
            },
            text: "Navigation"
        },
        {
            icon: {
                src: "/lp-three/industries/25.png",
                width: 37,
                height: 37
            },
            text: "Catalogues"
        },
        {
            icon: {
                src: "/lp-three/industries/26.png",
                width: 37,
                height: 37
            },
            text: "Sports"
        },
        {
            icon: {
                src: "/lp-three/industries/27.png",
                width: 37,
                height: 37
            },
            text: "Food"
        },
        {
            icon: {
                src: "/lp-three/industries/28.png",
                width: 37,
                height: 37
            },
            text: "Art"
        },
        {
            icon: {
                src: "/lp-three/industries/29.png",
                width: 37,
                height: 37
            },
            text: "Spa"
        },
        {
            icon: {
                src: "/lp-three/industries/30.png",
                width: 37,
                height: 37
            },
            text: "News"
        }
    ]
    return (
        <section>
            <div className="py-[50px] lg:py-[100px] bg-[#f5f5f5]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h3 className="text-[18px] lg:text-[20px] text-[#6f6f6f] font-poppins font-bold leading-tight mb-3">
                            SERVING FORTUNE 500 COMPANIES
                        </h3>
                        <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                            Belonging to <span className="text-[#dd1e4b]">45+ Industries!</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {
                            data && data.map((e, i) => (
                                <div key={i} className="flex items-center gap-3 hover:bg-white hover:shadow-md py-3 px-2 cursor-pointer">
                                    <Image src={e.icon.src} width={e.icon.width} height={e.icon.height} alt="icon" />
                                    <h3 className="text-[14px] text-[#6f6f6f] font-poppins font-semibold leading-tight">
                                        {e.text}
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries;