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
                  Olá ! Eu me chamo<span> Wilhams Júnior.</span>
                </h2>
                <p>Desenvolvedor Fullstack</p>
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
      <div className="home-contact d-sm-block">
        <ul className="social list-unstyled d-flex m-0">
          {/* <li className="facebook">
            <a title="Facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li> */}
          <li className="linkedin">
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/developer-front-back-wilhams/"
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li className="github">
            <a title="github" href="https://github.com/wilhamsJW">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="codepen">
            <a title="Codpen" href="https://codepen.io/wilhamsjw">
              <i className="fa fa-codepen" />
            </a>
          </li>
          {/* <li className="instagram">
            <a title="Instagram" href="#">
              <i className="fa fa-instagram" />
            </a>
          </li> */}
          <li className="code">
            <a title="playcode" href="https://playcode.io/react_usereducer">
              <i className="fa fa-code" />
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media Ends */}

      {/* Home Contact Starts */}
      <div className="home-social">
      {/* Botão do WhatsApp */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=5583991067262&text=Olá Wilhams Júnior! Eu vim através do seu site e gostaria de falar com você"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
            alt="WhatsApp"
            style={{ width: "41px", height: "41px" }}
          />
        </a>
      </div>
      </div>
    </Fragment>
  );
};
export default HeroContent;
