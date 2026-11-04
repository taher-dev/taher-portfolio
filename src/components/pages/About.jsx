export default function About() {
  return (
    <article className="about active" data-page="about">
      <section className="hero-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            Building software across{' '}
            <em>web, mobile, and AR.</em>
          </h1>

          <div className="hero-text">
            <p>
              I’m Taher Mahmud Monmoy (Monmoy), a CSE graduate with experience in web,
              mobile, and Unity AR development. I’m currently focused on AI-driven
              development while working as an AR Developer Intern.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href="/assets/docs/Taher Mahmud Monmoy CV.pdf"
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
