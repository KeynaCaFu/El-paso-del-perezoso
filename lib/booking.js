// Textos de la página de reserva (contact) en español e inglés.

export const bookingText = {
  es: {
    meta: {
      title: "Solicitar disponibilidad · El Paso del Perezoso",
      description:
        "Solicitar disponibilidad para reservar la cabaña El Paso del Perezoso en Cariari, Limón.",
    },
    heroEyebrow: "Reserva por WhatsApp",
    heroTitle: "Solicita disponibilidad",
    heroText:
      "Completa el formulario y te escribimos por WhatsApp para confirmar fechas, tarifa y detalles de tu estadía o visita de un día.",
    steps: [
      "Completas el formulario",
      "Se abre WhatsApp con tu solicitud",
      "Confirmamos fecha y precio",
    ],
    sideTag: "Antes de enviar",
    sideTitle: "Ten esto a mano",
    sideItems: [
      { icon: "bi-calendar-check", label: "Fechas tentativas de entrada y salida" },
      { icon: "bi-people", label: "Número de huéspedes" },
      { icon: "bi-chat-dots", label: "Si es visita de un día o con hospedaje" },
      { icon: "bi-heart", label: "Si viajas con mascota" },
    ],
    sideWhatsApp: "Prefiero escribir directo por WhatsApp",
    form: {
      fullName: "Nombre completo",
      phone: "Teléfono",
      checkIn: "Fecha de entrada",
      checkOut: "Fecha de salida",
      guests: "Número de huéspedes",
      guestsPlaceholder: "Selecciona cantidad de huéspedes",
      guestsOptions: [
        "1 huésped",
        "2 huéspedes",
        "3 huéspedes",
        "4 huéspedes",
        "5+ huéspedes",
      ],
      requests: "Solicitudes especiales",
      submit: "Enviar solicitud por WhatsApp",
      success:
        "¡Gracias! Tu solicitud fue recibida. Se abrirá WhatsApp para confirmar los detalles contigo.",
      errCheckInPast: "La fecha de entrada no puede ser anterior a hoy",
      errNoCheckIn: "Selecciona primero la fecha de entrada",
      errCheckOutOrder:
        "La fecha de salida debe ser posterior a la fecha de entrada",
      errCheckOutPast: "La fecha de salida no puede ser anterior a hoy",
      errFix: "Por favor, corrige los errores en las fechas",
    },
    waMessage: {
      header: "*NUEVA RESERVA - EL PASO DEL PEREZOSO*",
      client: "*Datos del Cliente:*",
      name: "Nombre",
      phone: "Teléfono",
      details: "*Detalles de la Reserva:*",
      checkIn: "Fecha Entrada",
      checkOut: "Fecha Salida",
      guests: "Número de Huéspedes",
      requests: "*Solicitudes Especiales:*",
      none: "Ninguna",
    },
    locale: "es-CR",
  },
  en: {
    meta: {
      title: "Check availability · El Paso del Perezoso",
      description:
        "Request availability to book the El Paso del Perezoso cabin in Cariari, Limón.",
    },
    heroEyebrow: "Book via WhatsApp",
    heroTitle: "Check availability",
    heroText:
      "Fill out the form and we will message you on WhatsApp to confirm dates, rate, and details of your stay or day visit.",
    steps: [
      "You fill out the form",
      "WhatsApp opens with your request",
      "We confirm date and price",
    ],
    sideTag: "Before you send",
    sideTitle: "Have this ready",
    sideItems: [
      { icon: "bi-calendar-check", label: "Tentative check-in and check-out dates" },
      { icon: "bi-people", label: "Number of guests" },
      { icon: "bi-chat-dots", label: "Whether it is a day visit or an overnight stay" },
      { icon: "bi-heart", label: "Whether you travel with a pet" },
    ],
    sideWhatsApp: "I'd rather message directly on WhatsApp",
    form: {
      fullName: "Full name",
      phone: "Phone",
      checkIn: "Check-in date",
      checkOut: "Check-out date",
      guests: "Number of guests",
      guestsPlaceholder: "Select number of guests",
      guestsOptions: ["1 guest", "2 guests", "3 guests", "4 guests", "5+ guests"],
      requests: "Special requests",
      submit: "Send request via WhatsApp",
      success:
        "Thank you! Your request was received. WhatsApp will open to confirm the details with you.",
      errCheckInPast: "The check-in date cannot be earlier than today",
      errNoCheckIn: "Select the check-in date first",
      errCheckOutOrder: "The check-out date must be after the check-in date",
      errCheckOutPast: "The check-out date cannot be earlier than today",
      errFix: "Please correct the errors in the dates",
    },
    waMessage: {
      header: "*NEW BOOKING - EL PASO DEL PEREZOSO*",
      client: "*Client details:*",
      name: "Name",
      phone: "Phone",
      details: "*Booking details:*",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Number of guests",
      requests: "*Special requests:*",
      none: "None",
    },
    locale: "en-US",
  },
};
