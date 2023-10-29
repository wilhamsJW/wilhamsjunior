import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
const Index = () => {
  return (
    <Fragment>
      <Head>
        <link
          legacyBehavior
          href="/demo/assets/css/materialdesignicons.min.css"
          rel="stylesheet"
        />
        <link
          legacyBehavior
          href="/demo/assets/css/demo.css"
          rel="stylesheet"
        />
      </Head>
      <section
        className="bg-home-half border-bottom"
        style={{
          background: 'url("/demo/assets/images/bg.jpg") center center',
        }}
      >
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h1 className="mb-0 text-white text-uppercase">Sliim</h1>
                    <h2 className="text-white pt-2 text-uppercase">
                      Personal Portfolio
                    </h2>
                    <div className="mt-4">
                      <a
                        href="#demos"
                        className="btn btn-custom mouse-down m-1"
                      >
                        View Demos
                      </a>
                      <a href="#" className="btn btn-outline-white m-1">
                        Download Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOME */}
      {/* DEMOS */}
      <section className="section my-0 my-md-5" id="demos">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="section-title text-center">
                <h2 className="mb-4 text-uppercase font-weight-bold">
                  Template Demos
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="demos-box text-center">
                <Link legacyBehavior href="/index-image">
                  <a target="_blank" rel="noreferrer">
                    <img
                      src="/demo/assets/images/demo/image.jpg"
                      alt="demo-img"
                      className="img-fluid shadow"
                    />
                  </a>
                </Link>
                <h4 className="mt-4 text-uppercase">Image Background</h4>
              </div>
            </div>
            {/* <div className="col-md-6 mt-5">
              <div className="demos-box text-center">
                <Link legacyBehavior href="/index-video">
                  <a target="_blank" rel="noreferrer">
                    <img
                      src="/demo/assets/images/demo/video.jpg"
                      alt="demo-img"
                      className="img-fluid shadow"
                    />
                  </a>
                </Link>
                <h4 className="mt-4 text-uppercase">Video Background</h4>
              </div>
            </div> */}
          </div>
          <div className="row">
            {/* <div className="col-md-6 mt-5">
              <div className="demos-box text-center">
                <Link legacyBehavior href="/index-animated-dark">
                  <a
                    
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/demo/assets/images/demo/dark.jpg"
                      alt="demo-img"
                      className="img-fluid shadow"
                    />
                  </a>
                </Link>
                <h4 className="mt-4 text-uppercase">
                  Animated Background Dark
                </h4>
              </div>
            </div> */}
            {/* <div className="col-md-6 mt-5">
              <div className="demos-box text-center">
                <Link legacyBehavior href="/index-animated-light">
                  <a target="_blank" rel="noreferrer">
                    <img
                      src="/demo/assets/images/demo/light.jpg"
                      alt="demo-img"
                      className="img-fluid shadow"
                    />
                  </a>
                </Link>
                <h4 className="mt-4 text-uppercase">
                  Animated Background Light
                </h4>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* DEMOS */}
      {/* FOOTER */}
      <section className="footer-three bg-dark">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="text-sm-start copy-rights">
                <p className="mb-0">
                  {" "}
                  © TrendyCoder. Developed with{" "}
                  <i className="mdi mdi-heart text-danger" /> by{" "}
                  <a
                    href="https://themeforest.net/user/trendycoder"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    TrendyCoder
                  </a>
                  .
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </section>
    </Fragment>
  );
};
export default Index;
