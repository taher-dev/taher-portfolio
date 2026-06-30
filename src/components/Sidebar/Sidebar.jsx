import { useState } from 'react'
import ProfileModal from '../Modal/ProfileModal'

// Social SVG icons
const GitHubIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
    strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedInIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
    strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
    height="18px" width="18px" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 2H9.5C7.57 2 6 3.57 6 5.5V8H3.5v3H6v5.5h3v-5.5h2.5L12 8H9V5.5c0-.83.67-1.5 1.5-1.5h1" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
    height="18px" width="18px" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="14" height="14" rx="4" />
    <circle cx="9" cy="9" r="3" />
    <circle cx="12.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const socials = [
  { title: 'GitHub: @taher-dev',            href: 'https://github.com/taher-dev',                          Icon: GitHubIcon   },
  { title: 'LinkedIn: @taher-mahmud-monmoy', href: 'https://www.linkedin.com/in/taher-mahmud-monmoy/',      Icon: LinkedInIcon },
  { title: 'Facebook: @taher-mahmud-monmoy', href: 'https://www.facebook.com/monmoyzx',                     Icon: FacebookIcon },
  { title: 'Instagram: @_red_uzumaki_',       href: 'https://www.instagram.com/_red_uzumaki_/',             Icon: InstagramIcon},
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside className={`sidebar${expanded ? ' active' : ''}`}>
      <div className="sidebar-info">
        {/* Avatar — ProfileModal renders the <figure> and the modal itself */}
        <ProfileModal />

        <div className="info-content">
          <h1 className="name" title="Taher Mahmud">Taher Mahmud</h1>
          <p className="title">Front-End Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setExpanded(e => !e)}
          aria-label="Show contacts"
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Dhaka, Bangladesh</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:monmoyzx@gmail.com" className="contact-link hov-yellow">
                monmoyzx@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+8801868983398" className="contact-link hov-yellow">
                +880 1868-983398
              </a>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          {socials.map(({ title, href, Icon }) => (
            <li key={title} className="social-item">
              <a title={title} href={href} target="_blank" rel="noreferrer" className="social-link">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
