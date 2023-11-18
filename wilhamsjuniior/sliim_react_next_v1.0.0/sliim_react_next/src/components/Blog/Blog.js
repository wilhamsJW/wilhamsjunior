import React, { Fragment, useContext, useState } from "react";
import { Context } from "../../context/context";
import SectionContainer from "../../layouts/SectionContainer";
import BlogDetails from "./BlogDetails";

export default function Blog() {
  /**As imagens devem ter 820x423 */
  const blogDatas = [
    {
      id: 1,
      image: "images/blog/blog-post-1.jpg",
      date: "9 Nov 2021",
      tag: "nextjs, react, frontend",
      title: "5 Motivos para construir seu site com Nexts.JS! 🚀", 
      description: `
      <p>
      <br/><br/>
      1 - Renderização no lado do servidor (SSR):
      Next.js oferece renderização no lado do servidor, resultando em páginas mais rápidas e uma melhor experiência do usuário.
      <br/><br/>
      2 - Roteamento simples e dinâmico:
      Com o roteamento dinâmico, você pode facilmente criar páginas dinâmicas com URLs amigáveis para SEO.
      <br/><br/>
      3 - Suporte a React e outras bibliotecas:
      Next.js é compatível com React, bem como com outras bibliotecas populares, permitindo a criação de aplicativos poderosos.
      <br/><br/>
      4 - Construído para performance:
      Next.js tem recursos embutidos para otimização de desempenho, como carregamento de dados paralelo e pré-renderização, garantindo uma experiência de usuário rápida e fluida.
      <br/><br/>
      5 - Suporte a API integrada:
      Com o suporte a API integrada, Next.js torna mais fácil criar APIs RESTful ou GraphQL diretamente dentro do aplicativo.
      <br/><br/>
      #react #next #nextjs #front #frontend #programacao #desenvolvimento
  </p>
      `
    },
    {
      id: 2,
      image: "images/blog/blog-post-2.jpg",
      date: "9 Out 2021",
      tag: "orm, banco de dados",
      title: "Vantagens de usar TypeORM",
      description: `<ul>
      <li>
          <p><strong>Produtividade:</strong> O TypeORM permite que você trabalhe com bancos de dados relacionais usando código JavaScript/TypeScript, aproveitando os recursos da linguagem e fornecendo uma API intuitiva e amigável. Isso pode aumentar significativamente sua produtividade como desenvolvedor.</p>
      </li>
      <li>
          <p><strong>Mapeamento automático de objetos:</strong> O TypeORM mapeia automaticamente as tabelas do banco de dados para entidades (classes) em seu código, facilitando o acesso e manipulação de dados. Você não precisa escrever consultas SQL manualmente, pois o TypeORM se encarrega disso.</p>
      </li>
      <li>
          <p><strong>Suporte a diferentes bancos de dados:</strong> O TypeORM suporta uma variedade de bancos de dados relacionais, incluindo MySQL, PostgreSQL, SQLite, SQL Server, Oracle e outros. Isso proporciona flexibilidade para desenvolver aplicativos em diferentes ambientes de banco de dados.</p>
      </li>
      <li>
          <p><strong>Gerenciamento de relacionamentos:</strong> O TypeORM oferece recursos avançados para gerenciamento de relacionamentos entre entidades, como relacionamentos um-para-um, um-para-muitos e muitos-para-muitos. Isso simplifica a modelagem de dados complexa e evita a necessidade de escrever consultas complexas para recuperar dados relacionados.</p>
      </li>
      <li>
          <p><strong>Migrações de banco de dados:</strong> O TypeORM facilita a criação e aplicação de migrações de banco de dados. Você pode versionar e controlar as alterações no esquema do banco de dados, tornando mais fácil e seguro manter a estrutura do banco de dados em sincronia com o código da aplicação.</p>
      </li>
      <li>
          <p><strong>Validação de dados:</strong> O TypeORM fornece recursos de validação de dados integrados, permitindo que você defina regras de validação nas entidades. Isso ajuda a garantir a integridade dos dados armazenados no banco de dados.</p>
      </li>
      <li>
          <p><strong>Suporte a transações:</strong> O TypeORM suporta transações, permitindo que você execute operações relacionadas ao banco de dados de forma atômica. Isso é útil quando você precisa garantir que várias operações ocorram como uma unidade lógica e que todas sejam bem-sucedidas ou nenhuma delas seja executada.</p>
      </li>
  </ul>
  <p>Essas são apenas algumas das vantagens do uso do TypeORM. Ele é amplamente adotado e possui uma comunidade ativa, o que significa que você pode encontrar recursos, suporte e exemplos de uso facilmente.</p>
  <p>#typeorm #backend #backenddeveloper #otimização #node #sqlserver</p>
  `
    },
    {
      id: 3,
      image: "images/blog/blog-post-3.jpg",
      date: "9 Nov 2021",
      tag: "orm, banco de dados",
      title: "Por que usar o TypeORM?",
      description: `<ul>
      <li>
          <p><strong>TypeORM é um ORM (Object-Relational Mapping)</strong> que permite mapear objetos em bancos de dados relacionais. Ao definir entidades no TypeORM, você está criando representações das tabelas do banco de dados como classes no seu código.</p>
      </li>
      <li>
          <p>Quando você utiliza as entidades do TypeORM para acessar os dados, o framework se encarrega de fazer as consultas no banco de dados e mapear os resultados de forma automática para objetos do seu código.</p>
      </li>
      <li>
          <p>Isso é possível graças ao mecanismo de lazy loading (carregamento tardio) e ao uso de proxies. Quando você acessa uma propriedade de uma entidade, o TypeORM intercepta essa chamada e realiza a consulta correspondente no banco de dados. Em seguida, ele preenche os dados retornados na instância da entidade e retorna o resultado.</p>
      </li>
      <li>
          <p>Esse processo ocorre de forma transparente para você como desenvolvedor. Você pode simplesmente trabalhar com as entidades como objetos normais, sem se preocupar com as consultas SQL subjacentes.</p>
      </li>
      <li>
          <p>Além disso, o TypeORM também fornece recursos como relacionamentos entre entidades, validação de dados, suporte a transações e muito mais.</p>
      </li>
      <li>
          <p>Vale ressaltar que o TypeORM pode ser configurado para trabalhar com diferentes bancos de dados relacionais, como MySQL, PostgreSQL, SQLite e outros.</p>
      </li>
      <li>
          <p>Em resumo, o TypeORM facilita o acesso aos dados do banco de dados, mapeando automaticamente as entidades do seu código para as tabelas correspondentes. Isso simplifica o desenvolvimento, aumenta a produtividade e mantém um código mais legível e orientado a objetos.</p>
      </li>
  </ul>
  <p>#typeorm #backend #backenddeveloper #otimização #node #sqlserver</p>
  `
    },
    {
      id: 4,
      image: "images/blog/blog-post-3.jpg",
      date: "01 Nov 2023",
      tag: "seo, otimização",
      title: "Você conhece o uso da tag meta e a importãncia dela para o rankeamento do seu site?",
      description: `<div>
      <p><strong>As tags do cabeçalho <strong>&lt;meta name="description" content="..."&gt;</strong> são usadas para fornecer uma descrição concisa do conteúdo de uma página da web.</strong></p>
      <p><strong>Essas descrições podem influenciar como os mecanismos de busca, como o Google, exibem e classificam o seu site nos resultados de pesquisa.</strong></p>
      <p><em>Embora essas tags não afetem diretamente o ranking nos mecanismos de busca, elas podem influenciar a taxa de cliques (CTR) e a experiência do usuário quando o seu site aparece nos resultados de pesquisa.</em></p>
      <p>A <strong>meta tag de descrição</strong> é uma das maneiras pelas quais você pode <em>otimizar seu site para mecanismos de busca</em>.</p>
      <p>Ao criar uma <strong>meta descrição</strong>, é importante incluir palavras-chave relevantes que os usuários do Google possam pesquisar para encontrar o seu site.</p>
      <p>No entanto, é essencial que a descrição seja <em>informativa, relevante e atraente para os usuários</em>, para que eles se sintam incentivados a clicar no seu link nos resultados de pesquisa.</p>
      <p>Certifique-se de que a descrição seja <strong>clara, concisa e reflita com precisão o conteúdo da página correspondente</strong>.</p>
      <p>Além disso, <em>evite o preenchimento de palavras-chave</em> e certifique-se de que a descrição seja escrita de forma <strong>natural e envolvente para os usuários</strong>.</p>
      <p>Isso pode ajudar a aumentar a <span style='color: blue;'>visibilidade e a relevância</span> do seu site nos resultados de pesquisa do Google.</p>
  </div>
  `
    },
    {
      id: 4,
      image: "images/blog/blog-post-3.jpg",
      date: "02 Nov 2023",
      tag: "seo, otimização, sitemaps",
      title: "Porque um sitemaps fará teu site vender mais e estar melhor rankeado?",
      description: `<div>
      <p>O sitemap do Next.js é uma funcionalidade que permite gerar um mapa do site (sitemap) de forma automatizada para otimização de mecanismos de busca (SEO). O pacote <strong>next-sitemap</strong> é uma extensão que facilita a criação de um sitemap para um aplicativo Next.js.</p>
    
      <p>No código que você forneceu, <strong>siteUrl</strong> é a URL base do seu site. Se a variável de ambiente <strong>SITE_URL</strong> estiver definida, o valor será obtido a partir dela. Caso contrário, será usado o valor padrão "https://example.com".</p>
    
      <p>A opção <strong>generateRobotsTxt</strong> indica se você deseja gerar um arquivo <strong>robots.txt</strong> automaticamente ou não. O <strong>robots.txt</strong> é um arquivo de texto que informa aos mecanismos de busca quais partes do seu site devem ser rastreadas ou não.</p>
    
      <p>Para utilizar o <strong>next-sitemap</strong>, você precisa configurar o arquivo <strong>next.config.js</strong> no diretório raiz do seu projeto Next.js. Após configurar o arquivo <strong>next.config.js</strong> com as opções apropriadas, você pode executar o comando de construção ou implantação padrão do Next.js, e o sitemap será gerado automaticamente de acordo com as configurações fornecidas. Isso ajuda os mecanismos de busca a entender melhor a estrutura do seu site e indexar suas páginas de forma mais eficiente.</p>
    </div>
    
  `
    }
  ];
  const { sectionToggle } = useContext(Context);
  const [blog, setBlog] = useState(null);
  const blogDetailsOpen = (blog) => {
    sectionToggle("blog-content");
    setBlog(blog);
  };
  return (
    <Fragment>
      <SectionContainer sectionName={"blog"}>
        <div id="blog-content">
          {/* Heading Starts */}
          <div className="heading text-left text-md-center">
            <h2>
              Blog do <span>Wilhams Júnior</span>
            </h2>
          </div>
          {/* Heading Ends */}
          {/* Latest Posts Starts */}
          <div className="container">
            <div className="row">
              {/* Single Post Starts */}
              {blogDatas.map((blog) => (
                <div className="col-12 post-container" key={blog.id}>
                  <div className="post-thumb">
                    <a
                      href="#"
                      onClick={() => blogDetailsOpen(blog)}
                      className="d-block"
                    >
                      <img
                        src={blog.image}
                        className="img-fluid"
                        alt="Blog Post"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-date d-none d-sm-flex">
                      {blog.date
                        .split(" ")
                        .map(
                          (date, i) => i !== 2 && <span key={i}>{date}</span>
                        )}
                    </div>
                    <div className="entry-header">
                      <a href="#" onClick={() => blogDetailsOpen(blog)}>
                        {blog.title}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* Single Post Ends */}
            </div>
            {/* <div className="row">
          <div className="col-12 text-center">
            <a href="blog.html" className="btn main-btn allposts">
              <span>all posts</span>
            </a>
          </div>
        </div> */}
          </div>
          {/* Latest Posts Ends */}
        </div>
      </SectionContainer>
      <BlogDetails blog={blog} />
    </Fragment>
  );
}
