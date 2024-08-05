// Import Components
import Image from "next/image";
// Import Images
import avatarOne from "media/reviews/avatarOne.png";
import avatarTwo from "media/reviews/avatarTwo.png";
import avatarThree from "media/reviews/avatarThree.png";
import avatarFour from "media/reviews/avatarFour.png";

const Reviews = ({ content }) => {
  return (
    <section>
      <div className="bg-black py-[50px] lg:py-[100px]">
        <div className="container">
          <div className="lg:w-[80%] m-auto">
            <p className="text-[18px] leading-[28px] lg:text-[25px] lg:leading-[35px] text-center text-white font-normal mb-[50px] lg:mb-[70px]">
              Enough About What We Do and How We Do It! Let’s Hear from <br />
              Our Satisfied Clients!
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-megat text-white leading-tight font-extrabold text-center mb-[50px] lg:mb-[100px]">
              OUR <span className="text-red">VAULT</span> OF REVIEWS
            </h2>
            <div className="grid grid-cols-1 gap-5 lg:gap-10">
              <div className="relative group">
                <Image
                  src={avatarOne}
                  alt="avatar"
                  className="lg:absolute lg:top-[-100px] lg:left-[-50px] shadow-md rounded-full mb-5 lg:mb-0"
                  width={60}
                  height={60}
                />
                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                  Leona Greene
                </h4>
                <p className="text-[14px] leading-[26px] font-poppins text-white font-normal text-justify lg:w-[50%]">
                  " As a startup founder, I was looking for a comprehensive branding solution. Creative Logo Designs exceeded my expectations. Their team provided exceptional logo design that perfectly captured our vision. The website design was sleek, user-friendly, and optimized for our target audience. What stood out was their illustration design, offering a unique visual language that aligned with our brand's identity. "
                </p>
              </div>
              <div className="relative text-right group">
                <Image
                  src={avatarFour}
                  alt="avatar"
                  className="lg:absolute lg:top-[-100px] lg:right-[-50px] shadow-md rounded-full inline-block mb-5 lg:mb-0"
                  width={60}
                  height={60}
                />
                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                  Candice Newman
                </h4>
                <p className="text-[14px] leading-[26px] font-poppins text-white font-normal text-justify lg:w-[50%] ml-auto">
                  " I recently hired Creative Logo Designs for a complete rebranding of my business, and I couldn't be happier with the results. Their team of designers is incredibly talented and attentive to detail. They started with crafting a unique and eye-catching logo that perfectly captures the essence of my business. The logo design process was collaborative, and they were open to my ideas and feedback every step of the way. "
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={avatarThree}
                  alt="avatar"
                  className="lg:absolute lg:top-[-100px] lg:left-[-50px] shadow-md rounded-full mb-5 lg:mb-0"
                  width={60}
                  height={60}
                />
                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                  Lora Poole
                </h4>
                <p className="text-[14px] leading-[26px] font-poppins text-white font-normal text-justify lg:w-[50%]">
                  " Working with Creative Logo Designs has been an absolute delight. They are masters of their craft, offering a wide range of design and branding services that have taken our business to the next level. The logo they designed for us perfectly encapsulates our brand's values and personality. It's clean, memorable, and versatile. "
                </p>
              </div>
              <div className="relative text-right group">
                <Image
                  src={avatarTwo}
                  alt="avatar"
                  className="lg:absolute lg:top-[-100px] lg:right-[-50px] shadow-md rounded-full inline-block mb-5 lg:mb-0"
                  width={60}
                  height={60}
                />
                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                  Shawn Klein
                </h4>
                <p className="text-[14px] leading-[26px] font-poppins text-white font-normal text-justify lg:w-[50%] ml-auto">
                  " Their illustration design work added a unique and creative touch to our marketing campaigns, making our brand memorable in the minds of our customers. And their application design skills turned our app into a powerful tool for our users. Creative Logo Designs excels at creating a cohesive brand identity across all our digital platforms. "
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;