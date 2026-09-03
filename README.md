# El Paso del Perezoso — sitio web (Next.js)

Sitio de la cabaña **El Paso del Perezoso** (Pococí, Limón, Costa Rica).

> Esta rama (`next-migration`) es la migración del sitio estático original a
> **Next.js** (App Router) con **exportación estática**. El sitio original en HTML
> plano quedó guardado en [`legacy/`](legacy/) como referencia.

## Requisitos

- Node.js 18.18+ (probado con Node 24)
- npm

## Empezar

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

- `/` → inicio en español
- `/en/` → inicio en inglés
- `/contact/` y `/en/contact/` → formulario de reserva (WhatsApp)

## Build de producción (estático)

```bash
npm run build
```

Genera la carpeta `out/` con HTML/CSS/JS plano. Se puede subir tal cual a:

- **GitHub Pages** (copiar el contenido de `out/`)
- **Vercel** / **Netlify** (detectan Next automáticamente)
- Apache / XAMPP (servir `out/` como carpeta pública)

## Estructura

```
app/
  layout.js            layout raíz: carga Bootstrap + /public/css/styles.css
  page.js              inicio ES  -> <HomePage dict={es} />
  contact/page.js      reserva ES -> <BookingPage />
  en/page.js           inicio EN
  en/contact/page.js   reserva EN
components/
  HomePage.jsx         estructura completa de la portada (server component)
  BookingPage.jsx      página de reserva
  BookingForm.jsx      formulario (client) — arma el mensaje de WhatsApp
  SiteNav.jsx          navbar + menú móvil
  SiteFooter.jsx       pie de página
  SiteEffects.jsx      port del <script> original (scroll, tabs, filtros,
                       acordeón FAQ, lightbox con Bootstrap)
  Lightboxes.jsx       los 4 modales de carrusel
lib/
  dict.js              textos ES / EN de la portada
  booking.js           textos ES / EN de la página de reserva
  images.js            listas de imágenes y constantes (WhatsApp, Google Maps)
public/
  css/styles.css       hoja de estilos original (sin cambios)
  img/  assets/        imágenes originales
legacy/                sitio HTML anterior, congelado
```

## Pendiente (no incluido en este primer paso)

- `<html lang>` sigue fijo en `es`; para SEO fino conviene un layout por idioma.
- Migrar el CSS de `public/css/styles.css` a CSS Modules o Tailwind (hoy se usa
  tal cual).
- Reemplazar el lightbox de Bootstrap por un componente React propio (opcional).
- Revisar el número de WhatsApp real en `lib/images.js` antes de publicar.
