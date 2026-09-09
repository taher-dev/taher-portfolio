export default function About({ setActivePage }) {
  return (
    <article className="about active" data-page="about">
      <section className="hero-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            Building software across{' '}
            <em>web, mobile, AR, and games.</em>
          </h1>

          <div className="hero-text">
            <p>
              I’m Taher Mahmud Monmoy, a CSE student with hands-on experience in
              web, mobile, and Unity game development. I’m currently focusing on AI driven
              development while working as a AR / Game Developer Intern.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href="/assets/docs/Taher_Mahmud_Monmoy_Public_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-shiny"
            >
              <span className="shiny-text">
                <span>View CV</span>
                <span className="btn-arrow">↗</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}
