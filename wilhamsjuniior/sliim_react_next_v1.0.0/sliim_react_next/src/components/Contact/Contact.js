import React from "react";

export default function Contact() {
  return (
    <div id="contact-content" className="container">
      <div className="heading text-center">
        <h2>
          Entre <span>em contato</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="box">
            <span className="material-icons">call</span>
            <p>+5583 9 9106 7262</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="box">
            <span className="material-icons">email</span>
            <p>wilhams.code@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="box last-box">
            <span className="material-icons">location_on</span>
            <p>Recife, PE</p>
          </div>
        </div>
      </div>
      <div className="separator" />
      <div className="row">
        <div className="col-12">
          <h4 className="mb-3">Sobre</h4>
          <p>
            Sinta-se à vontade para entrar em contato comigo. Estou sempre
            aberto a discutir novos projetos ou ideias criativas. Me interesso
            por vários assuntos que podem ser transformados em software, como:
            automação com Raspberry Pi, esportes, nutrição, IA, investimentos ou
            qualquer outro assunto que queira conversar.
          </p>
          <p>
            Quer elevar o seu negócio a um novo patamar? Entre em contato comigo
            hoje mesmo para explorarmos como podemos impulsionar a sua presença
            online e aumentar significativamente seus resultados.
          </p>
          <p>
            Se você é um recrutador, é um prazer tê-lo aqui e perceber o seu
            interesse pelo meu trabalho. Sinta-se à vontade para entrar em
            contato ainda hoje.
          </p>
        </div>
      </div>

      {/* OS campos pra enviar msg só aparecerão quando a API estiver pronta <h4 className="mb-3">Envie-me um email</h4>
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
      </div> */}

      <div className="row">
        <div className="col-12 text-center">
          <h4>Siga-me</h4>
          <ul className="social list-unstyled d-flex justify-content-center">
            <li className="linkedin">
              <a
                title="linkedin"
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
              <a title="codepen" href="https://codepen.io/wilhamsjw">
                <i className="fa fa-codepen" />
              </a>
            </li>
            <li className="code">
              <a title="code" href="https://playcode.io/react_usereducer">
                <i className="fa fa-code" />
              </a>
            </li>
          </ul>
        </div>
      </div>

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
            style={{ width: "60px", height: "60px" }}
          />
        </a>
      </div>
    </div>
  );
}
