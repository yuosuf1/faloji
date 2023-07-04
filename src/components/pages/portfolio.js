import bg1 from "./img/bg-1.jpg";
import bg2 from "./img/bg-2.png";
import bg3 from "./img/bg-3.png";
import { EyeOutline } from "react-ionicons";

const Portfolio = ({ active }) => {
  return (
    <>
      <article
        className={`portfolio glassy ${active ? "active" : ""}`}
        data-page="portfolio"
      >
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <section className="projects">
          <ul className="project-list">
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline
                      color={"#bb9206"}
                      title={""}
                      height="25px"
                      width="25px"
                    />
                  </div>
                  <img src={bg1} alt="finance" loading="lazy" />
                </figure>
                <h3 className="project-title">Finance</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline
                      color={"#bb9206"}
                      title={""}
                      height="25px"
                      width="25px"
                    />
                  </div>
                  <img src={bg2} alt="orizon" loading="lazy" />
                </figure>
                <h3 className="project-title">Orizon</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline
                      color={"#bb9206"}
                      title={""}
                      height="25px"
                      width="25px"
                    />
                  </div>
                  <img src={bg3} alt="fundo" loading="lazy" />
                </figure>
                <h3 className="project-title">Fundo</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Portfolio;
