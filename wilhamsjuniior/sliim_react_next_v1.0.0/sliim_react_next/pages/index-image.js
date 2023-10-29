import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import About from "../src/components/About/About";
import Blog from "../src/components/Blog/Blog";
import Contact from "../src/components/Contact/Contact";
import HeroContent from "../src/components/HeroContent";
import Layout from "../src/layouts/Layout";
import SectionContainer from "../src/layouts/SectionContainer";
const PortfolioIsotope = dynamic(
  () => import("../src/components/Portfolio/PortfolioIsotope"),
  {
    ssr: false,
  }
);

export default function IndexImage() {
  useEffect(() => {
    document.querySelector("body").classList.add("dark", "image");
  });
  return (
    <Layout>
      <SectionContainer sectionName={"home"}>
        <div className="home-content">
          {/* Background Dotted Pattern Starts */}
          <HeroContent /><h1></h1>
          {/* Home Contact Ends */}
        </div>
      </SectionContainer>
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <SectionContainer sectionName={"about"}>
        <About />
      </SectionContainer>
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <SectionContainer sectionName="work">
        <div id="work-content">
          {/* Heading Starts */}
          <div className="heading text-left text-md-center">
            <h2>
              my <span>portfolio</span>
            </h2>
          </div>
          <PortfolioIsotope />
        </div>
      </SectionContainer>
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <SectionContainer sectionName="contact">
        <Contact />
      </SectionContainer>
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <Blog />
    </Layout>
  );
}
