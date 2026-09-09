import { useState } from "react";
import { projects } from "../../data/projects";

const CATEGORIES = ["all", "web", "software", "cli", "others"];
const PER_PAGE = 9;

function label(cat) {
  return cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [selectOpen, setSelectOpen] = useState(false);
  const [fading, setFading] = useState(false);

  const sortedProjects = [...projects].reverse();

  const filtered =
    filter === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (cat) => {
    setFilter(cat);
    setPage(1);
    setSelectOpen(false);
  };

  const changePage = (newPage) => {
    setFading(true);
    setTimeout(() => {
      setPage(newPage);
      setFading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop filter buttons */}
        <ul className="filter-list">
          {CATEGORIES.map((cat) => (
            <li key={cat} className="filter-item">
              <button
                className={filter === cat ? "active" : ""}
                onClick={() => handleFilter(cat)}
              >
                {label(cat)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile dropdown select */}
        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? " active" : ""}`}
            onClick={() => setSelectOpen((o) => !o)}
          >
            <div className="select-value">{label(filter)}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>

          <ul className="select-list">
            {CATEGORIES.map((cat) => (
              <li key={cat} className="select-item">
                <button onClick={() => handleFilter(cat)}>{label(cat)}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project grid */}
        <ul
          id="project-list"
          className={`project-list${fading ? " fade-out" : ""}`}
        >
          {visible.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
              >
                <figure className="project-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  {project.tags && project.tags.length > 0 && (
                    <ul className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <li key={idx} className="project-tag-pill">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination" id="pagination">
            <button
              className={`page-btn${page === 1 ? " disabled" : ""}`}
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn${page === i + 1 ? " active" : ""}`}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={`page-btn${page === totalPages ? " disabled" : ""}`}
              disabled={page === totalPages}
              onClick={() => changePage(page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </article>
  );
}
