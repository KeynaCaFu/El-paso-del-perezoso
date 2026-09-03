import Link from "next/link";

export default function SiteFooter({ dict, variant = "home" }) {
  const { footer, homeHref, contactHref } = dict;
  const anchor = (hash) => (variant === "home" ? hash : `${homeHref}${hash}`);

  return (
    <footer className="site-footer">
      <div className="container-nature">
        <div className="row align-items-center gy-3">
          <div className="col-md-6 d-flex align-items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.png"
              alt="El Paso del Perezoso"
              style={{ height: "38px", width: "auto" }}
            />
            <span className="small">
              © <span id="footerYear">2025</span> El Paso del Perezoso.{" "}
              {footer.rights}
            </span>
          </div>
          <div className="col-md-6 text-md-end footer-links">
            {footer.links.map((l, i) => (
              <span key={i}>
                {l.href === "__contact__" ? (
                  <Link href={contactHref}>{l.label}</Link>
                ) : (
                  <a href={anchor(l.href)}>{l.label}</a>
                )}
                {i < footer.links.length - 1 ? "·" : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
