import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import SiteEffects from "./SiteEffects";
import BookingForm from "./BookingForm";
import { WHATSAPP_NUMBER } from "@/lib/images";

export default function BookingPage({ dict, text }) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;
  const formT = {
    ...text.form,
    wa: text.waMessage,
  };

  return (
    <>
      <SiteNav dict={dict} variant="contact" />

      <main>
        <header className="booking-hero">
          <div className="container-nature">
            <span className="eyebrow">{text.heroEyebrow}</span>
            <h1>{text.heroTitle}</h1>
            <p>{text.heroText}</p>
            <div className="steps-row">
              {text.steps.map((s, i) => (
                <span className="step-chip" key={i}>
                  <b>{i + 1}</b> {s}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="booking-wrap">
          <div className="container-nature">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 reveal">
                <div className="side-note">
                  <span
                    className="rounded-pill-tag"
                    style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
                  >
                    <i className="bi bi-info-circle" /> {text.sideTag}
                  </span>
                  <h3 className="mt-3">{text.sideTitle}</h3>
                  <ul>
                    {text.sideItems.map((it, i) => (
                      <li key={i}>
                        <i className={`bi ${it.icon}`} /> {it.label}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="wa-link"
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-whatsapp" /> {text.sideWhatsApp}
                  </a>
                </div>
              </div>

              <div className="col-lg-7 reveal">
                <BookingForm t={formT} locale={text.locale} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter dict={dict} variant="contact" />

      <a
        className="wa-fab"
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label={dict.whatsappAria}
      >
        <i className="bi bi-whatsapp" />
      </a>

      <SiteEffects />
    </>
  );
}
