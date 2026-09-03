import Link from "next/link";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import SiteEffects from "./SiteEffects";
import Lightboxes from "./Lightboxes";
import {
  cabinPhotos,
  plantaAltaPhotos,
  plantaBajaPhotos,
  galleryImages,
  MAPS_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/images";

function bg(src) {
  return { backgroundImage: `url('${src}')` };
}

function ThumbGrid({ modal, images, indices }) {
  return (
    <div className="floor-thumb-grid mb-3">
      {indices.map((idx) => (
        <div
          key={idx}
          className="floor-thumb lightbox-trigger"
          data-modal={modal}
          data-index={idx}
          style={bg(images[idx])}
        />
      ))}
    </div>
  );
}

function FloorPanel({ id, active, includesTitle, includes, groups, modal, images }) {
  return (
    <div className={`floor-panel${active ? " active" : ""}`} id={id}>
      <div className="row gy-4">
        <div className="col-lg-4">
          <div className="card-nature p-4 h-100">
            <h3 className="floor-group-title" style={{ marginTop: 0 }}>
              {includesTitle}
            </h3>
            <ul className="floor-feature-list">
              {includes.map((it, i) => (
                <li key={i}>
                  <i className="bi bi-check-circle-fill" /> {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-8">
          {groups.map((g, i) => (
            <div key={i}>
              <div
                className="floor-group-title"
                style={i === 0 ? { marginTop: 0 } : undefined}
              >
                {g.title}
              </div>
              <ThumbGrid modal={modal} images={images} indices={g.indices} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ dict }) {
  const d = dict;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      <SiteNav dict={d} variant="home" />

      <main>
        {/* HERO */}
        <header
          className="hero hero-responsive"
          id="home"
          style={bg("/assets/FONDOLARGOp_edit_194269342035838.png")}
        >
          <div className="container-nature hero-content">
            <h1>
              {d.hero.title[0]}
              <br />
              {d.hero.title[1]}
            </h1>
            <p className="hero-sub">{d.hero.sub}</p>
            <div className="hero-ctas">
              <Link href={d.contactHref} className="btn-primary-nature">
                <i className="bi bi-calendar-check" /> {d.hero.ctaPrimary}
              </Link>
              <a href="#caracteristicas" className="btn-ghost-nature">
                <i className="bi bi-house-door" /> {d.hero.ctaSecondary}
              </a>
            </div>
            <div className="hero-facts">
              {d.hero.facts.map((f, i) => (
                <span key={i}>
                  <i className={`bi ${f.icon}`} /> {f.label}
                </span>
              ))}
            </div>
          </div>
          <div className="scroll-cue">
            <i className="bi bi-chevron-down" />
          </div>
        </header>

        {/* SOBRE */}
        <section id="sobre">
          <div className="container-nature">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7 reveal">
                <span className="about-badge">
                  <i className="bi bi-journal-text" /> {d.about.badge}
                </span>
                <h2 className="section-title">{d.about.title}</h2>
                <p className="section-lead">{d.about.lead}</p>
              </div>
              <div className="col-lg-5 reveal">
                <div className="card-nature p-4">
                  <div className="floor-group-title">{d.about.glanceTitle}</div>
                  <ul className="floor-feature-list">
                    {d.about.glance.map((g, i) => (
                      <li key={i}>
                        <i className={`bi ${g.icon}`} /> {g.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOTOS DE LA CABAÑA */}
        <section id="fotos" className="section-alt">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.photos.eyebrow}
              </span>
              <h2 className="section-title">{d.photos.title}</h2>
              <p className="section-lead mx-auto">{d.photos.lead}</p>
            </div>

            <div className="row gy-4 align-items-center reveal">
              <div className="col-lg-4">
                <div className="card-nature p-4 photo-intro-card h-100">
                  <div className="floor-group-title" style={{ marginTop: 0 }}>
                    {d.photos.cardTitle}
                  </div>
                  <h3 className="photo-intro-title">{d.photos.cardHeading}</h3>
                  <p className="photo-intro-text">{d.photos.cardText}</p>
                  <div className="photo-intro-badges">
                    {d.photos.badges.map((b, i) => (
                      <span key={i}>
                        <i className={`bi ${b.icon}`} /> {b.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="floor-thumb-grid photo-preview-grid">
                  {cabinPhotos.map((src, i) => (
                    <div
                      key={i}
                      className={`floor-thumb lightbox-trigger${
                        i === 0 ? " photo-thumb-wide" : ""
                      }`}
                      data-modal="modalCabinPhotos"
                      data-index={i}
                      style={bg(src)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARACTERÍSTICAS */}
        <section id="caracteristicas" className="section-alt">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.features.eyebrow}
              </span>
              <h2 className="section-title">{d.features.title}</h2>
              <p className="section-lead mx-auto">{d.features.lead}</p>
            </div>

            <div className="text-center reveal">
              <div className="floor-tabs" role="tablist">
                <button
                  className="floor-tab active"
                  data-floor="baja"
                  role="tab"
                  aria-selected="true"
                >
                  {d.features.tabs.baja}
                </button>
                <button
                  className="floor-tab"
                  data-floor="alta"
                  role="tab"
                  aria-selected="false"
                >
                  {d.features.tabs.alta}
                </button>
              </div>
            </div>

            <FloorPanel
              id="panel-alta"
              active={false}
              includesTitle={d.features.includesTitle}
              includes={d.features.alta.includes}
              groups={d.features.alta.groups}
              modal="modalPlantaAlta"
              images={plantaAltaPhotos}
            />
            <FloorPanel
              id="panel-baja"
              active
              includesTitle={d.features.includesTitle}
              includes={d.features.baja.includes}
              groups={d.features.baja.groups}
              modal="modalPlantaBaja"
              images={plantaBajaPhotos}
            />
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.gallery.eyebrow}
              </span>
              <h2 className="section-title">{d.gallery.title}</h2>
              <p className="section-lead mx-auto">{d.gallery.lead}</p>
            </div>

            <div className="filter-row justify-content-center reveal">
              {d.gallery.filters.map((f) => (
                <button
                  key={f.key}
                  className={`filter-pill${f.key === "all" ? " active" : ""}`}
                  data-filter={f.key}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="gallery-grid reveal" id="galleryGrid">
              {galleryImages.map((g) => (
                <div
                  key={g.index}
                  className="gallery-item"
                  data-cat={g.cat}
                  data-index={g.index}
                  style={bg(g.src)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DETALLES / SERVICIOS */}
        <section id="detalles" className="section-alt">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.details.eyebrow}
              </span>
              <h2 className="section-title">{d.details.title}</h2>
            </div>

            <div className="row gy-4 reveal-stagger reveal">
              {d.details.cards.map((c, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="card-nature amenity-card">
                    <div className="amenity-icon">
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <h3>{c.title}</h3>
                    <ul>
                      {c.items.map((it, j) => (
                        <li key={j}>
                          <i className={`bi ${it.icon}`} /> {it.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NO INCLUIDOS */}
        <section className="section-canopy" id="no-incluidos">
          <div className="container-nature">
            <div className="section-head reveal">
              <span className="eyebrow">{d.notIncluded.eyebrow}</span>
              <h2 className="section-title">{d.notIncluded.title}</h2>
            </div>
            <div className="row reveal-stagger reveal">
              {[0, 2, 4].map((start) => (
                <div className="col-md-6 col-lg-4" key={start}>
                  {d.notIncluded.items.slice(start, start + 2).map((it, i) => (
                    <div className="plain-item" key={i}>
                      <i className={`bi ${it.icon}`} />
                      <div>
                        <h4>{it.title}</h4>
                        <p>{it.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS Y REGLAS */}
        <section id="precios">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.pricing.eyebrow}
              </span>
              <h2 className="section-title">{d.pricing.title}</h2>
            </div>
            <div className="row gy-4 reveal-stagger reveal">
              <div className="col-lg-6">
                <div className="card-nature price-card h-100">
                  <h3>
                    <i className="bi bi-cash-coin text-gold" /> {d.pricing.priceTitle}
                  </h3>
                  <ul>
                    {d.pricing.prices.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  <Link href={d.contactHref} className="btn-primary-nature">
                    <i className="bi bi-calendar-check" /> {d.pricing.priceCta}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-nature price-card h-100">
                  <h3>
                    <i className="bi bi-journal-check text-gold" /> {d.pricing.rulesTitle}
                  </h3>
                  <ul>
                    {d.pricing.rules.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-alt">
          <div className="container-nature">
            <div className="row gy-5">
              <div className="col-lg-4 reveal">
                <span className="eyebrow">{d.faq.eyebrow}</span>
                <h2 className="section-title">{d.faq.title}</h2>
                <p className="section-lead">{d.faq.lead}</p>
              </div>
              <div className="col-lg-8 reveal">
                {d.faq.items.map((item, i) => (
                  <div className={`faq-item${i === 0 ? " open" : ""}`} key={i}>
                    <button className="faq-q">
                      {item.q} <i className="bi bi-chevron-down" />
                    </button>
                    <div className="faq-a">
                      <p>
                        {item.a}
                        {i === d.faq.items.length - 1 ? (
                          <>
                            {" "}
                            <Link
                              href={d.contactHref}
                              className="text-gold fw-bold"
                            >
                              {d.nav.cta}
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion">
          <div className="container-nature">
            <div className="section-head text-center reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                {d.location.eyebrow}
              </span>
              <h2 className="section-title">{d.location.title}</h2>
              <p className="section-lead mx-auto">{d.location.lead}</p>
            </div>
            <div className="row gy-4 reveal-stagger reveal">
              <div className="col-lg-5">
                <div className="card-nature location-card h-100">
                  <h3>
                    <i className="bi bi-geo-alt-fill text-gold" />{" "}
                    {d.location.addressTitle}
                  </h3>
                  <p className="mb-3">
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="fw-bold text-gold"
                    >
                      {d.location.addressLine1}
                    </a>
                  </p>
                  <p className="mb-4">
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="fw-bold text-gold"
                    >
                      {d.location.addressLine2}
                    </a>
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-nature"
                  >
                    <i className="bi bi-map" /> {d.location.mapsCta}
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="map-frame">
                  <iframe
                    title={d.location.title}
                    src={d.location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter dict={d} variant="home" />

      <a
        className="wa-fab"
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label={d.whatsappAria}
      >
        <i className="bi bi-whatsapp" />
      </a>
      <button className="to-top" id="toTop" aria-label={d.toTopAria}>
        <i className="bi bi-arrow-up" />
      </button>

      <Lightboxes />
      <SiteEffects />
    </>
  );
}
