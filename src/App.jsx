import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import ButtonMotion from "./components/ButtonMotion";

const App = () => {
  return (
    <>
      <div className="h-screen  w-full">
        <ButtonMotion />
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
