// Textos de la página de inicio en español e inglés.
// La estructura es idéntica para los dos idiomas; sólo cambian los strings.

export const es = {
  lang: "es",
  htmlLang: "es",
  homeHref: "/",
  contactHref: "/contact/",
  otherLangHref: "/en/",
  meta: {
    title: "Cabaña El Paso del Perezoso · Pococí, Costa Rica",
    description:
      "Cabaña de madera en la naturaleza cerca de Tortuguero, Costa Rica. Lago privado, jardín, mini granja y senderos. Ideal para escapadas de un día o para hospedarse en familia, pareja o con amigos.",
  },
  nav: {
    links: [
      { href: "#sobre", label: "Sobre" },
      { href: "#caracteristicas", label: "La cabaña" },
      { href: "#galeria", label: "Galería" },
      { href: "#detalles", label: "Servicios" },
      { href: "#faq", label: "Preguntas" },
      { href: "#ubicacion", label: "Ubicación" },
    ],
    cta: "Ver disponibilidad",
    menuLabel: "Abrir menú",
    home: "Inicio",
  },
  hero: {
    title: ["El Paso", "del Perezoso"],
    sub: "Dos plantas de madera frente a un lago privado, entre jardín, mini granja y senderos de bosque. Perfecta para una escapada de un día o para hospedarte varias noches — en familia, en pareja o con amigos.",
    ctaPrimary: "Ver disponibilidad",
    ctaSecondary: "Conocer la cabaña",
    facts: [
      { icon: "bi-layers", label: "2 plantas" },
      { icon: "bi-water", label: "Pequeño lago privado" },
      { icon: "bi-signpost-split", label: "Senderos naturales" },
      { icon: "bi-heart", label: "Pet-friendly" },
      { icon: "bi-car-front", label: "Parqueo gratis" },
    ],
  },
  about: {
    badge: "Bitácora del lugar",
    title: "Un refugio de madera, rodeado de un bosque Tropical",
    lead: "Aquí puedes bajar el ritmo: sin televisor ni wifi que compitan por tu atención, con el bosque, un pequeño lago y una mini granja como única agenda. Ideal como parada camino a Tortuguero, o como destino en sí mismo para un fin de semana en familia, con amigos o en pareja.",
    glanceTitle: "En una mirada",
    glance: [
      { icon: "bi-door-open", label: "Entrada privada e independiente" },
      { icon: "bi-tree", label: "Jardín, mini granja y senderos naturales" },
      { icon: "bi-binoculars", label: "Avistamiento de fauna en su hábitat" },
      { icon: "bi-water", label: "Acceso a un pequeño lago" },
    ],
  },
  photos: {
    eyebrow: "Primer vistazo",
    title: "Fotos de la cabaña",
    lead: "Empieza por aquí para ver el exterior y algunos espacios interiores antes de entrar a los detalles.",
    cardTitle: "Cómo verlas",
    cardHeading: "Un recorrido visual rápido",
    cardText:
      "Toca cualquier foto para abrirla en grande. Primero verás el exterior y luego algunos espacios de la planta baja para ubicarte mejor.",
    badges: [
      { icon: "bi-camera", label: "Exterior" },
      { icon: "bi-house", label: "Interior" },
      { icon: "bi-arrows-fullscreen", label: "Vista ampliada" },
    ],
  },
  features: {
    eyebrow: "La cabaña",
    title: "Dos plantas, todo lo necesario",
    lead: "Explora cada nivel de la cabaña — toca las fotos para verlas en grande.",
    tabs: { baja: "Planta baja", alta: "Planta alta" },
    includesTitle: "Incluye",
    alta: {
      includes: [
        "Habitación grande con 3 camas confortables",
        "Baño privado",
        "Terraza amplia con vistas al bosque",
      ],
      groups: [
        { title: "Recámara", indices: [0, 1, 2] },
        { title: "Baño completo", indices: [3, 4] },
        { title: "Balcón", indices: [6, 7, 8, 9] },
      ],
    },
    baja: {
      includes: [
        "Sala espaciosa",
        "Cocina completa equipada",
        "Cuarto adicional",
        "Baño completo",
      ],
      groups: [
        { title: "Recámara", indices: [0, 1, 2] },
        { title: "Sala", indices: [3, 4, 5, 6, 7] },
        { title: "Cocina", indices: [8, 9] },
        { title: "Baño completo", indices: [10, 11, 12, 13] },
      ],
    },
  },
  gallery: {
    eyebrow: "Álbum de campo",
    title: "Galería",
    lead: "El jardín, la fauna silvestre, nuestros animales y un pequeño lago — filtra por categoría.",
    filters: [
      { key: "all", label: "Todas" },
      { key: "jardin", label: "Jardín" },
      { key: "fauna", label: "Fauna silvestre" },
      { key: "animales", label: "Nuestros animales" },
      { key: "lago", label: "Nuestro pequeño lago" },
    ],
  },
  details: {
    eyebrow: "Lo que incluye",
    title: "Todo lo que ofrece este lugar",
    cards: [
      {
        icon: "bi-binoculars",
        title: "Vistas panorámicas",
        items: [{ icon: "bi-image-alt", label: "Vista al lago, jardín, patio y montaña" }],
      },
      {
        icon: "bi-droplet",
        title: "Baño",
        items: [
          { icon: "bi-bucket", label: "Productos de limpieza" },
          { icon: "bi-droplet", label: "Gel para baño" },
        ],
      },
      {
        icon: "bi-moon-stars",
        title: "Habitación y lavandería",
        items: [
          { icon: "bi-check-circle", label: "Toallas, sábanas, jabón y papel higiénico" },
          { icon: "bi-check-circle", label: "Almohadas y cobijas adicionales" },
          { icon: "bi-shield-check", label: "Mosquitero" },
        ],
      },
      {
        icon: "bi-fan",
        title: "Calefacción y refrigeración",
        items: [{ icon: "bi-fan", label: "Ventiladores portátiles" }],
      },
      {
        icon: "bi-egg-fried",
        title: "Cocina y comedor",
        items: [
          { icon: "bi-egg-fried", label: "Ollas, sartenes, aceite, sal y pimienta" },
          { icon: "bi-collection", label: "Platos y cubiertos" },
          { icon: "bi-fire", label: "Estufa de leña exterior" },
          { icon: "bi-cup-hot", label: "Cafetera y café" },
          { icon: "bi-basket", label: "Utensilios para parrillada" },
        ],
      },
      {
        icon: "bi-door-closed",
        title: "Ubicación",
        items: [
          { icon: "bi-water", label: "Acceso al lago por sendero o muelle" },
          { icon: "bi-door-closed", label: "Entrada privada" },
        ],
      },
      {
        icon: "bi-tree",
        title: "Exterior",
        items: [
          { icon: "bi-building", label: "Terraza o balcón" },
          { icon: "bi-bounding-box", label: "Jardín privado con valla" },
          { icon: "bi-emoji-smile", label: "Hamaca y comedor al aire libre" },
        ],
      },
      {
        icon: "bi-car-front",
        title: "Estacionamiento",
        items: [{ icon: "bi-car-front", label: "Gratuito en las instalaciones" }],
      },
      {
        icon: "bi-heart",
        title: "Actividades",
        items: [
          { icon: "bi-tree", label: "Mini granja con animales" },
          { icon: "bi-flower1", label: "Senderos naturales" },
          { icon: "bi-binoculars", label: "Avistamiento de aves" },
        ],
      },
    ],
  },
  notIncluded: {
    eyebrow: "Para que llegues preparado",
    title: "Lo que no incluye",
    items: [
      { icon: "bi-wifi-off", title: "Wifi", text: "Zona rural con señal limitada." },
      { icon: "bi-tv", title: "TV", text: "El enfoque es la naturaleza y el descanso." },
      { icon: "bi-wind", title: "Aire acondicionado", text: "Se reemplaza con ventiladores portátiles." },
      { icon: "bi-basket2", title: "Lavadora y secadora", text: "No disponibles para huéspedes." },
      { icon: "bi-exclamation-octagon", title: "Detector de humo", text: "No instalado." },
      { icon: "bi-exclamation-octagon-fill", title: "Detector de monóxido", text: "El anfitrión indicó que no es necesario." },
    ],
  },
  pricing: {
    eyebrow: "Antes de reservar",
    title: "Precios y reglas",
    priceTitle: "Precios",
    prices: [
      "La tarifa varía según temporada y número de huéspedes.",
      "Solicita tu cotización por WhatsApp desde la página de reserva.",
      "Descuentos para estancias de varias noches, según disponibilidad.",
    ],
    priceCta: "Solicitar precio y disponibilidad",
    rulesTitle: "Reglas de la casa",
    rules: [
      "No se permite fumar dentro de la cabaña (sí en exteriores designados).",
      "Mascotas bienvenidas; los dueños responden por daños o limpieza adicional.",
      "La cocina de leña se usa únicamente con supervisión del anfitrión.",
      "Niños siempre bajo supervisión, en especial cerca del lago.",
    ],
  },
  faq: {
    eyebrow: "Antes de escribirnos",
    title: "Preguntas frecuentes",
    lead: "Respuestas rápidas sobre el alojamiento y las actividades.",
    items: [
      { q: "¿Hay wifi o TV?", a: "No. Buscamos una experiencia de desconexión en la naturaleza. Contamos con ventiladores portátiles." },
      { q: "¿Se admiten mascotas?", a: "Sí, son bienvenidas. Avísanos al reservar; podrían aplicarse reglas de limpieza y cuidado del mobiliario." },
      { q: "¿La cocina está equipada?", a: "Sí. Tiene utensilios, agua potable, microondas, refrigeradora, pequeña estufa eléctrica, sartenes y cafetera. La cocina de leña exterior se usa con supervisión." },
      { q: "¿Se puede acceder al lago?", a: "Sí, hay acceso por sendero o muelle. Por favor, supervisa a los menores en todo momento." },
      { q: "¿Cómo reservo y pago?", a: "Solicita disponibilidad en nuestra página de reserva. Coordinamos confirmación y detalles por WhatsApp." },
    ],
  },
  location: {
    eyebrow: "Cómo llegar",
    title: "Ubicación",
    lead: "Encuéntranos en el corazón de la naturaleza, camino a Tortuguero.",
    addressTitle: "Dirección",
    addressLine1: "Limón, Pococí, Cariari",
    addressLine2: "Cabaña El Paso del Perezoso",
    mapsCta: "Abrir en Google Maps",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2235.6925265231675!2d-83.7272337190867!3d10.373949397918313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIyJzI2LjYiTiA4M8KwNDMnMzUuNCJX!5e1!3m2!1ses-419!2scr!4v1770849034977!5m2!1ses-419!2scr",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    links: [
      { href: "#home", label: "Inicio" },
      { href: "#caracteristicas", label: "La cabaña" },
      { href: "__contact__", label: "Reservar" },
    ],
  },
  whatsappAria: "Escribir por WhatsApp",
  toTopAria: "Volver arriba",
};

export const en = {
  lang: "en",
  htmlLang: "en",
  homeHref: "/en/",
  contactHref: "/en/contact/",
  otherLangHref: "/",
  meta: {
    title: "El Paso del Perezoso Cabin · Pococí, Costa Rica",
    description:
      "Wooden cabin in nature near Tortuguero, Costa Rica. Private pond, garden, mini farm, and nature trails. Perfect for a day escape or to stay overnight with family, couple, or friends.",
  },
  nav: {
    links: [
      { href: "#sobre", label: "About" },
      { href: "#caracteristicas", label: "The Cabin" },
      { href: "#galeria", label: "Gallery" },
      { href: "#detalles", label: "Services" },
      { href: "#faq", label: "FAQ" },
      { href: "#ubicacion", label: "Location" },
    ],
    cta: "Check availability",
    menuLabel: "Open menu",
    home: "Home",
  },
  hero: {
    title: ["El Paso", "del Perezoso"],
    sub: "Two wooden floors facing a private pond, surrounded by a garden, a mini farm, and forest trails. Perfect for a day escape or to stay several nights — with family, as a couple, or with friends.",
    ctaPrimary: "Check availability",
    ctaSecondary: "Explore the cabin",
    facts: [
      { icon: "bi-layers", label: "2 floors" },
      { icon: "bi-water", label: "Private pond" },
      { icon: "bi-signpost-split", label: "Nature trails" },
      { icon: "bi-heart", label: "Pet-friendly" },
      { icon: "bi-car-front", label: "Free parking" },
    ],
  },
  about: {
    badge: "Field notes",
    title: "A wooden retreat, surrounded by tropical forest",
    lead: "Here you can slow down: no TV or Wi-Fi competing for your attention, just the forest, a small pond, and a mini farm as your only agenda. Ideal as a stop on the way to Tortuguero, or as a destination in itself for a weekend with family, friends, or as a couple.",
    glanceTitle: "At a glance",
    glance: [
      { icon: "bi-door-open", label: "Private, independent entrance" },
      { icon: "bi-tree", label: "Garden, mini farm, and nature trails" },
      { icon: "bi-binoculars", label: "Wildlife viewing in its natural habitat" },
      { icon: "bi-water", label: "Access to a small pond" },
    ],
  },
  photos: {
    eyebrow: "First look",
    title: "Cabin photos",
    lead: "Start here to see the exterior and a few interior spaces before diving into the details.",
    cardTitle: "How to view them",
    cardHeading: "A quick visual walkthrough",
    cardText:
      "Tap any photo to open it full size. You will first see the exterior, then a few lower-floor spaces to help you orient yourself.",
    badges: [
      { icon: "bi-camera", label: "Exterior" },
      { icon: "bi-house", label: "Interior" },
      { icon: "bi-arrows-fullscreen", label: "Enlarged view" },
    ],
  },
  features: {
    eyebrow: "The cabin",
    title: "Two floors, everything you need",
    lead: "Explore each level of the cabin — tap the photos to see them larger.",
    tabs: { baja: "Lower floor", alta: "Upper floor" },
    includesTitle: "Includes",
    alta: {
      includes: [
        "Large bedroom with 3 comfortable beds",
        "Private bathroom",
        "Wide terrace with forest views",
      ],
      groups: [
        { title: "Bedroom", indices: [0, 1, 2] },
        { title: "Full bathroom", indices: [3, 4] },
        { title: "Balcony", indices: [6, 7, 8, 9] },
      ],
    },
    baja: {
      includes: [
        "Spacious living room",
        "Fully equipped kitchen",
        "Additional bedroom",
        "Full bathroom",
      ],
      groups: [
        { title: "Bedroom", indices: [0, 1, 2] },
        { title: "Living room", indices: [3, 4, 5, 6, 7] },
        { title: "Kitchen", indices: [8, 9] },
        { title: "Full bathroom", indices: [10, 11, 12, 13] },
      ],
    },
  },
  gallery: {
    eyebrow: "Field album",
    title: "Gallery",
    lead: "The garden, wildlife, our animals, and the pond — filter by category.",
    filters: [
      { key: "all", label: "All" },
      { key: "jardin", label: "Garden" },
      { key: "fauna", label: "Wildlife" },
      { key: "animales", label: "Our animals" },
      { key: "lago", label: "Our pond" },
    ],
  },
  details: {
    eyebrow: "What is included",
    title: "Everything this place offers",
    cards: [
      {
        icon: "bi-binoculars",
        title: "Scenic views",
        items: [{ icon: "bi-image-alt", label: "Lake view, garden, patio, and mountain" }],
      },
      {
        icon: "bi-droplet",
        title: "Bathroom",
        items: [
          { icon: "bi-bucket", label: "Cleaning products" },
          { icon: "bi-droplet", label: "Shower gel" },
        ],
      },
      {
        icon: "bi-moon-stars",
        title: "Bedroom and laundry",
        items: [
          { icon: "bi-check-circle", label: "Towels, bed sheets, soap, and toilet paper" },
          { icon: "bi-check-circle", label: "Extra pillows and blankets" },
          { icon: "bi-shield-check", label: "Mosquito net" },
        ],
      },
      {
        icon: "bi-fan",
        title: "Heating and cooling",
        items: [{ icon: "bi-fan", label: "Portable fans" }],
      },
      {
        icon: "bi-egg-fried",
        title: "Kitchen and dining",
        items: [
          { icon: "bi-egg-fried", label: "Pots, pans, oil, salt, and pepper" },
          { icon: "bi-collection", label: "Dishes and silverware" },
          { icon: "bi-fire", label: "Outdoor wood-fired stove" },
          { icon: "bi-cup-hot", label: "Coffee maker and coffee" },
          { icon: "bi-basket", label: "BBQ utensils" },
        ],
      },
      {
        icon: "bi-door-closed",
        title: "Location",
        items: [
          { icon: "bi-water", label: "Lake access via trail or dock" },
          { icon: "bi-door-closed", label: "Private entrance" },
        ],
      },
      {
        icon: "bi-tree",
        title: "Outdoor",
        items: [
          { icon: "bi-building", label: "Terrace or balcony" },
          { icon: "bi-bounding-box", label: "Private garden with fence" },
          { icon: "bi-emoji-smile", label: "Hammock and outdoor dining area" },
        ],
      },
      {
        icon: "bi-car-front",
        title: "Parking",
        items: [{ icon: "bi-car-front", label: "Free on-premises parking" }],
      },
      {
        icon: "bi-heart",
        title: "Activities",
        items: [
          { icon: "bi-tree", label: "Mini farm with animals" },
          { icon: "bi-flower1", label: "Nature trails" },
          { icon: "bi-binoculars", label: "Birdwatching" },
        ],
      },
    ],
  },
  notIncluded: {
    eyebrow: "So you arrive prepared",
    title: "What is not included",
    items: [
      { icon: "bi-wifi-off", title: "Wi-Fi", text: "Rural area with limited signal." },
      { icon: "bi-tv", title: "TV", text: "The focus is on nature and rest." },
      { icon: "bi-wind", title: "Air conditioning", text: "Replaced with portable fans." },
      { icon: "bi-basket2", title: "Washer and dryer", text: "Not available for guests." },
      { icon: "bi-exclamation-octagon", title: "Smoke detector", text: "Not installed." },
      { icon: "bi-exclamation-octagon-fill", title: "Carbon monoxide detector", text: "The host indicated it is not necessary." },
    ],
  },
  pricing: {
    eyebrow: "Before booking",
    title: "Prices and rules",
    priceTitle: "Prices",
    prices: [
      "Rates vary by season and number of guests.",
      "Request your quote via WhatsApp from the booking page.",
      "Multi-night stays may receive a discount depending on availability.",
    ],
    priceCta: "Request price and availability",
    rulesTitle: "House rules",
    rules: [
      "No smoking inside the cabin (allowed in designated outdoor areas).",
      "Pets are welcome; owners are responsible for any damage or extra cleaning.",
      "Use the wood-fired stove only under host supervision.",
      "For safety, always supervise children, especially near the pond.",
    ],
  },
  faq: {
    eyebrow: "Before you write us",
    title: "Frequently asked questions",
    lead: "Quick answers about the stay and activities.",
    items: [
      { q: "Is there Wi-Fi or TV?", a: "No. We aim for a nature disconnect experience. Portable fans are provided." },
      { q: "Are pets allowed?", a: "Yes, they are welcome. Let us know when booking; cleaning and furniture care rules may apply." },
      { q: "Is the kitchen equipped?", a: "Yes. It has utensils, drinking water, microwave, refrigerator, small electric stove, pans, and a coffee maker. The outdoor wood-fired stove is used under supervision." },
      { q: "Is there access to the pond?", a: "Yes, there is access via trail or dock. Please supervise children at all times." },
      { q: "How do I book and pay?", a: "Request availability on our booking page. We coordinate confirmation and details over WhatsApp." },
    ],
  },
  location: {
    eyebrow: "How to get here",
    title: "Location",
    lead: "Find us in the heart of nature on the way to Tortuguero.",
    addressTitle: "Address",
    addressLine1: "Limón, Pococí, Cariari",
    addressLine2: "El Paso del Perezoso Cabin",
    mapsCta: "Open in Google Maps",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2235.6925265231675!2d-83.7272337190867!3d10.373949397918313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIyJzI2LjYiTiA4M8KwNDMnMzUuNCJX!5e1!3m2!1sen!2scr!4v1770849034977!5m2!1sen!2scr",
  },
  footer: {
    rights: "All rights reserved.",
    links: [
      { href: "#home", label: "Home" },
      { href: "#caracteristicas", label: "The Cabin" },
      { href: "__contact__", label: "Book" },
    ],
  },
  whatsappAria: "Write on WhatsApp",
  toTopAria: "Back to top",
};

export const dicts = { es, en };
