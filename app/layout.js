import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://elpasodelperezoso.com"),
  title: "Cabaña El Paso del Perezoso · Pococí, Costa Rica",
  description:
    "Cabaña de madera en la naturaleza cerca de Tortuguero, Costa Rica.",
  icons: {
    icon: "/assets/logoMejoradoP.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/css/styles.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
