import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-400">
                <div className="container">
                    <div className="flex">
                        <div className="basis-[33%] bg-yellow-100">
                            <ul className="flex gap-5 justify-evenly">
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>
                            </ul>
                        </div>
                        <div className="basis-[42%]">

                        </div>
                        <div className="basis-[25%]">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;