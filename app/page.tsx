import About from "@/components/About";
import Awards from "@/components/Awards";
import Blog from "@/components/blog";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Cuotser from "@/components/cuotser";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loading from "@/components/Loding";
import Others from "@/components/others";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/test";

export default function Home() {
  return (
    <>
    <Header /> 
    <Hero />
    <About /> 
    <Services />
    <Client />
    <Portfolio /> 
    <Awards />
    <Testimonial />
    <Blog />
    <Contact />
    <Footer />
    <Others />
    <Loading />
    <Cuotser />
    </>
  )
}