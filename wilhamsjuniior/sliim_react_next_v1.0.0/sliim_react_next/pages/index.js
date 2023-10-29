import Head from "next/head";
import { Fragment } from "react";

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

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark", "image");
  });

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

      <Layout>
        <SectionContainer sectionName={"home"}>
          <div className="home-content">
            {/* Background Dotted Pattern Starts */}
            <HeroContent />
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
                meu <span>portfólio</span>
              </h2>
            </div>
            <h2 className="heading text-left text-md-center"><a href="https://github.com/wilhamsJW" target="_blank" rel="noopener noreferrer">Github</a></h2>
            {/* <PortfolioIsotope />
            Aqui que aparece os itens do porfolio que precisa corrigir */}
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
    </Fragment>
  );
};
export default Index;

/**
 * para criar uma postagerm
 * 
 * o q é isso? rel="noopener noreferrer" q fica dentro de uma tag a?
ChatGPT
A adição de rel="noopener noreferrer" em um link <a> é uma prática recomendada em termos de segurança e privacidade ao abrir links em uma nova janela. Vamos entender o significado de cada parte:

noopener: Isso impede que a nova página acesse o objeto window.opener e, assim, impeça possíveis ataques de phishing que poderiam ter acesso a janelas abertas anteriormente.

noreferrer: Isso garante que o navegador não envie o cabeçalho HTTP Referer para o site vinculado. O cabeçalho Referer normalmente informa ao site que você estava navegando antes de chegar a esse link. O uso de noreferrer ajuda a proteger a privacidade do usuário, garantindo que o site vinculado não tenha acesso a informações adicionais sobre a origem do tráfego.

Portanto, ao adicionar rel="noopener noreferrer" a um link, você está tomando medidas para proteger a privacidade e a segurança do usuário ao abrir links em uma nova janela. É uma prática recomendada em aplicações da web para garantir a melhor experiência e segurança do usuário.
 */
