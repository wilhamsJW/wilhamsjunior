import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import About from "../src/components/About/About";
import Blog from "../src/components/Blog/Blog";
import Contact from "../src/components/Contact/Contact";
import Layout from "../src/layouts/Layout";
import SectionContainer from "../src/layouts/SectionContainer";
const PortfolioIsotope = dynamic(
  () => import("../src/components/Portfolio/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const IndexVideo = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("index", "video", "dark");
  }, []);

  return (
    <Layout>
      <SectionContainer sectionName={"home"}>
        <div className="home-content">
          {/* Background Video Starts */}
          <video
            id="videobg"
            poster="images/poster.jpg"
            autoPlay
            muted
            loop
            src="images/video.mp4"
          ></video>
          {/* Background Video Ends */}
          {/* Background Dotted Pattern Starts */}
          <div className="right-dotted-shape" />
          {/* Background Dotted Pattern Ends */}
          {/* Home Main Content Starts */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-section d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2>
                      hi ! i’m<span> Daniel.</span>
                    </h2>
                    <p>
                      I'm a Freelance UI/UX Designer and Developer based in
                      London, England.
                    </p>
                    <div className="buttons">
                      <a
                        id="link-about"
                        href="#about"
                        className="btn main-btn link-page"
                      >
                        <span>more about me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Home Main Content Ends */}
          {/* Social Media Starts */}
          <div className="home-social d-none d-sm-block">
            <ul className="social list-unstyled d-flex m-0">
              <li className="facebook">
                <a title="Facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="twitter">
                <a title="Twitter" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="linkedin">
                <a title="Linkedin" href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li className="dribbble">
                <a title="Dribbble" href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li className="instagram">
                <a title="Instagram" href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Ends */}
          {/* Home Contact Starts */}
          <div className="home-contact d-none d-sm-block">
            <p>
              Let's work together
              <a className="d-block" href="#">
                contact@daniel.net
              </a>
              <span>+216 21 184 010 32</span>
            </p>
          </div>
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
      <SectionContainer sectionName="blog">
        <Blog />
      </SectionContainer>
    </Layout>
  );
};
export default IndexVideo;
