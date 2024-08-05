// Imports Components
import Image from "next/image";
// Import Images
import One from "media/join-family/1.webp";
import Two from "media/join-family/2.webp";
import Three from "media/join-family/2_288x288.webp";
import Four from "media/join-family/4.webp";
import Five from "media/join-family/5.webp";
import Six from "media/join-family/6.webp";
import Seven from "media/join-family/7.webp";
import Eight from "media/join-family/8.webp";

const Letstalk = () => {
    return (
        <section>
            <div className="hidden md:block py-[100px] lg:py-[200px] overflow-hidden">
                <div className="container relative">
                    <div className="hidden md:grid grid-cols-1 grid-flow-col">
                        <div className="rotate-[3deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] mt-[4rem] relative z-[1] ml-[0rem] bg-black">
                            <Image src={One} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-35rem] lg:ml-[-58rem] 2xl:ml-[-68rem] mt-[6rem] bg-black">
                            <Image src={Two} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[-8deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[2] ml-[-35rem] lg:ml-[-50rem] 2xl:ml-[-60rem] bg-black">
                            <Image src={Three} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[-11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[3] ml-[-25rem] lg:ml-[-40rem] mt-[8rem] 2xl:ml-[-50rem] bg-black">
                            <Image src={Four} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-25rem] lg:ml-[-32rem] lg:mt-[-3rem] 2xl:ml-[-42rem] bg-black">
                            <Image src={Five} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[5deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[2] ml-[-22rem] mt-[6rem] 2xl:ml-[-32rem] bg-black">
                            <Image src={Six} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[-10deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[3] ml-[-12rem] mt-[3rem] 2xl:ml-[-22rem] bg-black">
                            <Image src={Seven} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                        <div className="rotate-[5deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-12rem] mt-[3rem] bg-black">
                            <Image src={Eight} alt="gif" className="w-full h-full opacity-60" proprity="true" quality="85" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 flex-col">
                        <h2 className="text-[50px] lg:text-[70px] font-megat tracking-wider font-extrabold text-transparent lett" style={{
                            "WebkitTextStrokeWidth": "0.1rem", "WebkitTextStrokeColor": "#fff"
                        }}>BE A PART OF THE</h2>
                        <h2 className="text-[30px] lg:text-[50px] text-black md:text-white font-normal">
                        CREATIVE LOGO DESIGN <span className="font-megat font-extrabold">FRATERNITY</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Letstalk;