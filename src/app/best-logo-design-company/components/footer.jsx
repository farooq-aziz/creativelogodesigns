import Image from "next/image";
import Link from "next/link";
import payments from "media/paymentMethods.png";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#000] py-5">
                <div className="container">
                    <div className="flex flex-col gap-y-5 sm:flex-row justify-between items-center pb-5">
                        <div>
                            <ul className="flex gap-3 items-center">
                                <li className="font-poppins font-medium text-[14px] leading-tight text-[#8e8e8e]">
                                    <Link href="/terms-and-conditions">Terms & Condition</Link>
                                </li>
                                <li className="font-poppins font-medium text-[14px] leading-tight text-[#8e8e8e]">
                                    |
                                </li>
                                <li className="font-poppins font-medium text-[14px] leading-tight text-[#8e8e8e]">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <p className="font-poppins font-medium text-[14px] leading-tight text-[#8e8e8e]">
                                One World Trade Center, Suite 8500, New York
                            </p>
                        </div>
                        <div>
                            <Image src={payments} alt="payments" width={150} />
                        </div>
                    </div>
                    <div className="text-center border-t-2 border-[#8e8e8e2e] pt-5">
                        <p className="font-poppins font-medium text-[14px] leading-tight text-[#8e8e8e] text-center">
                            Copyright © 2024 creativelogodesigns.io | <a href="https://bhaooinc.com/" target="_blank" rel="noopener noreferrer">Brand Of Bhaoo Incorporation Company</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;