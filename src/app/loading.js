import Image from "next/image";
import logo from "media/logo.png";
import spinner from "media/loading-spinner.gif";

const Loading = () => {
    return (
        <section>
            <div className="h-screen flex items-center text-center">
                <div className="container">
                    <Image src={logo} alt="logo" className="block m-auto" />
                    <Image src={spinner} alt="spinner" className="block m-auto mt-5" />
                </div>
            </div>
        </section>
    )
}

export default Loading;