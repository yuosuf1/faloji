const Resume = ({ active }) => {
  return (
    <>
      <article
        className={`resume glassy ${active ? "active" : ""}`}
        data-page="resume"
      >
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                University school of the film making
              </h4>
              <span>2007 — 2008</span>
              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                New york academy of directing
              </h4>
              <span>2006 — 2007</span>
              <p className="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                ossimus, omnis voluptas assumenda est omnis..
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                High school of recoding and directing.
              </h4>
              <span>2002 — 2004</span>
              <p className="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Creative director</h4>
              <span>2015 — Present</span>
              <p className="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et qvuas molestias
                exceptur.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Art director</h4>
              <span>2013 — 2015</span>
              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Film maker</h4>
              <span>2010 — 2013</span>
              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
          </ol>
        </section>
        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Video Directing</h5>
                <data value={80}>80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Video Editing</h5>
                <data value={70}>70%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value={90}>90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Idea creating</h5>
                <data value={50}>50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "50%" }} />
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};
export default Resume;
