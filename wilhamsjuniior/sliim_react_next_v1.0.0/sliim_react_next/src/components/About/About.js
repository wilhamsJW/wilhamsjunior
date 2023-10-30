import React, { useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Autoplay, Navigation]);

export default function About() {
  const [Active, setActive] = useState(1);
  const experience = [
    {
      desig: "Software Development ",
      duration: "2021- Até o momento",
      company: "Mundiale",
      detail:
        "Desenvolvi habilidades especializadas na implementação de soluções de Automação de Processos Robóticos (RPA) durante meu envolvimento em um projeto de grande escala, que permitiu que empresas efetuassem o cadastro de milhares de clientes com eficiência. Enfrentei e resolvi desafios complexos relacionados à automação de mapas, com sucesso na implementação de funcionalidades-chave em RPA para a execução dessas tarefas. Além disso, desempenhei um papel fundamental na criação e edição de mais de 90 landing pages utilizando técnicas avançadas de SEO (search enginner optimization) altamente eficazes, impulsionando as vendas diárias e ajudando os clientes a encontrar as melhores opções de internet em suas respectivas localidades. Gerenciei e otimizei dados cruciais dos clientes em dois projetos distintos, participando ativamente na revisão e na criação de novas regras de negócios diariamente.",
    },
    {
      desig: "Software Development ",
      duration: "2020-21",
      company: "ServiceNet",
      detail:
        "Como parte de um projeto inovador de pagamentos e jogos online, utilizei habilidades em diversas tecnologias-chave para otimizar a experiência de milhares de usuários. Resolvi com eficiência um desafio crítico relacionado a Progressive Web Applications (PWAs), evitando possíveis perdas financeiras. Identifiquei a causa raiz e implementei uma solução rápida e integrada à produção, garantindo operações contínuas e aprimorando a experiência do usuário e a eficiência operacional da empresa.",
    },
    {
      desig: "Web Developer",
      duration: "2019-20",
      company: "Freelancer",
      detail:
        "Atuei como freelancer, focando em desenvolvimento de sites e solução de problemas para uma variedade de clientes, incluindo empresas físicas e jurídicas. Minha pilha de tecnologia principal envolvia JavaScript (JS) e React, onde pude criar e aprimorar sites, além de resolver desafios complexos com eficiência e precisão. Durante esse período, adquiri habilidades sólidas em criação de soluções web personalizadas, garantindo experiências fluidas e amigáveis para os usuários finais.",
    },
  ];
  const education = [
    {
      degree: "Analises e Desenvolvimento de Sistemas",
      year: "2019-21",
      institution: "Universidade Estácio de Sá",
      detail:
        "Experiência sólida em análise de sistemas e desenvolvimento, com conhecimento aprofundado em arquiteturas de software, como arquitetura cliente-servidor e arquitetura em camadas. Habilidades avançadas em implementação de soluções usando metodologias ágeis e práticas de desenvolvimento orientado a objetos.",
    },
    {
      degree: "Oratória",
      year: "2011-Até o momento",
      institution: "JW",
      detail:
        "Com mais de uma década de experiência em oratória, aprimorei habilidades sólidas de falar em público e transmitir mensagens de forma envolvente e eficaz. Conduzi palestras bem-sucedidas sobre tecnologia com foco em SEO, alcançando mais de 500 participantes. Além disso, apresentei palestras abrangendo uma variedade de tópicos, demonstrando capacidade comprovada de comunicação com públicos diversos e de diferentes tamanhos.",
    },
  ];
  return (
    <div id="about-content">
      {/* Heading Starts */}
      <div className="heading text-left text-md-center">
        <h2>
          Quem <span>Sou eu</span>
        </h2>
      </div>
      {/* Heading Ends */}
      {/* Personal Infos Starts */}
      <div className="container infos">
        <div className="row infos-holder align-items-center">
          <div className="col-12 col-lg-5">
            <img
              className="img-fluid d-block photo"
              src="images/man.png"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-7">
            <p className="m-0">
              Sou Wilhams Júnior, um Desenvolvedor Fullstack com mais de 4 anos
              de experiência, especializado em otimização de desempenho e SEO.
              <br />
              <br />
              Utilizo as tecnologias mais recentes para criar sistemas e sites
              de alto desempenho, garantindo uma presença online otimizada e de
              fácil acesso.
              <br />
              <br />
              Meu foco é impulsionar o sucesso dos projetos dos meus clientes,
              oferecendo soluções inovadoras e eficientes para o mundo digital
              em constante evolução.
            </p>
            <div className="row text-nowrap">
              <div className="d-flex col-12 col-sm-6 personal-list-container personal-list-container-1">
                <ul className="list-unstyled personal-info w-100">
                  {/* <li>
                    <p>
                      <span className="material-icons">cake</span>
                      <span>Birthdate : </span>June 1990
                    </p>
                  </li> */}
                  <li>
                    <p>
                      <span className="material-icons">link</span>
                      <span></span>
                      <Link legacyBehavior href="https://github.com/wilhamsJW">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="linkStyle"
                        >
                          GitHub
                        </a>
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">link</span>
                      <span></span>
                      <Link
                        legacyBehavior
                        href="https://www.linkedin.com/in/developer-front-back-wilhams/"
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="linkStyle"
                        >
                          Linkedin
                        </a>
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">code</span>
                      <span></span>
                      <Link legacyBehavior href="https://codepen.io/wilhamsjw">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="linkStyle"
                        >
                          CodePen
                        </a>
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">code</span>
                      <span></span>
                      <Link
                        legacyBehavior
                        href="https://playcode.io/react_usereducer"
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="linkStyle"
                        >
                          PlayCode
                        </a>
                      </Link>
                    </p>
                  </li>
                  {/* <li>
                    <p>
                      <span className="material-icons">settings</span>
                      <span>Experience : </span>
                    </p>
                  </li> */}
                </ul>
              </div>
              <div className="d-flex col-12 col-sm-6 personal-list-container personal-list-container-2">
                <ul className="list-unstyled personal-info w-100">
                  <li>
                    <p>
                      <span className="material-icons">location_on</span>Recife,
                      PE
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="material-icons">email</span>
                      <Link legacyBehavior href="mailto:mjunior.wj@gmail.com">
                        <a className="linkStyle">mjunior.wj@gmail.com</a>
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Download CV Starts */}
            {/* <a href="#" className="btn main-btn">
              <span>download my cv</span>
            </a> */}
            {/* Download CV Ends */}
          </div>
        </div>
      </div>
      {/* Personal Infos Ends */}
      {/* Resume Starts */}
      <div className="w-100 resume">
        <div className="container">
          <div className="row">
            <div className="col-12 pl-0"></div>
            <div className="resume-header">
              <p
                className={`${Active == 1 ? "active" : ""}`}
                onClick={() => setActive(1)}
              >
                experiência
              </p>
              <p
                className={`${Active == 2 ? "active" : ""}`}
                onClick={() => setActive(2)}
              >
                educação
              </p>
            </div>
            <div className="col-12 resume-holder">
              {/* Experience Starts */}
              <div
                className={`owl-carousel ${
                  Active == 1 ? "visiblecarousel owl-loaded" : "hiddencarousel"
                }`}
                onClick={() => setActive(1)}
              >
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    1350: {
                      slidesPerView: 3,
                    },
                  }}
                  className=""
                >
                  {/* Experience Item Starts */}
                  {experience.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="resume-item item">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">{item.desig}</h5>
                          <h6 className="mb-0">{item.duration}</h6>
                        </div>
                        <span className="company d-inline-block mb-2">
                          {item.company}
                        </span>
                        <p>{item.detail}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* Experience Item Ends */}
                </Swiper>
              </div>
              {/* Experience Ends */}
              {/* Education Starts */}
              <div
                className={`owl-carousel ${
                  Active == 2 ? "visiblecarousel owl-loaded" : "hiddencarousel"
                }`}
                // onClick={() => setActive(1)} // Clik que fazia o card de eduação mudar para experiencia
              >
                {/* Education Item Starts */}
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    1350: {
                      slidesPerView: 2,
                    },
                  }}
                  className=""
                >
                  {education.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="resume-item item">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">{item.degree} </h5>
                          <h6 className="mb-0">{item.year}</h6>
                        </div>
                        <span className="company d-inline-block mb-2">
                          {item.institution}
                        </span>
                        <p>{item.detail}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Education Item Ends */}
              </div>
              {/* Education Ends */}
            </div>
          </div>
        </div>
      </div>
      {/* Resume Ends */}
      <div className="badges">
        <div className="container">
          <div className="row text-center">
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">cases</span>
              <h3>4</h3>
              <p>Anos de experiência</p>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">thumb_up</span>
              <h3>53</h3>
              <p>Projetos feitos</p>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col-12 col-md-4">
              <span className="material-icons">favorite</span>
              <h3>Mais de 104 mil</h3>
              <p>Pessoas satisfeitas</p>
              <p style={{ fontSize: "12px" }}>
                (Inclui alcance total de usuários)
              </p>
            </div>
            {/* Fact Badge Item Ends */}
          </div>
        </div>
      </div>
      {/* Fun Facts Ends */}
      {/* Skills Starts */}
      <div className="container skills">
        <div className="row">
          <div className="col-12">
            <h4 className="subtitle">
              {/*<span class="material-icons">download_done</span>*/}
              Hard Skills
            </h4>
          </div>
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">HTML</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={80}
                style={{ width: "80%" }}
              />
              <span className="percent" style={{ right: "20%" }}>
                80%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Javascript</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={88}
                style={{ width: "88%" }}
              />
              <span className="percent" style={{ right: "13%" }}>
                88%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">CSS</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={60}
                style={{ width: "60%" }}
              />
              <span className="percent" style={{ right: "40%" }}>
                60%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Nest.JS</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={57}
                style={{ width: "57%" }}
              />
              <span className="percent" style={{ right: "43%" }}>
                57%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Next.JS</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={85}
                style={{ width: "83%" }}
              />
              <span className="percent" style={{ right: "18%" }}>
                83%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">Node.JS</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={75}
                style={{ width: "75%" }}
              />
              <span className="percent" style={{ right: "26%" }}>
                75%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">MongoDB</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={70}
                style={{ width: "70%" }}
              />
              <span className="percent" style={{ right: "30%" }}>
                70%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">React</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={80}
                style={{ width: "80%" }}
              />
              <span className="percent" style={{ right: "20%" }}>
                80
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">Redux</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={80}
                style={{ width: "80%" }}
              />
              <span className="percent" style={{ right: "20%" }}>
                80
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">react query</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={74}
                style={{ width: "74%" }}
              />
              <span className="percent" style={{ right: "25%" }}>
                74
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">SEO</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={95}
                style={{ width: "95%" }}
              />
              <span className="percent" style={{ right: "5%" }}>
                95
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">typescript</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={71}
                style={{ width: "71%" }}
              />
              <span className="percent" style={{ right: "28%" }}>
                71
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">Material Ui</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={71}
                style={{ width: "71%" }}
              />
              <span className="percent" style={{ right: "28%" }}>
                71
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">Jest</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={67}
                style={{ width: "67%" }}
              />
              <span className="percent" style={{ right: "32%" }}>
                67
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
        </div>
      </div>
      {/* Skills Ends */}

      {/* Soft Skills Starts */}
      <div className="container skills">
        <div className="row">
          <div className="col-12">
            <h4 className="subtitle">
              {/*<span class="material-icons">download_done</span>*/}
              Soft Skills
            </h4>
          </div>
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Resolução de Problemas</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={93}
                style={{ width: "93%" }}
              />
              <span className="percent" style={{ right: "7%" }}>
                93%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Persistência</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={97}
                style={{ width: "97%" }}
              />
              <span className="percent" style={{ right: "3%" }}>
                97%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Aprendizado Contínuo</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={91}
                style={{ width: "91%" }}
              />
              <span className="percent" style={{ right: "9%" }}>
                91%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Comunicação assertiva</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={98}
                style={{ width: "98%" }}
              />
              <span className="percent" style={{ right: "2%" }}>
                98%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Gestão do Tempo</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={87}
                style={{ width: "87%" }}
              />
              <span className="percent" style={{ right: "13%" }}>
                87%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">Empatia</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={799}
                style={{ width: "99%" }}
              />
              <span className="percent" style={{ right: "1%" }}>
                99%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text ">Inteligência Emocional</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={94}
                style={{ width: "94%" }}
              />
              <span className="percent" style={{ right: "6%" }}>
                94%
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
          {/* Skill Bar Starts */}
          <div className="col-12 col-md-6">
            <span className="skill-text">Trabalho em Equipe</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={88}
                style={{ width: "88%" }}
              />
              <span className="percent" style={{ right: "12%" }}>
                88
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">Capacidade de trabalhar sob pressão</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={92}
                style={{ width: "92%" }}
              />
              <span className="percent" style={{ right: "8%" }}>
                92
                <span className="arrow" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="skill-text">Flexibilidade</span>
            <div className="chart-bar">
              <span
                className="item-progress"
                data-percent={84}
                style={{ width: "84%" }}
              />
              <span className="percent" style={{ right: "16%" }}>
                84
                <span className="arrow" />
              </span>
            </div>
          </div>
          {/* Skill Bar Ends */}
        </div>
      </div>
      {/* Soft Skills Ends */}
      {/* Fun Facts Starts */}
    </div>
  );
}
