"use client";

import { useEffect } from "react";

// Port 1:1 del <script> que traían index.html / en/index.html.
// Se ejecuta una vez tras el montaje; Bootstrap se carga dinámicamente en cliente.
export default function SiteEffects() {
  useEffect(() => {
    let cleanupFns = [];

    (async () => {
      const bootstrap = await import(
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      ).then((m) => m.default || m);

      // --- Navbar sólida + barra de progreso de sendero ---
      const nav = document.getElementById("mainNav");
      const toTop = document.getElementById("toTop");
      const trailFill = document.getElementById("trail-fill");
      const trailMarker = document.getElementById("trailMarker");

      function onScroll() {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (nav) nav.classList.toggle("scrolled", y > 40);
        if (toTop) toTop.classList.toggle("show", y > 500);
        const doc = document.documentElement;
        const pct = y / (doc.scrollHeight - doc.clientHeight || 1);
        if (trailFill) trailFill.style.width = pct * 100 + "%";
        if (trailMarker) {
          const railH = window.innerHeight - 40;
          trailMarker.style.top = 20 + pct * railH + "px";
        }
      }
      document.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanupFns.push(() => document.removeEventListener("scroll", onScroll));

      if (toTop) {
        const handler = () =>
          window.scrollTo({ top: 0, behavior: "smooth" });
        toTop.addEventListener("click", handler);
        cleanupFns.push(() => toTop.removeEventListener("click", handler));
      }

      // --- Menú móvil ---
      const burger = document.getElementById("burgerBtn");
      const panel = document.getElementById("mobilePanel");
      if (burger && panel) {
        const toggle = () => {
          const open = panel.classList.toggle("open");
          burger.classList.toggle("is-open", open);
          burger.setAttribute("aria-expanded", String(open));
        };
        burger.addEventListener("click", toggle);
        cleanupFns.push(() => burger.removeEventListener("click", toggle));

        panel.querySelectorAll("[data-close]").forEach((a) => {
          const close = () => {
            panel.classList.remove("open");
            burger.classList.remove("is-open");
          };
          a.addEventListener("click", close);
          cleanupFns.push(() => a.removeEventListener("click", close));
        });
      }

      // --- Reveal on scroll ---
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
      cleanupFns.push(() => io.disconnect());

      // --- Tabs de plantas ---
      document.querySelectorAll(".floor-tab").forEach((btn) => {
        const handler = () => {
          document.querySelectorAll(".floor-tab").forEach((b) => {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
          });
          document
            .querySelectorAll(".floor-panel")
            .forEach((p) => p.classList.remove("active"));
          btn.classList.add("active");
          btn.setAttribute("aria-selected", "true");
          const target = document.getElementById("panel-" + btn.dataset.floor);
          if (target) target.classList.add("active");
        };
        btn.addEventListener("click", handler);
        cleanupFns.push(() => btn.removeEventListener("click", handler));
      });

      // --- Filtro de galería ---
      document.querySelectorAll(".filter-pill").forEach((pill) => {
        const handler = () => {
          document
            .querySelectorAll(".filter-pill")
            .forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          const f = pill.dataset.filter;
          document
            .querySelectorAll("#galleryGrid .gallery-item")
            .forEach((item) => {
              const show = f === "all" || item.dataset.cat === f;
              item.classList.toggle("hide", !show);
            });
        };
        pill.addEventListener("click", handler);
        cleanupFns.push(() => pill.removeEventListener("click", handler));
      });

      // --- FAQ acordeón ---
      document.querySelectorAll(".faq-item").forEach((item) => {
        const q = item.querySelector(".faq-q");
        const a = item.querySelector(".faq-a");
        if (item.classList.contains("open") && a) {
          a.style.maxHeight = a.scrollHeight + "px";
        }
        if (!q) return;
        const handler = () => {
          const isOpen = item.classList.contains("open");
          document.querySelectorAll(".faq-item").forEach((o) => {
            o.classList.remove("open");
            const oa = o.querySelector(".faq-a");
            if (oa) oa.style.maxHeight = 0;
          });
          if (!isOpen && a) {
            item.classList.add("open");
            a.style.maxHeight = a.scrollHeight + "px";
          }
        };
        q.addEventListener("click", handler);
        cleanupFns.push(() => q.removeEventListener("click", handler));
      });

      // --- Lightbox: miniatura -> modal + carrusel ---
      document
        .querySelectorAll(".lightbox-trigger, .gallery-item, .floor-thumb")
        .forEach((el) => {
          const handler = () => {
            const modalId = el.dataset.modal || "modalGaleria";
            const index = parseInt(el.dataset.index || "0", 10);
            const modalEl = document.getElementById(modalId);
            if (!modalEl) return;
            const carouselEl = modalEl.querySelector(".carousel");
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
            modal.show();
            setTimeout(() => carousel.to(index), 60);
          };
          el.addEventListener("click", handler);
          cleanupFns.push(() => el.removeEventListener("click", handler));
        });

      // --- Zoom táctil en imágenes del lightbox ---
      document.querySelectorAll(".zoomable").forEach((img) => {
        const handler = () => img.classList.toggle("zoomed");
        img.addEventListener("click", handler);
        cleanupFns.push(() => img.removeEventListener("click", handler));
      });

      // --- Año actual en el footer ---
      const footerYear = document.getElementById("footerYear");
      if (footerYear) footerYear.textContent = new Date().getFullYear();
    })();

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  return null;
}
