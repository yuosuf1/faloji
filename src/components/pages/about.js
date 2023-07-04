import actor from "./svg/actor.svg";
import film from "./svg/film.svg";
import camera from "./svg/camera.svg";
import collaboration from "./svg/collaboration.svg";

const About = ({ active }) => {
  return (
    <>
      <article
        className={`about glassy ${active ? "active" : ""}`}
        data-page="about"
      >
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            Ibrahim Al-Faloji, Video Director, specializing in captivating
            visual storytelling. Experienced in short films, music videos,
            commercials, and more. Passionate about engaging and inspiring
            audiences.
          </p>
          <p>
            My journey as a Video Director has taken me across a wide range of
            projects, including short films, documentaries, music videos,
            commercials, and corporate videos. Each project has been an
            opportunity for me to explore new ideas, push creative boundaries,
            and collaborate with talented individuals to deliver exceptional
            visual experiences.
          </p>
        </section>
        {/*
          - service
        */}
        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={film} alt="film icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Video Production and Direction
                </h4>
                <p className="service-item-text">
                  Comprehensive services covering concept to final production.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={actor} alt="actor icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Creative Storytelling</h4>
                <p className="service-item-text">
                  Captivating narratives and visual storytelling for impactful
                  videos.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={camera} alt="camera icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Cinematography and Visual Aesthetics
                </h4>
                <p className="service-item-text">
                  Creating visually stunning videos with meticulous attention to
                  aesthetics.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={collaboration} alt="Collaboration icon" width={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Collaborative Approach
                </h4>
                <p className="service-item-text">
                  Working closely with clients to bring their vision to life.
                  level.
                </p>
              </div>
            </li>
          </ul>
        </section>
        {/*
          - testimonials
        */}
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-1.png"
                    alt="Yousif Raad"
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Yousif Raad.
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam neque id interdum feugiat. Duis maximus elit ac
                    augue dapibus, sed placerat sem feugiat. Vestibulum aliquet
                    ipsum in ligula vehicula, ut efficitur elit bibendum.
                  </p>
                </div>
              </div>
            </li>
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-2.png"
                    alt="Moahmmed Ahmed."
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Moahmmed Ahmed.
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam neque id interdum feugiat. Duis maximus elit ac
                    augue dapibus, sed placerat sem feugiat. Vestibulum aliquet
                    ipsum in ligula vehicula, ut efficitur elit bibendum.
                  </p>
                </div>
              </div>
            </li>
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-3.png"
                    alt="Ahmed Mohammed."
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Ahmed Mohammed.
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam neque id interdum feugiat. Duis maximus elit ac
                    augue dapibus, sed placerat sem feugiat. Vestibulum aliquet
                    ipsum in ligula vehicula, ut efficitur elit bibendum.
                  </p>
                </div>
              </div>
            </li>
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-4.png"
                    alt="Zaid Ali."
                    width={60}
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Zaid Ali.
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam neque id interdum feugiat. Duis maximus elit ac
                    augue dapibus, sed placerat sem feugiat. Vestibulum aliquet
                    ipsum in ligula vehicula, ut efficitur elit bibendum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/*
          - testimonials modal
        */}
        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay />
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline" />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width={80}
                  data-modal-img
                />
              </figure>
              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/*
          - clients
        */}
        <section className="clients">
          <h3 className="h3 clients-title">Partners</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="/">
                <img src="./assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default About;
