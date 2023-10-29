import React from 'react'

export default function Contact() {
    return (
        <div id="contact-content">
            {/* Heading Starts */}
            <div className="heading text-left text-md-center">
                <h2>
                    entre <span>em contato</span>
                </h2>
            </div>
            {/* Heading Ends */}
            <div className="container">
                {/* Contact Boxes Starts */}
                <div className="row boxes">
                    {/* Contact Box Item Starts */}
                    <div className="col-12 col-lg-4">
                        <div className="box">
                            <span className="material-icons">call</span>
                            <p>+5583 9 9106 7262</p>
                        </div>
                    </div>
                    {/* Contact Box Item Ends */}
                    {/* Contact Box Item Starts */}
                    <div className="col-12 col-lg-4">
                        <div className="box">
                            <span className="material-icons">email</span>
                            <p>wilhams.code@gmail.com</p>
                        </div>
                    </div>
                    {/* Contact Box Item Ends */}
                    {/* Contact Box Item Starts */}
                    <div className="col-12 col-lg-4">
                        <div className="box last-box">
                            <span className="material-icons">location_on</span>
                            <p>Recife, PE</p>
                        </div>
                    </div>
                    {/* Contact Box Item Ends */}
                </div>
                {/* Contact Boxes Ends */}
                <div className="separator" />
                {/* Contact Form Starts */}
                <div className="row">
                    <div className="col-12 col-lg-4 leftside">
                        <div>
                            <h4 className="mb-0">Envie-me um email</h4>
                            <p>
                            Sinta-se livre para entrar em contato comigo. Estou sempre aberto a discutir novos projetos ou ideias criativas.
                            </p>
                        </div>
                        <div>
                            <h4>follow me</h4>
                            {/* Social Media Starts */}
                            <ul className="social list-unstyled mb-5 mb-lg-0 p-0 d-flex">
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
                                <li className="youtube">
                                    <a title="Linkedin" href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li className="dribbble">
                                    <a title="behance" href="#">
                                        <i className="fa fa-behance" />
                                    </a>
                                </li>
                            </ul>
                            {/* Social Media Ends */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <form
                            className="formcontact"
                            method="post"
                            action="php/process-form.php"
                        >
                            <div className="row contactform">
                                <div className="col-12 col-md-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Seu Nome"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Assunto"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Seu E-email"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        placeholder="Sua Mensagem"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn main-btn">
                                        <span>Enviar</span>
                                    </button>
                                </div>
                                <div className="col-12 form-message d-none">
                                    <span className="output_message text-center text-uppercase" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Contact Boxes Ends */}
            </div>
        </div>
    )
}
