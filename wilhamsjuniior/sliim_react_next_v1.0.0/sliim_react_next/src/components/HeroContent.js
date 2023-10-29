import { Fragment, useContext } from "react";
import { Context } from "../context/context";

const HeroContent = () => {
  const { sectionToggle } = useContext(Context);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-section d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h2>
                  Olá ! Eu me chamo<span> Wilhams.</span>
                </h2>
                <p>
                  Desenvolvedor Fullstack
                </p>
                <div className="buttons">
                  <a
                    id="link-about"
                    href="#about"
                    className="btn main-btn link-page"
                    onClick={() => sectionToggle("about")}
                  >
                    <span>sobre mim</span>
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
          Vamos trabalhar juntos
          <a className="d-block" href="#">
            wilhams.code@gmail.com
          </a>
          <span>+55 83 9 9106 7262</span>
        </p>
      </div>
    </Fragment>
  );
};
export default HeroContent;
