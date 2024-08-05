'use client'
import dynamic from 'next/dynamic'
// import Hero from "./components/hero"
const Hero = dynamic(() => import('./components/hero'))
// import Packages from "./components/packages"
const Packages = dynamic(() => import('./components/packages'))
// import Portfolio from "./components/portfolio"
const Portfolio = dynamic(() => import('./components/portfolio'))
// import Satisfaction from "./components/satisfaction"
const Satisfaction = dynamic(() => import('./components/satisfaction'))
// import Services from "./components/services"
const Services = dynamic(() => import('./components/services'))
// import SmallBanner from "./components/smallbanner"
const SmallBanner = dynamic(() => import('./components/smallbanner'))
// import Combo from "./components/combo"
const Combo = dynamic(() => import('./components/combo'))
// import Testimonials from "./components/testimonials"
const Testimonials = dynamic(() => import('./components/testimonials'))
// import Contact from "./components/contact"
const Contact = dynamic(() => import('./components/contact'))
// import Footer from "@/components/footer/footer"
const Footer = dynamic(() => import('@/components/footer/footer'))
// import Header from "./components/header"
const Header = dynamic(() => import('./components/header'))
import PopupAlert from "@/components/popup-alert/popup-alert"

const Page = () => {
    return (
        <main>
            <Header />
            <Hero />
            <Satisfaction />
            <Portfolio />
            <Services />
            <SmallBanner />
            <Packages />
            <Combo />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}

export default Page;