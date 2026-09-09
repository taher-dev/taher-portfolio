import arrowicon from "../../assets/images/icon-top-right-arrow-light.svg";
import {
  experiences,
  education,
  leadership,
  awards,
  certifications,
  skills,
} from "../../data/resume";

// ── Icon components ─────────────────────────────────────────────────────────

const SkillsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase"
    aria-hidden="true"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const EducationIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M32 192 256 64l224 128-224 128L32 192z"
    />
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"
    />
  </svg>
);

const CommunityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AwardIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 256 256"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />
  </svg>
);

const CertIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18,10 C20.2091,10 22,11.7909 22,14 C22,15.0144 21.6224,15.9407 21,16.6458 L21,20.8382 C21,21.6559 20.1395,22.1878 19.4081,21.8221 L18,21.118 L16.5919,21.8221 C15.8605,22.1878 15,21.6559 15,20.8382 L15,16.6458 C14.3776,15.9407 14,15.0144 14,14 C14,11.7909 15.7909,10 18,10 Z M20,4 C21.1046,4 22,4.89543 22,6 L22,8 C22,8.55228 21.5523,9 21,9 C20.4477,9 20,8.55228 20,8 L20,6 L4,6 L4,18 L12,18 C12.5523,18 13,18.4477 13,19 C13,19.5523 12.5523,20 12,20 L4,20 C2.89543,20 2,19.1046 2,18 L2,6 C2,4.89543 2.89543,4 4,4 L20,4 Z M19,17.874 C18.6804,17.9562 18.3453,18 18,18 C17.6547,18 17.3196,17.9562 17,17.874 L17,19.382 L17.5528,19.1056 C17.8343,18.9648 18.1657,18.9648 18.4472,19.1056 L19,19.382 L19,17.874 Z M18,12 C16.8954,12 16,12.8954 16,14 C16,15.1046 16.8954,16 18,16 C19.1046,16 20,15.1046 20,14 C20,12.8954 19.1046,12 18,12 Z M9,13 C9.55228,13 10,13.4477 10,14 C10,14.51285 9.61395571,14.9355092 9.11662025,14.9932725 L9,15 L7,15 C6.44772,15 6,14.5523 6,14 C6,13.48715 6.38604429,13.0644908 6.88337975,13.0067275 L7,13 L9,13 Z M13,9 C13.5523,9 14,9.44772 14,10 C14,10.5523 13.5523,11 13,11 L7,11 C6.44772,11 6,10.5523 6,10 C6,9.44772 6.44772,9 7,9 L13,9 Z" />
  </svg>
);

// ── Reusable timeline section ─────────────────────────────────────────────────

function TimelineSection({ icon, title, children }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">{icon}</div>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className="timeline-list">{children}</ol>
    </section>
  );
}

// A timeline item with date positioned above title
function TimelineItem({ title, date, org, bullets }) {
  return (
    <li className="timeline-item">
      {date && <div className="timeline-date">{date}</div>}
      <h4 className="h4 timeline-item-title">{title}</h4>
      <p className="timeline-item-p">
        <span dangerouslySetInnerHTML={{ __html: org }} />
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="timeline-text">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

// A certification item where the entire card is clickable
function TimelineCertItem({ title, date, issuer, credUrl }) {
  const content = (
    <>
      {date && <div className="timeline-date">{date}</div>}
      <h4 className="h4 timeline-item-title">{title}</h4>
      <p className="timeline-item-p timeline-cert-issuer">
        <span>{issuer}</span>
        {credUrl && (
          <img
            className="timeline-item-icon"
            src={arrowicon}
            alt="external link icon"
          />
        )}
      </p>
    </>
  );

  return (
    <li className="timeline-item timeline-cert-item">
      {credUrl ? (
        <a
          href={credUrl}
          target="_blank"
          rel="noreferrer"
          className="timeline-cert-link"
        >
          {content}
        </a>
      ) : (
        <div className="timeline-cert-content">{content}</div>
      )}
    </li>
  );
}

// ── Resume page ───────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="shine-btn-wrapper">
        <a
          href="/assets/docs/Taher_Mahmud_Monmoy_Public_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-shine"
        >
          Download Taher's Full CV
        </a>
      </div>

      {/* Experience */}
      <TimelineSection icon={<BriefcaseIcon />} title="Experience">
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            org={item.org}
            bullets={item.bullets}
          />
        ))}
      </TimelineSection>

      <div className="separator" />

      {/* Skills & Technologies */}
      <section className="timeline skills-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <SkillsIcon />
          </div>
          <h3 className="h3">Skills & Technologies</h3>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-card">
              <h4 className="skill-card-title">{group.category}</h4>
              <ul className="skill-tag-list">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="skill-tag-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="separator" />

      {/* Education */}
      <TimelineSection icon={<EducationIcon />} title="Education">
        {education.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            org={item.org}
            bullets={item.bullets}
          />
        ))}
      </TimelineSection>

      <div className="separator" />

      {/* Leadership & Community */}
      <TimelineSection icon={<CommunityIcon />} title="Leadership & Community">
        {leadership.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            org={item.org}
            bullets={item.bullets}
          />
        ))}
      </TimelineSection>

      <div className="separator" />

      {/* Awards and Recognition */}
      <TimelineSection icon={<AwardIcon />} title="Awards and Recognition">
        {awards.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            org={item.org}
            bullets={item.bullets}
          />
        ))}
      </TimelineSection>

      <div className="separator" />

      {/* Certifications */}
      <TimelineSection icon={<CertIcon />} title="Certifications">
        {certifications.map((item, index) => (
          <TimelineCertItem
            key={index}
            title={item.title}
            date={item.date}
            issuer={item.issuer}
            credUrl={item.credUrl}
          />
        ))}
      </TimelineSection>
    </article>
  );
}

