import { useContext } from "react";
import { Context } from "../../context/context";
import SectionContainer from "../../layouts/SectionContainer";

const BlogDetails = ({ blog }) => {
  const { sectionToggle } = useContext(Context);
  const descriptionMarkup = () => {
    return {__html: blog?.description} 
  }
  return (
    <SectionContainer sectionName={"blog-content"}>
      {blog && (
        <div id="blog-content">
          <div className="container">
            <div className="row">
              <div className="col-12 post-container single-post-container">
                <a
                  href="#"
                  onClick={() => sectionToggle("blog")}
                  className="link-blog"
                  style={{
                    position: 'fixed',
                    right: '10px',
                    bottom: '10px',
                    backgroundColor: '#1f1515',
                    color: '#ffffff',
                    padding: '10px',
                    borderRadius: '5px'
                  }}

                >
                  <span className="material-icons">keyboard_arrow_left</span>{" "}
                  Back
                </a>

                <div className="meta d-inline-block">
                  <span>
                    <span className="material-icons">person</span> admin
                  </span>
                  <span className="date">
                    <span className="material-icons">date_range</span>{" "}
                    {blog.date}
                  </span>
                  <span>
                    <span className="material-icons">tag</span> {blog.tag}
                  </span>
                </div>
                <img src={blog.image} className="img-fluid" alt="Blog Post" />
                <h2 href="blog-post.html">{blog.title}</h2>
                <span dangerouslySetInnerHTML={descriptionMarkup()} /> 
                {/* Sobre dangerouslySetInnerHTML={descriptionMarkup()
                FAz com que o a string que vem formatada pelo JSON não se perca sua formatação, dessa forma o front não precisa formata-la */}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};
export default BlogDetails;
