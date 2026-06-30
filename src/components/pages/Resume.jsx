import pinicon from "../../assets/images/icon-pin-yellow.svg";
import arrowicon from "../../assets/images/icon-top-right-arrow-light.svg";

// ── Icon components ─────────────────────────────────────────────────────────

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

// A timeline item where the location is a plain text + pin icon
function TimelineItem({ title, date, org, location, bullets }) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">
        {title}
        <span>
          <ion-icon name="calendar-outline" />
          {date}
        </span>
      </h4>
      <p className="timeline-item-p">
        <span dangerouslySetInnerHTML={{ __html: org }} />
        <span>
          <img className="timeline-item-icon" src={pinicon} alt="pin icon" />
          {location}
        </span>
      </p>
      {bullets && bullets.length > 0 && (
        <>
          <br />
          <ul className="timeline-text">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

// A timeline item where the "location" is actually a credentials link
function TimelineCertItem({ title, date, issuer, credUrl, bullets }) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">
        {title}
        <span>
          <ion-icon name="calendar-outline" />
          {date}
        </span>
      </h4>
      <p className="timeline-item-p">
        {issuer}
        <a href={credUrl} target="_blank" rel="noreferrer">
          <img className="timeline-item-icon" src={arrowicon} alt="link icon" />
          Credentials
        </a>
      </p>
      {bullets && bullets.length > 0 && (
        <>
          <br />
          <ul className="timeline-text">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </>
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
        <TimelineItem
          title="Student Mentor"
          date="Feb 2026 - Present"
          org="Department of Artificial Intelligence and Data Science,<br/>Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "Mentored 45+ first-year students, providing academic, personal, and career guidance to support a smooth transition into university life.",
            "Conducted monthly mentoring sessions and monitored attendance and academic performance to identify and support at-risk students.",
          ]}
        />
        <TimelineItem
          title="Developer Intern"
          date="Jan 2026 - Present"
          org="Center of Excellence for Teaching and Learning (CETL),<br/>Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "Managed backend website operations through the admin dashboard, including content updates, event publication, and website maintenance.",
            "Maintained and organized website content to ensure accurate and timely publication of CETL programs and events.",
          ]}
        />
        <TimelineItem
          title="Intern"
          date="Sep 2025 - Present"
          org="Center for Career Development (CCD),<br/>Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "Supported planning and promotion of 5+ career workshops, enhancing student engagement and employability skills.",
            "Built and maintained a structured database of 200+ alumni profiles to support career placement and networking initiatives.",
          ]}
        />
      </TimelineSection>

      {/* Education */}
      <TimelineSection icon={<EducationIcon />} title="Education">
        <TimelineItem
          title="Bachelor of Science in Computer Science and Engineering"
          date="Oct 2022 - Present"
          org="Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "CGPA: 3.77/4.00",
            "Fundamental Courses: ML, AI, Information System and Design, Cyber Security, Networking, Operating System, DSA, Object Oriented Programming, Database Management System, Computer Architecture, Web Programming.",
            "Additional Courses: Engineering Economics, Engineering Drawing.",
          ]}
        />
      </TimelineSection>

      {/* Awards and Leadership */}
      <TimelineSection icon={<AwardIcon />} title="Awards and Leadership">
        <TimelineItem
          title="Vice Chancellor's Certificate for Academic Excellence"
          date="2022, 2024, 2026"
          org="Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "Awarded 3 times (Fall 2022, Fall 2024, Spring 2026) for outstanding academic performance; presented by the Vice Chancellor of Green University of Bangladesh.",
          ]}
        />
        <TimelineItem
          title="Dean's Certificate"
          date="2025"
          org="Green University of Bangladesh"
          location="Dhaka, Bangladesh"
          bullets={[
            "Awarded (Fall 2025) for outstanding academic performance; presented by the Dean of Green University of Bangladesh.",
          ]}
        />
      </TimelineSection>

      {/* Certifications */}
      <TimelineSection icon={<CertIcon />} title="Certifications">
        <TimelineCertItem
          title="5-Day AI/ML/IoT Bootcamp"
          date="Nov 2025"
          issuer="Bondstein Technologies Limited"
          credUrl="https://drive.google.com/file/d/1fatOrNZWd28fhQYzni7XSsMaNzrtqRPm/view?usp=drive_link"
          bullets={[
            "Covered AI/ML/DL fundamentals with hands-on focus on CNNs and the full YOLO training pipeline.",
            "Built a custom YOLO object detection model using Roboflow; deployed on a Jetson Nano edge device",
          ]}
        />
        <TimelineCertItem
          title="Master Git and Github – Beginner to Expert"
          date="Jul 2024"
          issuer="Udemy - Instructor: Anisul Islam"
          credUrl="https://www.udemy.com/certificate/UC-0446049b-6fe4-4b5b-b1a7-1daa7c9a0053/"
          bullets={[
            "Gained hands-on experience with 20+ Git commands including repository setup, branching, merging, and conflict resolution",
            "Practiced collaborative workflows using pull requests, issue tracking, and version control for projects.",
          ]}
        />
        <TimelineCertItem
          title="Career Essentials in Generative AI"
          date="Apr 2024"
          issuer="Microsoft and LinkedIn"
          credUrl="https://www.linkedin.com/learning/certificates/a08138935eac8e5b7a055cf588be52a9046dc55bf70a8e2c21e5240143e15b65?trk=share_certificate"
          bullets={[
            "Developed foundational understanding of Generative AI concepts, applications, and ethical considerations in real-world scenarios.",
            "Applied AI-powered tools such as Microsoft Copilot to enhance productivity, research, and problemsolving workflows.",
          ]}
        />
      </TimelineSection>
    </article>
  );
}
