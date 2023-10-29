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
      title: "5 Motivos para construir seu site com Nexts.JS! 🚀", 
      description: ''
    },
    {
      id: 2,
      image: "images/blog/blog-post-2.jpg",
      date: "9 Nov 2021",
      title: "Vantagens de usar TypeORM",
      description: ""
    },
    {
      id: 3,
      image: "images/blog/blog-post-3.jpg",
      date: "9 Nov 2021",
      title: "Por que usar o TypeORM?",
      description: ''
    },
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
              Blog do <span>Wilhams</span>
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
