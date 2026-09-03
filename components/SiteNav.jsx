import Link from "next/link";

// Barra de navegación + panel móvil. Los ids se conservan del HTML original
// para que SiteEffects pueda engancharse (burger, scroll, etc.).
export default function SiteNav({ dict, variant = "home" }) {
  const { nav, homeHref, contactHref, otherLangHref, lang } = dict;

  // En páginas que no son la home, los anclas apuntan a la home + hash.
  const anchor = (hash) => (variant === "home" ? hash : `${homeHref}${hash}`);

  return (
    <>
      {variant === "home" && (
        <>
          <div id="trail">
            <div id="trail-fill" />
          </div>
          <div className="trail-rail">
            <div className="trail-marker" id="trailMarker">
              <i
                className="bi bi-tree-fill"
                style={{ fontSize: ".6rem", color: "#7C9473" }}
              />
            </div>
          </div>
        </>
      )}

      <nav
        className={`nav-nature${variant === "contact" ? " scrolled" : ""}`}
        id="mainNav"
      >
        <div className="container-nature">
          <Link href={homeHref} className="nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo.png" alt="El Paso del Perezoso" />
            <span>El Paso del Perezoso</span>
          </Link>

          <ul className="nav-links">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={anchor(l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="lang-pill">
              {lang === "es" ? (
                <>
                  <Link href={homeHref} className="active" aria-label="Español">
                    🇪🇸 ES
                  </Link>
                  <Link href={otherLangHref} aria-label="English">
                    EN 🇬🇧
                  </Link>
                </>
              ) : (
                <>
                  <Link href={otherLangHref} aria-label="Spanish">
                    🇪🇸 ES
                  </Link>
                  <Link href={homeHref} className="active" aria-label="English">
                    EN 🇬🇧
                  </Link>
                </>
              )}
            </div>
            <Link href={contactHref} className="btn-reserva-nav">
              {nav.cta}
            </Link>
            <button
              className="burger"
              id="burgerBtn"
              aria-label={nav.menuLabel}
              aria-expanded="false"
            >
              <span className="burger-lines">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-panel" id="mobilePanel">
        <a href={anchor("#home")} data-close>
          {nav.home}
        </a>
        {nav.links.map((l) => (
          <a key={l.href} href={anchor(l.href)} data-close>
            {l.label}
          </a>
        ))}
        <Link href={contactHref} className="btn-reserva-nav">
          {nav.cta}
        </Link>
      </div>
    </>
  );
}
