export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Taher</h2>
      </header>

      <section className="about-text">
        <p>
          I am currently pursuing my Bachelor's degree in Computer Science
          and Engineering at Green University of Bangladesh.
        </p>
        <p>
          As a UI/UX enthusiast, aspiring to become a Full Stack Web
          Developer, I am deeply invested in crafting user-friendly and
          visually appealing digital experiences.
        </p>
        <p>
          Beyond my academic pursuits, I enjoy learning about new
          technologies and spending time on photography, which helps me
          capture everyday moments. I am always looking for ways to improve
          my skills and learn more about the fields I am interested in.
        </p>
      </section>

      <a
        href="/assets/docs/Taher_Mahmud_Monmoy_Public_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className="about_btn-shine"
      >
        Download Taher's Full CV
      </a>
    </article>
  )
}
