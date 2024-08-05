// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import Script from "next/script";

const Page = () => {
    return (
        <main>
            <Script id="tacking-code-gtag" strategy="lazyOnload">
                {`
                    gtag('event', 'conversion', { 
                        'send_to': 'AW-11394693744/NK6wCK3QpfIYEPD0tLkq', 'value': 1.0, 'currency': 'USD' 
                    });
                `}
            </Script>
            <Header />
            <section>
                <div className="h-screen flex items-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-sans text-black font-bold leading-none mb-5">
                            Dear Customer,
                        </h1>
                        <p className="text-base font-medium font-sans text-black mb-5">
                            Thank you for submitting the Form on our website. We appreciate your interest
                        </p>
                        <Link href="/" className="w-max px-10 rounded-xl h-[50px] block bg-red text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-2 hover:bg-light-yellow ring-light-yellow leading-[50px]">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Page;